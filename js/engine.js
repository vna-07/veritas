/* ── VERITAS Scoring Engine (deterministic) ── */
window.VERITAS_ENGINE = (function () {
  /* ─── Full 16‑Axis Set ─── */
  const AXIS_KEYS = [
    'transformation', 'stability',
    'stateAuthority', 'constitutionalLiberalism',
    'ubuntuCollectivism', 'individualRights',
    'panAfrican', 'westernAlignment',
    'traditionalAuthority', 'secularDemocracy',
    'racialRedress', 'nonRacialism',
    'economicLeft', 'economicRight',
    'authoritarian', 'libertarian'
  ];

  /* ── Ideology Database (external) ── */
  const IDEOLOGIES = window.VERITAS_IDEOLOGIES || {};

  /* ── 1. Axis Calculation ── */
  function calculateAxes(answers, questionBank) {
    const totals = {};
    const weightSums = {};
    AXIS_KEYS.forEach(k => { totals[k] = 0; weightSums[k] = 0; });

    Object.keys(answers).forEach(qid => {
      const ans = answers[qid];
      const question = questionBank.find(q => q.id === qid);
      if (!question || !question.axes) return;

      const effectiveWeight = ans.answer * (ans.confidence || 1);

      Object.keys(question.axes).forEach(axis => {
        if (totals.hasOwnProperty(axis)) {
          const axisWeight = question.axes[axis];
          totals[axis] += axisWeight * effectiveWeight;
          weightSums[axis] += Math.abs(axisWeight);
        }
      });
    });

    const result = {};
    AXIS_KEYS.forEach(k => {
      if (weightSums[k] > 0) {
        let val = totals[k] / weightSums[k];
        val *= 2; // amplify mild answers
        result[k] = Math.max(-2, Math.min(2, val));
      } else {
        result[k] = 0;
      }
    });
    return result;
  }

  /* ── 2. Party Matching (Euclidean distance) ── */
  function matchParties(userAxes, partyList) {
    const keys = AXIS_KEYS;
    const userVec = keys.map(k => userAxes[k] || 0);

    // Safety: zero vector -> 50% for all
    const userMag = Math.sqrt(userVec.reduce((s, v) => s + v * v, 0));
    if (userMag < 0.01) {
      return partyList.map(p => ({ ...p, match: 50 })).sort((a, b) => b.match - a.match);
    }

    return partyList.map(p => {
      const partyVec = keys.map(k => (p.axes && p.axes[k] !== undefined) ? p.axes[k] : 0);
      let sumSq = 0;
      for (let i = 0; i < userVec.length; i++) {
        sumSq += Math.pow(userVec[i] - partyVec[i], 2);
      }
      const dist = Math.sqrt(sumSq);
      const maxDist = Math.sqrt(keys.length * 16); // max diff per axis = 4
      const similarity = Math.round((1 - dist / maxDist) * 100);
      return { ...p, match: Math.max(0, Math.min(100, similarity)) };
    }).sort((a, b) => b.match - a.match);
  }

  /* ── 3. Ideology Evaluation (for Compass 3 fallback) ── */
  function evaluateIdeology(economicLeft, economicRight, authoritarian, libertarian) {
    const econScore = (economicRight - economicLeft) / 2 + 0.5;
    const socialScore = (libertarian - authoritarian) / 2 + 0.5;

    let ideologyKey;
    if (econScore < 0.5 && socialScore < 0.5) {
      ideologyKey = socialScore < 0.25 ? 'stalinism' : 'leninism';
    } else if (econScore >= 0.5 && socialScore < 0.5) {
      ideologyKey = 'fascism';
    } else if (econScore < 0.5 && socialScore >= 0.5) {
      ideologyKey = econScore < 0.3 ? 'social-democracy' : 'mandelalism';
    } else {
      ideologyKey = econScore > 0.75 ? 'classical-liberalism' : 'neo-liberalism';
    }
    return IDEOLOGIES[ideologyKey] || { title: 'Centrist', summary: 'A balanced position near the centre of the political spectrum.' };
  }

  /* ── 4. SA Quadrant ── */
  function getSAQuadrant(transformation, stability, stateAuthority, constLiberalism) {
    const x = stability - transformation;
    const y = stateAuthority - constLiberalism;
    if (x > 0 && y > 0) return 'INSTITUTIONAL ENFORCEMENT';
    if (x < 0 && y > 0) return 'CENTRALIZED REDRESS';
    if (x < 0 && y < 0) return 'GRASSROOTS RESTRUCTURING';
    return 'CONSTITUTIONAL SAFEGUARD';
  }

  /* ── 5. Redress Alignment Index (0‑100) ── */
  function computeRedressIndex(axes) {
    const val = ((axes.transformation || 0) + (axes.racialRedress || 0) + (axes.economicLeft || 0) + (axes.ubuntuCollectivism || 0)) / 4;
    return Math.round(Math.max(0, Math.min(100, (val + 2) * 25)));
  }

  /* ── 6. Institutional Protection Index (0‑100) ── */
  function computeInstitutionalIndex(axes) {
    const val = ((axes.constitutionalLiberalism || 0) + (axes.individualRights || 0) + (axes.westernAlignment || 0) - (axes.stateAuthority || 0)) / 4;
    return Math.round(Math.max(0, Math.min(100, (val + 2) * 25)));
  }

  /* ── 7. Nearest Ideologies (top‑N) ── */
  function getNearestIdeologies(axis, topN = 3) {
    const all = window.VERITAS_IDEOLOGIES || {};
    const entries = Object.entries(all).map(([key, ideo]) => {
      // Estimate ideology's position from its metrics
      const ideoEcon = (ideo.metrics.econIntervention - 5) * 0.4;   // 0…10 → -2…+2 (higher intervention = left)
      const ideoSocial = (ideo.metrics.individualAutonomy - 5) * 0.4 * -1; // invert: high autonomy → libertarian (negative on auth axis)
      const userEcon = (axis.economicRight || 0) - (axis.economicLeft || 0);
      const userSocial = (axis.authoritarian || 0) - (axis.libertarian || 0);
      const dist = Math.sqrt(Math.pow(userEcon - ideoEcon, 2) + Math.pow(userSocial - ideoSocial, 2));
      return { key, ...ideo, distance: dist };
    });
    entries.sort((a, b) => a.distance - b.distance);
    return entries.slice(0, topN);
  }

  return {
    calculateAxes,
    matchParties,
    evaluateIdeology,
    getSAQuadrant,
    computeRedressIndex,
    computeInstitutionalIndex,
    getNearestIdeologies
  };
})();