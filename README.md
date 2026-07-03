# VERITAS — A Civic Instrument for the South African Voter

**VERITAS** is a politically neutral, open‑source web application that maps your policy convictions onto the full South African political landscape.  
It does not tell you how to vote. It shows you where you stand — and then gives you the unflinching evidence to decide what to do with that information.

---

## Table of Contents

- [Overview](#overview)
- [Inspiration](#inspiration)
- [How It Works](#how-it-works)
  - [Question Bank](#question-bank)
  - [Axis Calculation](#axis-calculation)
  - [Three Compasses](#three-compasses)
  - [Party Matching](#party-matching)
  - [Outcome Tiers](#outcome-tiers)
  - [Party Dossiers](#party-dossiers)
- [Data Sources](#data-sources)
- [Limitations](#limitations)
- [Technical Architecture](#technical-architecture)
- [Running Locally](#running-locally)
- [Contributing](#contributing)
- [License & Contact](#license--contact)

---

## Overview

South Africa's democratic participation faces a crisis not of apathy alone, but of information.  
Voters choose parties based on historical loyalty, personality, ethnicity, and inherited allegiance — not policy alignment.  
The result is a Parliament that frequently does not reflect the actual policy preferences of the people who elect it.

VERITAS was built to close that gap.  
It offers:

- **265 policy questions** across 20 thematic categories, each with a neutral context brief that expands to a full historical explanation.
- **Three distinct political compasses** — one built specifically for South African reality, one mapped to the classic global left/right–authoritarian/libertarian model, and one that places you inside the full ideological taxonomy from Stalinism to Anarcho‑Capitalism.
- **Party matching** against 100+ registered South African parties using their published 2024 manifestos and parliamentary voting records.
- **Full critical party dossiers** — history, ideology, leadership, successes, scandals, critical flaws, and an honest "why vote / why not vote" verdict.
- **Four outcome tiers** that honestly flag when a user has no strong match, is a pragmatic swing voter, or sits near the Constitutional ideal.
- **Glossary highlighting** — key political terms are explained on hover.
- **Multi‑assessment history** — after 10 completions, see your average profile and most frequent top match.
- **Complete client‑side privacy** — no data ever leaves your device.

VERITAS is the successor to **VOTA**, rebuilt with deeper data, richer visuals, and a relentless commitment to honesty.

---

## Inspiration

VERITAS belongs to a global tradition of civic technology tools known as **Voting Advice Applications (VAAs)** — interactive instruments that help citizens understand their own political positions and compare them to parties or candidates before an election.

The genre has a rich history, and VERITAS was shaped by studying the best of it:

**[iSideWith](https://isidewith.com)**  
One of the most comprehensive global platforms. iSideWith asks users a detailed breakdown of policy questions, allows them to weight each issue by personal importance, and produces a precise ideological match to candidates and parties. Its granularity and issue-weighting system were a direct inspiration for VERITAS's confidence-weighting mechanic.

**[The Political Compass](https://www.politicalcompass.org)**  
The classic that defined the genre for a generation. Rather than a simple left–right line, it maps users onto a two-axis grid — Economic (Left vs. Right) and Social (Authoritarian vs. Libertarian) — and places them relative to historical figures, movements, and parties. VERITAS adopts and extends this framework, adding a South Africa–specific compass alongside the global model.

**[VoteSwiper](https://voteswiper.org) / [Wahl-O-Mat](https://www.bpb.de/themen/wahl-o-mat/)**  
Enormously popular in Europe and increasingly used across Africa, these tools distil complex policy choices into simple swipe mechanics — right for yes, left for no — on the core national issues of an election cycle, then instantly visualise party alignment. Their accessibility and speed demonstrated that civic tools do not need to be intimidating to be serious.

**[Pew Research Political Typology Quiz](https://www.pewresearch.org/politics/quiz/political-typology/)**  
Rather than matching users to specific candidates, the Pew typology places respondents into distinct ideological *tribes* — consistent value clusters found across a large dataset of real voter behaviour. It showed that where you stand compared to the rest of the public can be as illuminating as which party you match. VERITAS's four outcome tiers, particularly the "Constitutional Ideal" tier, reflect this influence.

**Where VERITAS differs from all of the above** is scope and specificity. None of these tools were built for South Africa — a political landscape defined by the TRC, cadre deployment, the Ingonyama Trust, Section 25, and the daily reality of a country whose liberation struggle is still unfinished business. VERITAS was built from the ground up for this context, with questions, axes, party positions, and dossiers that reflect the actual debates South African voters face — not a generic global template dropped on local data.

---

## How It Works

### Question Bank

The question bank contains **265 single‑concept policy statements** drawn from current South African parliamentary debate.  
They are grouped into 20 themes:

| Theme | Example Topics |
|-------|---------------|
| Land & Property | expropriation, communal tenure, Ingonyama Trust |
| Economy & Markets | nationalisation, BEE, basic income grant |
| Social & Rights | abortion, same‑sex marriage, hate speech |
| Security & Justice | police lethal force, corruption sentencing |
| Education & Health | free tertiary education, NHI, traditional medicine |
| Foreign Policy | BRICS, ICC, Pan‑Africanism, Russia‑Ukraine |
| Governance | electoral reform, coalition stability, Chapter 9 institutions |
| Environment | coal phase‑out, fracking, carbon tax |
| SA Historical Events | Marikana, State Capture, TRC, July 2021 unrest |
| Philosophy & Theory | individual vs collective, class vs race, right to resist |
| Race & Identity | white collective responsibility, coloured identity, Khoisan recognition |
| Youth & Culture | student debt, mandatory national service, esports |
| Gender & Family | quotas, paternity leave, surrogacy, GBV |
| Religion & Tradition | secularism, Sharia law, initiation regulation |
| Media & Technology | internet as utility, platform liability, AI regulation |
| Local Government | municipal failure, ward committees, ratepayers |
| Labour | minimum wage, gig economy, union closed shops |
| Crime & Rehabilitation | life imprisonment, restorative justice, private prisons |
| Health & Autonomy | mandatory vaccination, euthanasia, organ donation |
| Constitutional Law | amendment thresholds, judicial review, jury trials |

Every question includes a **Context & Background** panel — a short, neutral, factual summary of what the policy is, who supports/opposes it, and why it matters.  
Clicking *"What is this about?"* expands the panel to a full, in‑depth explanation.  
No prior political knowledge is required.

The user answers each question on a 5‑point Likert scale:  
**Strongly Agree (+2) / Agree (+1) / Neutral (0) / Disagree (−1) / Strongly Disagree (−2)**

An optional **confidence weighting** (0.5× to 2×) allows users to indicate how strongly they hold a view.  
Uncertain responses are weighted proportionally less.

Key political terms (e.g. "cadre deployment", "Zondo Commission", "NHI") are automatically highlighted; hovering over them displays a definition tooltip.

---

### Axis Calculation

Every question is pre‑tagged with a directional weight on **sixteen primary axes** — eight SA‑specific and eight global.

**SA‑specific (Compass 1)**
1. **Transformation ↔ Stability**
2. **State Authority ↔ Constitutional Liberalism**
3. **Ubuntu Collectivism ↔ Individual Rights**
4. **Pan‑African ↔ Western Alignment**
5. **Traditional Authority ↔ Secular Democracy**
6. **Racial Redress ↔ Non‑Racialism**

**Global (Compass 2)**
7. **Economic Left ↔ Economic Right**
8. **Authoritarian ↔ Libertarian**

Each question's impact on an axis is determined by:
- A **base weight** defined per theme.
- **Manual overrides** for questions that require nuance.
- The **user's answer** (−2 to +2) multiplied by the **confidence weight**.

The raw impact on each axis is summed across all answered questions and then **normalised** to a −2 … +2 range.  
Because the scoring is fully deterministic, users can inspect every question's influence on their final result.

---

### Three Compasses

#### 1. SA Context
```
         State Authority
               ▲
               │
Transformation ◄────────► Stability
               │
               ▼
    Constitutional Liberalism
```
The user's dot is plotted on the two primary SA axes.  
Six additional sliders show the secondary axes.  
Party markers (colour‑coded dots) show where each registered SA party sits relative to the user.  
A dashed circle marks the constitutional centre.

#### 2. Global Standard
```
      Authoritarian
            ▲
            │
Economic Left ◄────────► Economic Right
            │
            ▼
        Libertarian
```
This classic political compass places the user alongside international reference points (e.g. "US Democrats", "UK Labour").  
SA parties are overlaid transparently to show how local rhetoric translates into global terms.

#### 3. Full Ideological Map

The user's `(economicLeft, authoritarian)` coordinate is mapped onto a complete grid of named ideological zones — from **Stalinism** and **Mugabeism** in the top‑left, through **Social Democracy** and **Centrism**, to **Classical Liberalism** and **Anarcho‑Capitalism** in the bottom‑right.

Each zone comes with:
- A 1‑sentence foundational description.
- Historical examples (global).
- The ideology's **SA manifestation** — which local parties or movements align with it.
- **Pros** (what makes it attractive).
- **Cons** (systemic risks, historical failures).

Three progress meters are displayed:
- **Economic Intervention** (0–10)
- **Individual Autonomy** (0–10)
- **Global Model Stability** (Low / Moderate / High)

---

### Party Matching

Each of the **100+ parliamentary and registered parties** has been assigned a position on all sixteen axes.  
These positions are derived from:

1. **2024 General Election manifestos** (primary source).
2. **Parliamentary voting records** (via the Parliamentary Monitoring Group).
3. **On‑record statements** by party leaders and senior officials.
4. **Zondo Commission testimony** (where relevant).

The user's normalised axis vector is compared to each party's vector using **cosine similarity** — a method that captures directional alignment rather than extremism.  
The similarity percentage = `(cosine + 1) × 50`.

The result is a ranked list of parties with per‑axis match breakdowns.

Beyond pure policy matching, parties are also grouped on a multi‑dimensional taxonomy:
- **Systemic Influence**
- **Capital Tier**
- **Operational Agent**
- **Ideological Neutrality**
- **Governance Effectiveness**

This enables coalition stability analysis — whether the user's top three parties could realistically govern together.

---

### Outcome Tiers

Results are classified into **four tiers**, because not every user fits neatly into the party system:

| Tier | Name | Criteria | What the user receives |
|------|------|----------|------------------------|
| 1 | **Clear Match** | Top party ≥ 70% similarity, gap to second ≥ 10% | Full party dossier (history, leader, ideology, successes, scandals, critical flaws, why vote / why not). |
| 2 | **Spread Alignment** | 3+ parties above 50%, top two within 10% of each other | Analysis of the swing‑voter position in SA, closest 3 parties, explanation of why the centre is the hardest place to be. |
| 3 | **No Meaningful Alignment** | Top party < 50%, or no clear frontrunner | Named ideology, explanation of why no SA party represents it, what a party would need to exist, global examples of parties that do. |
| 4 | **Constitutional Ideal** | Very low spread, all parties near 50% | Explanation of how the user's position mirrors the Constitutional compromise — and the gap between that mandate and what parties actually deliver. |

**Staleness detection** is built in: if a user answers "Neutral" to more than 70% of questions, or agrees/disagrees with everything indiscriminately, a warning is shown.

---

### Party Dossiers

Every major party has a full, unflinching critical profile covering:
- **History** — from founding to present.
- **Leadership** — background, strengths, and controversies.
- **Successes** — actual achievements in governance or opposition.
- **Scandals** — corruption, infighting, or moral failures.
- **Critical Flaws** — structural weaknesses that may affect governance.
- **Why Vote / Why Not** — an honest, balanced verdict.

These dossiers are accessible by clicking any party card on the results page. No party gets a free pass.

---

## Data Sources

All data is anchored in public, verifiable records:

- **Electoral Commission of South Africa (IEC)** — electoral results 1994–2024.
- **Parliamentary Monitoring Group (PMG)** — voting records and committee reports.
- **Zondo State Capture Commission** — final report (2022), 5,000 pages of testimony and findings.
- **Individual party manifestos** — 2024 general election.
- **Constitution of the Republic of South Africa, Act 108 of 1996**.
- **SA Law Reform Commission** — reports and recommendations.
- **Statistics South Africa (Stats SA)** — demographic and economic data.

Where our characterisation of a party position may be disputed, we say so explicitly and link to the primary source.

---

## Limitations — Stated Openly

1. **Party positions shift.**  
   Manifestos are aspirational, not operational. Leaders say one thing; governments do another.  
   Our scoring reflects stated positions, not governance outcomes.

2. **No algorithm captures full political identity.**  
   Your result is a data point, not a definition. You are more than your compass coordinates.

3. **The question bank reflects the authors' understanding.**  
   Despite rigorous sourcing, reasonable people may dispute how a specific question maps to a specific party.  
   We welcome challenges — contact details are below.

4. **VERITAS is experimental and advisory.**  
   It is offered in the spirit of Section 19 of the Constitution.  
   Your vote belongs to you — not to this instrument.

---

## Technical Architecture

```
index.html          ← Homepage (hero, party strip, methodology modal, music player)
survey.html         ← Question engine (5‑column editorial survey)
results.html        ← Results dashboard (compasses, party matches, dossiers)
methodology.html    ← Methodology page
js/
  engine.js         ← Deterministic scoring engine
  data.js           ← 265‑question bank
  glossary.js       ← Civic dictionary with definitions
  parties.js        ← 100+ party axis vectors & taxonomy
  dossier.js        ← Full critical party profiles
  charts.js         ← Compass SVGs and Chart.js charts
  sw.js             ← Service worker (offline support)
assets/
  images/           ← South African flag, favicon
  audio/            ← 8 curated tracks for the music player
  videos/           ← Hero video (SA flag waving)
```

- **Build tool**: None (plain HTML/CSS/JS, served statically)
- **Styling**: Custom CSS with a parchment‑and‑gold editorial palette
- **State**: React‑free; vanilla JavaScript with `localStorage` for persistence
- **Privacy**: Fully client‑side — no server, no tracking, no data collection. POPIA compliant by design.

---

## Running Locally

```bash
git clone https://github.com/vna-07/veritas.git
cd veritas
# Then simply open index.html in your browser, or use a lightweight static server:
npx serve .
```

Open `http://localhost:3000` (or whichever port is provided) in your browser.

---

## Contributing

VERITAS is an independent civic technology project — open‑source, non‑partisan, and built for South Africa.

To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes with clear messages.
4. Push and open a pull request.

Guidelines:

- All party profiles must be written to the same critical standard. No party gets a free pass.
- All data claims must be sourced.
- The project is advisory only — no code or content may direct a user how to vote.
- For substantial changes, please open an issue first to discuss.

---

## License & Contact

VERITAS — Advisory. Informative. Not a directive.  
Built by **VNA‑07** — Computer Science, Statistics, Mathematics — Rhodes University, Makhanda, 2026.

Contact: `avianrossi@gmail.com`  
If you believe a party position has been mischaracterised or a question is misleading, we will review and correct with full transparency.

**License**: MIT