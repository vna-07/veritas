/* ── VERITAS Charts Module ── */
window.VERITAS_CHARTS = (function () {
  // ── Colour palette ──
  const GOLD = '#C5A059';
  const NAVY = '#1B263B';
  const CREAM = '#FDFBF7';
  const GREEN = '#1A5C3A';
  const RED = '#8B2020';
  const SLATE = '#6B7280';
  const BRASS_LIGHT = '#D4B878';
  const AUTH_LEFT = 'rgba(139,32,32,0.18)';
  const LIB_LEFT = 'rgba(26,92,58,0.18)';
  const AUTH_RIGHT = 'rgba(0,61,165,0.15)';
  const LIB_RIGHT = 'rgba(80,40,120,0.15)';
  const GLOBAL_AUTH_LEFT = '#FFDFDF';
  const GLOBAL_AUTH_RIGHT = '#DFEFFF';
  const GLOBAL_LIB_LEFT = '#E3FFDF';
  const GLOBAL_LIB_RIGHT = '#FFFEDF';

  // ── Helper: SVG compass base ──
  function compassBase(cx, cy, r, quadrants, labels, extra) {
    const w = r * 2 + 40;
    const h = r * 2 + 40;
    let svg = `<svg viewBox="0 0 ${w} ${h}" width="100%" xmlns="http://www.w3.org/2000/svg" style="max-width:${w}px;display:block;">`;
    for (const q of quadrants) {
      svg += `<path d="M${cx},${cy} L${q.x1},${q.y1} A${r},${r} 0 0,${q.sweep} ${q.x2},${q.y2} Z" fill="${q.fill}" />`;
    }
    for (let i = r / 4; i <= r; i += r / 4) {
      svg += `<circle cx="${cx}" cy="${cy}" r="${i}" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" stroke-dasharray="3,5"/>`;
    }
    svg += `<line x1="${cx}" y1="${cy - r}" x2="${cx}" y2="${cy + r}" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>`;
    svg += `<line x1="${cx - r}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>`;
    svg += `<text x="${cx}" y="${cy - r - 8}" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-family="Space Mono,monospace" font-size="11" font-weight="700">${labels.top}</text>`;
    svg += `<text x="${cx}" y="${cy + r + 16}" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-family="Space Mono,monospace" font-size="10">${labels.bottom}</text>`;
    svg += `<text x="${cx - r - 8}" y="${cy + 3}" text-anchor="end" fill="rgba(255,255,255,0.5)" font-family="Space Mono,monospace" font-size="10">${labels.left}</text>`;
    svg += `<text x="${cx + r + 8}" y="${cy + 3}" text-anchor="start" fill="rgba(255,255,255,0.5)" font-family="Space Mono,monospace" font-size="10">${labels.right}</text>`;
    svg += extra || '';
    svg += `</svg>`;
    return svg;
  }

  /* ── 1. SA Context Compass ── */
  function renderSACompass(containerId, saX, saY, axis) {
    const cx = 260, cy = 260, r = 240;
    const dotX = cx + Math.max(-1, Math.min(1, saX)) * (r * 0.75);
    const dotY = cy - Math.max(-1, Math.min(1, saY)) * (r * 0.75);

    const quadrants = [
      { x1: cx, y1: cy - r, x2: cx - r, y2: cy, sweep: 0, fill: AUTH_LEFT },
      { x1: cx, y1: cy - r, x2: cx + r, y2: cy, sweep: 1, fill: LIB_LEFT },
      { x1: cx + r, y1: cy, x2: cx, y2: cy + r, sweep: 1, fill: AUTH_RIGHT },
      { x1: cx, y1: cy + r, x2: cx - r, y2: cy, sweep: 1, fill: LIB_RIGHT }
    ];

    let partyDots = '';
    const parties = [
      { name: 'EFF', x: 130, y: 110, color: 'rgba(220,50,50,0.85)' },
      { name: 'MKP', x: 155, y: 145, color: 'rgba(180,40,40,0.75)' },
      { name: 'ANC', x: 210, y: 195, color: 'rgba(26,92,58,0.9)' },
      { name: 'RISE', x: 305, y: 220, color: 'rgba(201,168,76,0.8)' },
      { name: 'DA', x: 360, y: 230, color: 'rgba(0,61,165,0.85)' },
      { name: 'IFP', x: 330, y: 310, color: 'rgba(90,62,133,0.8)' },
      { name: 'FF+', x: 390, y: 340, color: 'rgba(0,61,165,0.6)' },
      { name: 'PA', x: 410, y: 380, color: 'rgba(60,60,60,0.7)' }
    ];
    parties.forEach(p => {
      partyDots += `<circle cx="${p.x}" cy="${p.y}" r="7" fill="${p.color}"/>`;
      partyDots += `<text x="${p.x + 10}" y="${p.y + 4}" fill="rgba(255,255,255,0.55)" font-family="Space Mono,monospace" font-size="9">${p.name}</text>`;
    });

    // Constitution reference
    partyDots += `<circle cx="270" cy="250" r="12" fill="none" stroke="rgba(201,168,76,0.35)" stroke-width="1.5" stroke-dasharray="3,3"/>`;
    partyDots += `<text x="270" y="239" text-anchor="middle" fill="rgba(201,168,76,0.5)" font-family="Space Mono,monospace" font-size="7">CONSTITUTION</text>`;

    // User dot
    partyDots += `<line x1="${cx}" y1="${cy}" x2="${dotX}" y2="${dotY}" stroke="rgba(201,168,76,0.4)" stroke-width="1" stroke-dasharray="4,4"/>`;
    partyDots += `<circle cx="${dotX}" cy="${dotY}" r="14" fill="rgba(201,168,76,0.15)" stroke="rgba(201,168,76,0.5)" stroke-width="1.5"/>`;
    partyDots += `<circle cx="${dotX}" cy="${dotY}" r="7" fill="${GOLD}"/>`;
    partyDots += `<text x="${dotX}" y="${dotY - 18}" text-anchor="middle" fill="${GOLD}" font-family="Space Mono,monospace" font-size="9">YOU</text>`;

    const labels = { top: 'TRANSFORMATION', bottom: 'STABILITY / STATUS QUO', left: 'STATE', right: 'MARKET' };
    document.getElementById(containerId).innerHTML = compassBase(cx, cy, r, quadrants, labels, partyDots);

    // Axis legend (right side)
    const axesDisplay = [
      { name: 'Transformation ↔ Stability', left: 'Stability', right: 'Transform.', score: saX },
      { name: 'State Authority ↔ Constitutional Liberalism', left: 'State', right: 'Constit.', score: -saY },
      { name: 'Ubuntu Collectivism ↔ Individual Rights', left: 'Ubuntu', right: 'Individual', score: (axis.individualRights || 0) - (axis.ubuntuCollectivism || 0) },
      { name: 'Pan-African ↔ Western Alignment', left: 'Pan-Afr.', right: 'Western', score: (axis.westernAlignment || 0) - (axis.panAfrican || 0) },
      { name: 'Traditional Authority ↔ Secular Democracy', left: 'Tradition', right: 'Secular', score: (axis.secularDemocracy || 0) - (axis.traditionalAuthority || 0) },
      { name: 'Racial Redress ↔ Non-Racialism', left: 'Redress', right: 'Non-Racial', score: (axis.nonRacialism || 0) - (axis.racialRedress || 0) }
    ];
    let legendHTML = `<div><div class="c1-legend-title">Your SA Axis Scores</div><p style="font-size:12px;color:rgba(255,255,255,0.4);line-height:1.6;margin-top:4px;margin-bottom:20px;">Six dimensions unique to the South African political context.</p></div>`;
    axesDisplay.forEach(a => {
      const pos = ((a.score + 2) / 4) * 100;
      legendHTML += `
      <div class="c1-axis-row">
        <div class="c1-axis-name">${a.name}</div>
        <div class="c1-axis-bar-wrap">
          <span class="c1-axis-end">${a.left}</span>
          <div class="c1-axis-track"><div class="c1-axis-fill" style="left:${Math.min(pos, 50)}%;width:${Math.abs(pos - 50)}%;"></div><div class="c1-axis-dot" style="left:${pos}%;"></div></div>
          <span class="c1-axis-end right">${a.right}</span>
        </div>
        <span class="c1-score">Score: ${a.score.toFixed(2)}</span>
      </div>`;
    });
    if (typeof VERITAS_ENGINE !== 'undefined') {
      const redress = VERITAS_ENGINE.computeRedressIndex(axis);
      const inst = VERITAS_ENGINE.computeInstitutionalIndex(axis);
      legendHTML += `<div class="c1-verdict"><div class="c1-verdict-label">SA Profile Verdict</div><div class="c1-verdict-text">Redress Alignment: <strong style="color:${BRASS_LIGHT}">${redress}%</strong> · Institutional Protection: <strong style="color:${BRASS_LIGHT}">${inst}%</strong>. You sit close to the constitutional centre.</div></div>`;
    }
    document.getElementById('sa-legend').innerHTML = legendHTML;
  }

  /* ── 2. Global Standard Compass ── */
  function renderGlobalCompass(containerId, globalX, globalY, axis) {
    const cx = 260, cy = 260, r = 240;
    const dotX = cx + Math.max(-1, Math.min(1, globalX)) * (r * 0.75);
    const dotY = cy - Math.max(-1, Math.min(1, globalY)) * (r * 0.75);

    const quadrants = [
      { x1: cx, y1: cy - r, x2: cx - r, y2: cy, sweep: 0, fill: GLOBAL_AUTH_LEFT },
      { x1: cx, y1: cy - r, x2: cx + r, y2: cy, sweep: 1, fill: GLOBAL_AUTH_RIGHT },
      { x1: cx + r, y1: cy, x2: cx, y2: cy + r, sweep: 1, fill: GLOBAL_LIB_LEFT },
      { x1: cx, y1: cy + r, x2: cx - r, y2: cy, sweep: 1, fill: GLOBAL_LIB_RIGHT }
    ];

    let partyDots = '';
    const parties = [
      { name: 'EFF', x: 115, y: 155, color: 'rgba(220,50,50,0.85)' },
      { name: 'MKP', x: 140, y: 175, color: 'rgba(180,40,40,0.75)' },
      { name: 'ANC', x: 200, y: 195, color: 'rgba(26,92,58,0.9)' },
      { name: 'DA', x: 310, y: 235, color: 'rgba(0,61,165,0.85)' },
      { name: 'IFP', x: 340, y: 285, color: 'rgba(90,62,133,0.8)' },
      { name: 'RISE', x: 280, y: 265, color: 'rgba(201,168,76,0.85)' },
      { name: 'FF+', x: 370, y: 250, color: 'rgba(0,61,165,0.6)' },
      { name: 'PA', x: 360, y: 205, color: 'rgba(60,60,60,0.8)' }
    ];
    parties.forEach(p => {
      partyDots += `<circle cx="${p.x}" cy="${p.y}" r="6" fill="${p.color}"/>`;
      partyDots += `<text x="${p.x + 8}" y="${p.y + 3}" fill="rgba(255,255,255,0.5)" font-family="Space Mono,monospace" font-size="8">${p.name}</text>`;
    });

    // International reference markers (faint)
    partyDots += `<circle cx="300" cy="155" r="5" fill="rgba(255,255,255,0.12)"/><text x="308" y="153" fill="rgba(255,255,255,0.25)" font-family="Inter,sans-serif" font-size="8">Macron</text>`;
    partyDots += `<circle cx="210" cy="220" r="5" fill="rgba(255,255,255,0.12)"/><text x="218" y="218" fill="rgba(255,255,255,0.25)" font-family="Inter,sans-serif" font-size="8">Lula</text>`;
    partyDots += `<circle cx="370" cy="175" r="5" fill="rgba(255,255,255,0.12)"/><text x="378" y="173" fill="rgba(255,255,255,0.25)" font-family="Inter,sans-serif" font-size="8">Trump</text>`;
    partyDots += `<circle cx="155" cy="245" r="5" fill="rgba(255,255,255,0.12)"/><text x="163" y="243" fill="rgba(255,255,255,0.25)" font-family="Inter,sans-serif" font-size="8">Corbyn</text>`;

    // User
    partyDots += `<line x1="${cx}" y1="${cy}" x2="${dotX}" y2="${dotY}" stroke="rgba(201,168,76,0.4)" stroke-width="1" stroke-dasharray="4,4"/>`;
    partyDots += `<circle cx="${dotX}" cy="${dotY}" r="14" fill="rgba(201,168,76,0.15)" stroke="rgba(201,168,76,0.5)" stroke-width="1.5"/>`;
    partyDots += `<circle cx="${dotX}" cy="${dotY}" r="7" fill="${GOLD}"/>`;
    partyDots += `<text x="${dotX}" y="${dotY - 18}" text-anchor="middle" fill="${GOLD}" font-family="Space Mono,monospace" font-size="9">YOU</text>`;

    const labels = { top: 'AUTHORITARIAN', bottom: 'LIBERTARIAN', left: 'LEFT', right: 'RIGHT' };
    document.getElementById(containerId).innerHTML = compassBase(cx, cy, r, quadrants, labels, partyDots);

    // Info panel
    let infoHTML = `<div><div class="c1-legend-title">Global Placement</div><p style="font-size:12px;color:rgba(255,255,255,0.4);line-height:1.65;margin-top:6px;margin-bottom:20px;">Your position on the classic Political Compass alongside SA parties.</p></div>`;
    infoHTML += `<div style="margin-bottom:20px;"><div class="c1-verdict-label" style="margin-bottom:10px;">Your Coordinates</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">`;
    infoHTML += `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);padding:12px;text-align:center;"><div style="font-family:'Space Mono',monospace;font-size:9px;color:var(--muted);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px;">Economic</div><div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:rgba(255,150,150,0.9);">${(globalX * 5).toFixed(1)}</div><div style="font-size:10px;color:rgba(255,255,255,0.35);margin-top:2px;">${globalX > 0.1 ? 'Right' : globalX < -0.1 ? 'Left' : 'Centrist'}</div></div>`;
    infoHTML += `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);padding:12px;text-align:center;"><div style="font-family:'Space Mono',monospace;font-size:9px;color:var(--muted);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px;">Social</div><div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:rgba(150,220,150,0.9);">${(-globalY * 5).toFixed(1)}</div><div style="font-size:10px;color:rgba(255,255,255,0.35);margin-top:2px;">${globalY > 0.1 ? 'Authoritarian' : globalY < -0.1 ? 'Libertarian' : 'Moderate'}</div></div>`;
    infoHTML += `</div></div>`;
    infoHTML += `<div class="c1-verdict"><div class="c1-verdict-label">Global Profile</div><div class="c1-verdict-text">You sit in the <strong style="color:${BRASS_LIGHT}">${globalY > 0 ? 'Auth' : 'Lib'}-${globalX > 0 ? 'Right' : 'Left'}</strong> quadrant — placing you among mainstream global political traditions.</div></div>`;
    document.getElementById('global-info').innerHTML = infoHTML;
  }

  /* ── 3. Party Match Chart (Chart.js) ── */
  function renderPartyMatchChart(canvasId, matches) {
    if (typeof Chart === 'undefined') return;
    const ctx = document.getElementById(canvasId).getContext('2d');
    if (window.partyChart) window.partyChart.destroy();
    const labels = matches.slice(0, 8).map(m => m.shortName || m.name);
    const data = matches.slice(0, 8).map(m => m.match);
    window.partyChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Alignment %',
          data: data,
          backgroundColor: data.map(v => v > 75 ? GREEN : v > 50 ? GOLD : SLATE),
          borderRadius: 4,
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (ctx) => `${ctx.raw}% match` } }
        },
        scales: {
          x: { max: 100, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: SLATE } },
          y: { grid: { display: false }, ticks: { color: SLATE, font: { family: 'Space Mono' } } }
        }
      }
    });
  }

  /* ── 4. Policy Domain Scores Chart (Chart.js) ── */
  function renderPolicyDomainChart(canvasId, domainScores) {
    if (typeof Chart === 'undefined') return;
    const ctx = document.getElementById(canvasId).getContext('2d');
    if (window.domainChart) window.domainChart.destroy();
    const labels = Object.keys(domainScores);
    const data = Object.values(domainScores);
    window.domainChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Score',
          data: data,
          backgroundColor: GOLD,
          borderRadius: 4,
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { max: 100, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: SLATE } },
          y: { grid: { display: false }, ticks: { color: SLATE, font: { family: 'Space Mono' } } }
        }
      }
    });
  }

  return {
    renderSACompass,
    renderGlobalCompass,
    renderPartyMatchChart,
    renderPolicyDomainChart
  };
})();