/* ── VERITAS Party Database · Influential parties only ── */
window.VERITAS_PARTIES = [

  // ═══════════════ HIGH‑IMPACT HEGEMONS ═══════════════
  {
    name: 'African National Congress', shortName: 'ANC',
    axes: {
      transformation: 1.5, stability: -0.5, stateAuthority: 1.2, constitutionalLiberalism: -0.8,
      ubuntuCollectivism: 1.0, individualRights: -0.3, panAfrican: 1.0, westernAlignment: -0.6,
      traditionalAuthority: 0.5, secularDemocracy: -0.3, racialRedress: 1.5, nonRacialism: -0.7,
      economicLeft: 1.2, economicRight: -0.8, authoritarian: 0.4, libertarian: -0.2
    },
    systemicInfluence: 'hegemon', capitalTier: 'institutional', operationalAgent: 'bureaucratic',
    ideologicalNeutrality: 'leftIdeological', governanceEffectiveness: 'massArchitect',
    desc: 'Broad liberation movement governing since 1994. Strong on transformation, state‑led development, and social welfare. Criticised for corruption, cadre deployment, and internal factionalism.',
    leader: 'Cyril Ramaphosa', leaderTitle: 'President, African National Congress',
    ideology: 'African Nationalism / Social Democracy', position: 'Centre-Left', founded: '1912', seats: '159 of 400', coalition: 'GNU Lead Party',
    pros: ['Social equity emphasis', 'Transformation agenda', 'Constitutional framework'],
    cons: ['State capture legacy', 'Cadre deployment', 'Inconsistent delivery']
  },
  {
    name: 'Democratic Alliance', shortName: 'DA',
    axes: {
      transformation: -0.8, stability: 1.5, stateAuthority: -0.6, constitutionalLiberalism: 1.5,
      ubuntuCollectivism: -0.8, individualRights: 1.2, panAfrican: -0.5, westernAlignment: 1.2,
      traditionalAuthority: -0.4, secularDemocracy: 0.6, racialRedress: -0.6, nonRacialism: 1.0,
      economicLeft: -1.0, economicRight: 1.2, authoritarian: -0.5, libertarian: 1.0
    },
    systemicInfluence: 'hegemon', capitalTier: 'institutional', operationalAgent: 'bureaucratic',
    ideologicalNeutrality: 'conditionalAligner', governanceEffectiveness: 'technocraticAdmin',
    desc: 'Liberal party emphasising constitutionalism, clean governance, and market economics. Strong service‑delivery record in the Western Cape. Criticised for perceived racial insensitivity.',
    leader: 'John Steenhuisen', leaderTitle: 'Leader, Democratic Alliance',
    ideology: 'Liberal Democracy', position: 'Centre to Centre-Right', founded: '2000 (roots 1959)', seats: '87 of 400', coalition: 'GNU Coalition Partner',
    pros: ['Strong anti-corruption stance', 'Rule-of-law priority', 'Fiscal responsibility'],
    cons: ['Limited land reform urgency', 'Race-blindness critique', 'Narrow electoral base']
  },
  {
    name: 'Economic Freedom Fighters', shortName: 'EFF',
    axes: {
      transformation: 1.8, stability: -1.2, stateAuthority: 1.0, constitutionalLiberalism: -1.4,
      ubuntuCollectivism: 1.2, individualRights: -0.5, panAfrican: 1.5, westernAlignment: -1.5,
      traditionalAuthority: -0.3, secularDemocracy: 0.4, racialRedress: 1.6, nonRacialism: -1.2,
      economicLeft: 1.5, economicRight: -1.4, authoritarian: 1.0, libertarian: -1.2
    },
    systemicInfluence: 'hegemon', capitalTier: 'high', operationalAgent: 'centralizedCommand',
    ideologicalNeutrality: 'adversarialAnchor', governanceEffectiveness: 'legislativeOversight',
    desc: 'Radical left party advocating nationalisation, land expropriation without compensation, and Pan‑Africanism. Known for disruptive parliamentary tactics and a strong youth following.',
    leader: 'Julius Malema', leaderTitle: 'Commander-in-Chief, Economic Freedom Fighters',
    ideology: 'Marxism-Leninism / Pan-Africanism', position: 'Far Left', founded: '2013', seats: '39 of 400', coalition: 'Opposition',
    pros: ['Radical economic transformation', 'Land justice urgency', 'Parliamentary accountability'],
    cons: ['VBS Mutual Bank scandal', 'Authoritarian internal culture', 'Policy implementation doubts']
  },
  {
    name: 'uMkhonto weSizwe', shortName: 'MK',
    axes: {
      transformation: 1.4, stability: -1.0, stateAuthority: 0.8, constitutionalLiberalism: -1.2,
      ubuntuCollectivism: 1.0, individualRights: -0.4, panAfrican: 1.2, westernAlignment: -1.3,
      traditionalAuthority: 0.8, secularDemocracy: -0.5, racialRedress: 1.3, nonRacialism: -1.1,
      economicLeft: 1.3, economicRight: -1.2, authoritarian: 0.9, libertarian: -1.0
    },
    systemicInfluence: 'hegemon', capitalTier: 'high', operationalAgent: 'centralizedCommand',
    ideologicalNeutrality: 'adversarialAnchor', governanceEffectiveness: 'massArchitect',
    desc: 'Breakaway party with a strong Zulu nationalist base. Won 14.58% in 2024, largely on Jacob Zuma\'s personal appeal. Lacks a coherent policy platform.',
    leader: 'Jacob Zuma (nominal)', leaderTitle: 'President, uMkhonto weSizwe',
    ideology: 'Zulu Nationalism / Left Populism', position: 'Left-Authoritarian', founded: '2023', seats: '58 of 400', coalition: 'Opposition',
    pros: ['Voice for Zulu traditionalists', 'Disrupted ANC dominance in KZN'],
    cons: ['Zuma corruption legacy', 'No serious policy platform', 'Refuses GNU participation']
  },
  {
    name: 'Inkatha Freedom Party', shortName: 'IFP',
    axes: {
      transformation: 0.3, stability: 1.2, stateAuthority: 0.6, constitutionalLiberalism: 0.2,
      ubuntuCollectivism: 0.8, individualRights: -0.2, panAfrican: 0.4, westernAlignment: -0.2,
      traditionalAuthority: 1.2, secularDemocracy: -0.5, racialRedress: 0.2, nonRacialism: 0.1,
      economicLeft: 0.2, economicRight: 0.4, authoritarian: 0.3, libertarian: -0.1
    },
    systemicInfluence: 'hegemon', capitalTier: 'sustained', operationalAgent: 'bureaucratic',
    ideologicalNeutrality: 'pragmaticNeutral', governanceEffectiveness: 'localSpecialist',
    desc: 'Conservative Zulu traditionalist party. Pragmatic coalition partner with deep regional strength in KwaZulu‑Natal. Focus on federalism and traditional leadership.',
    leader: 'Velenkosini Hlabisa', leaderTitle: 'President, Inkatha Freedom Party',
    ideology: 'Conservative Federalism', position: 'Centre-Right', founded: '1975', seats: '17 of 400', coalition: 'GNU Coalition Partner',
    pros: ['Federalist governance', 'Accountability emphasis', 'Community-based delivery'],
    cons: ['Conservative social policy', 'Narrow regional focus', 'Traditional authority bias']
  },

  // ═══════════════ MID‑TIER COALITION BROKERS ═══════════════
  {
    name: 'Patriotic Alliance', shortName: 'PA',
    axes: {
      transformation: 0.6, stability: 0.8, stateAuthority: 1.0, constitutionalLiberalism: -0.6,
      ubuntuCollectivism: 0.5, individualRights: 0.2, panAfrican: 0.3, westernAlignment: -0.5,
      traditionalAuthority: 0.2, secularDemocracy: -0.2, racialRedress: 0.7, nonRacialism: -0.4,
      economicLeft: 0.4, economicRight: -0.3, authoritarian: 0.7, libertarian: -0.4
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'sustained', operationalAgent: 'centralizedCommand',
    ideologicalNeutrality: 'conditionalAligner', governanceEffectiveness: 'localSpecialist',
    desc: 'Populist party strong in coloured communities. Skilled at capturing decisive swing wards. Anti‑immigration stance appeals to some voters.',
    leader: 'Gayton McKenzie', leaderTitle: 'President, Patriotic Alliance',
    ideology: 'Nationalist Populism', position: 'Right-Populist', founded: '2013', seats: '9 of 400', coalition: 'GNU Coalition Partner',
    pros: ['Kingmaker in coalitions', 'Coloured community voice'],
    cons: ['Xenophobic rhetoric', 'Limited policy depth']
  },
  {
    name: 'ActionSA', shortName: 'ActionSA',
    axes: {
      transformation: -0.4, stability: 1.0, stateAuthority: 0.2, constitutionalLiberalism: 1.0,
      ubuntuCollectivism: -0.5, individualRights: 0.8, panAfrican: -0.3, westernAlignment: 0.6,
      traditionalAuthority: -0.1, secularDemocracy: 0.3, racialRedress: -0.2, nonRacialism: 0.7,
      economicLeft: -0.6, economicRight: 0.8, authoritarian: -0.3, libertarian: 0.7
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'high', operationalAgent: 'technocratic',
    ideologicalNeutrality: 'conditionalAligner', governanceEffectiveness: 'localSpecialist',
    desc: 'Urban-focused reform party. Strong on service delivery and anti‑corruption in Gauteng metros. Known for a tough anti‑immigration stance.',
    leader: 'Herman Mashaba', leaderTitle: 'President, ActionSA',
    ideology: 'Liberal Conservatism', position: 'Centre-Right', founded: '2021', seats: '6 of 400', coalition: 'Opposition',
    pros: ['Anti-corruption focus', 'Service delivery track record'],
    cons: ['Anti-immigration rhetoric', 'Over-reliant on Mashaba']
  },
  {
    name: 'Freedom Front Plus', shortName: 'FF+',
    axes: {
      transformation: -1.2, stability: 1.4, stateAuthority: -0.8, constitutionalLiberalism: 0.8,
      ubuntuCollectivism: -1.0, individualRights: 0.6, panAfrican: -1.2, westernAlignment: 1.0,
      traditionalAuthority: 0.6, secularDemocracy: -0.2, racialRedress: -1.1, nonRacialism: 0.5,
      economicLeft: -0.8, economicRight: 1.0, authoritarian: -0.7, libertarian: 0.5
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'sustained', operationalAgent: 'identityAnchor',
    ideologicalNeutrality: 'adversarialAnchor', governanceEffectiveness: 'localSpecialist',
    desc: 'Conservative Afrikaner‑interest party. Strong on minority rights, federalism, and cultural preservation. Growing support among coloured conservatives.',
    leader: 'Pieter Groenewald', leaderTitle: 'Leader, Freedom Front Plus',
    ideology: 'Afrikaner Conservatism', position: 'Right', founded: '1994', seats: '6 of 400', coalition: 'GNU Coalition Partner',
    pros: ['Cultural preservation', 'Federalist model'],
    cons: ['Narrow ethnic base', 'Opposition to BEE seen as protecting privilege']
  },
  {
    name: 'RISE Mzansi', shortName: 'RISE',
    axes: {
      transformation: 0.2, stability: 0.9, stateAuthority: -0.6, constitutionalLiberalism: 1.2,
      ubuntuCollectivism: 0.0, individualRights: 1.0, panAfrican: 0.1, westernAlignment: 0.5,
      traditionalAuthority: -0.3, secularDemocracy: 0.7, racialRedress: 0.1, nonRacialism: 0.8,
      economicLeft: -0.3, economicRight: 0.6, authoritarian: -0.7, libertarian: 0.9
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'sustained', operationalAgent: 'technocratic',
    ideologicalNeutrality: 'pragmaticNeutral', governanceEffectiveness: 'legislativeOversight',
    desc: 'Technocratic reform party. Modern, professional, focused on institutional renewal and youth engagement. Appeals to educated urban professionals.',
    leader: 'Songezo Zibi', leaderTitle: 'Leader, RISE Mzansi',
    ideology: 'Third Way / Technocratic Reform', position: 'Centre', founded: '2022', seats: '2 of 400', coalition: 'GNU Coalition Partner',
    pros: ['Genuine policy depth', 'Appeals to educated professionals'],
    cons: ['Extremely small base', 'Risk of being squeezed between DA and ANC']
  },
  {
    name: 'Build One South Africa', shortName: 'BOSA',
    axes: {
      transformation: 0.0, stability: 1.0, stateAuthority: -0.7, constitutionalLiberalism: 1.1,
      ubuntuCollectivism: -0.2, individualRights: 0.9, panAfrican: 0.0, westernAlignment: 0.6,
      traditionalAuthority: -0.2, secularDemocracy: 0.6, racialRedress: 0.0, nonRacialism: 0.9,
      economicLeft: -0.4, economicRight: 0.7, authoritarian: -0.8, libertarian: 1.0
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'sustained', operationalAgent: 'technocratic',
    ideologicalNeutrality: 'pragmaticNeutral', governanceEffectiveness: 'legislativeOversight',
    desc: 'Community-first independent movement. Strong on local governance, direct accountability, and citizen empowerment.',
    leader: 'Mmusi Maimane', leaderTitle: 'Leader, Build One South Africa',
    ideology: 'Community-Centred Liberalism', position: 'Centre', founded: '2023', seats: '2 of 400', coalition: 'GNU Coalition Partner',
    pros: ['Moral clarity on non-racialism', 'Grassroots organising'],
    cons: ['Similar to RISE — splitting the centrist vote', 'Over-reliant on Maimane']
  },
  {
    name: 'United Democratic Movement', shortName: 'UDM',
    axes: {
      transformation: 0.3, stability: 0.7, stateAuthority: -0.2, constitutionalLiberalism: 0.6,
      ubuntuCollectivism: 0.4, individualRights: 0.3, panAfrican: 0.3, westernAlignment: 0.0,
      traditionalAuthority: 0.2, secularDemocracy: 0.2, racialRedress: 0.4, nonRacialism: 0.2,
      economicLeft: 0.1, economicRight: 0.2, authoritarian: -0.2, libertarian: 0.3
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'lean', operationalAgent: 'technocratic',
    ideologicalNeutrality: 'pragmaticNeutral', governanceEffectiveness: 'legislativeOversight',
    desc: 'Centrist party with durable regional presence in the Eastern Cape. Often a stabilising coalition partner. Led by anti‑corruption veteran Bantu Holomisa.',
    leader: 'Bantu Holomisa', leaderTitle: 'President, United Democratic Movement',
    ideology: 'Centrism / Social Democracy', position: 'Centre', founded: '1997', seats: '3 of 400', coalition: 'GNU Coalition Partner',
    pros: ['Credible anti-corruption voice', 'Durable regional presence'],
    cons: ['Limited national appeal', 'Over-reliant on Holomisa']
  },
  {
    name: 'Al Jama-ah', shortName: 'Al Jama-ah',
    axes: {
      transformation: 0.4, stability: 0.6, stateAuthority: 0.3, constitutionalLiberalism: -0.2,
      ubuntuCollectivism: 0.8, individualRights: -0.3, panAfrican: 0.6, westernAlignment: -0.7,
      traditionalAuthority: 0.5, secularDemocracy: -0.6, racialRedress: 0.5, nonRacialism: 0.1,
      economicLeft: 0.5, economicRight: -0.4, authoritarian: 0.4, libertarian: -0.3
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'lean', operationalAgent: 'identityAnchor',
    ideologicalNeutrality: 'leftIdeological', governanceEffectiveness: 'legislativeOversight',
    desc: 'Muslim‑interest party. Values‑based conservative platform. Punches above weight in coalition negotiations, particularly in the Western Cape.',
    leader: 'Ganief Hendricks', leaderTitle: 'Leader, Al Jama-ah',
    ideology: 'Islamic Conservatism', position: 'Centre-Right', founded: '2007', seats: '2 of 400', coalition: 'GNU Coalition Partner',
    pros: ['Effective in coalition negotiations', 'Represents Muslim community interests'],
    cons: ['Conservative social positions', 'Religious basis raises secularism questions']
  },
  {
    name: 'African Christian Democratic Party', shortName: 'ACDP',
    axes: {
      transformation: 0.0, stability: 0.7, stateAuthority: 0.3, constitutionalLiberalism: 0.4,
      ubuntuCollectivism: 0.5, individualRights: -0.1, panAfrican: 0.0, westernAlignment: 0.3,
      traditionalAuthority: 0.4, secularDemocracy: -0.4, racialRedress: 0.1, nonRacialism: 0.3,
      economicLeft: 0.1, economicRight: 0.3, authoritarian: 0.4, libertarian: -0.3
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'sustained', operationalAgent: 'identityAnchor',
    ideologicalNeutrality: 'conditionalAligner', governanceEffectiveness: 'legislativeOversight',
    desc: 'Christian democratic party. Consistent voting base on moral and family issues. Often a swing vote in coalition negotiations.',
    leader: 'Kenneth Meshoe', leaderTitle: 'Leader, African Christian Democratic Party',
    ideology: 'Christian Democracy', position: 'Centre-Right', founded: '1993', seats: '3 of 400', coalition: 'GNU Coalition Partner',
    pros: ['Consistent moral platform', 'Stable voting base'],
    cons: ['Positions on LGBTQ+ rights conflict with Constitution', 'Declining youth support']
  },
  {
    name: 'African Transformation Movement', shortName: 'ATM',
    axes: {
      transformation: 0.6, stability: 0.4, stateAuthority: 0.4, constitutionalLiberalism: -0.3,
      ubuntuCollectivism: 0.6, individualRights: -0.2, panAfrican: 0.6, westernAlignment: -0.5,
      traditionalAuthority: 0.4, secularDemocracy: -0.2, racialRedress: 0.6, nonRacialism: -0.3,
      economicLeft: 0.4, economicRight: -0.3, authoritarian: 0.3, libertarian: -0.3
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'lean', operationalAgent: 'bureaucratic',
    ideologicalNeutrality: 'leftIdeological', governanceEffectiveness: 'legislativeOversight',
    desc: 'Conservative Africanist party. Focus on traditional values, African spirituality, and socio‑economic transformation. Socially conservative.',
    leader: 'Vuyolwethu Zungula', leaderTitle: 'President, African Transformation Movement',
    ideology: 'African Traditionalism / Pan-Africanism', position: 'Centre-Left', founded: '2018', seats: '2 of 400', coalition: 'Opposition',
    pros: ['Voices African traditionalist perspectives', 'Parliamentary presence'],
    cons: ['Social conservatism conflicts with Constitution', 'Minimal organisational infrastructure']
  },
  {
    name: 'Good Party', shortName: 'GOOD',
    axes: {
      transformation: 0.4, stability: 0.6, stateAuthority: -0.5, constitutionalLiberalism: 0.8,
      ubuntuCollectivism: 0.3, individualRights: 0.7, panAfrican: 0.1, westernAlignment: 0.5,
      traditionalAuthority: -0.3, secularDemocracy: 0.5, racialRedress: 0.3, nonRacialism: 0.5,
      economicLeft: 0.0, economicRight: 0.4, authoritarian: -0.5, libertarian: 0.7
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'lean', operationalAgent: 'technocratic',
    ideologicalNeutrality: 'pragmaticNeutral', governanceEffectiveness: 'legislativeOversight',
    desc: 'Social democratic party focusing on spatial justice and urban transformation. Led by veteran politician Patricia de Lille.',
    leader: 'Patricia de Lille', leaderTitle: 'Leader, Good Party',
    ideology: 'Social Democracy / Spatial Justice', position: 'Centre-Left', founded: '2018', seats: '1 of 400', coalition: 'GNU Coalition Partner',
    pros: ['Spatial justice advocacy', 'De Lille\'s experience'],
    cons: ['Entirely dependent on de Lille', 'Extremely small base']
  },
  {
    name: 'Pan Africanist Congress of Azania', shortName: 'PAC',
    axes: {
      transformation: 1.4, stability: -0.8, stateAuthority: 0.7, constitutionalLiberalism: -0.8,
      ubuntuCollectivism: 1.2, individualRights: -0.5, panAfrican: 1.6, westernAlignment: -1.4,
      traditionalAuthority: 0.2, secularDemocracy: 0.0, racialRedress: 1.5, nonRacialism: -1.2,
      economicLeft: 1.3, economicRight: -1.1, authoritarian: 0.6, libertarian: -0.7
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'lean', operationalAgent: 'identityAnchor',
    ideologicalNeutrality: 'adversarialAnchor', governanceEffectiveness: 'legislativeOversight',
    desc: 'Historic liberation movement advocating Africanism. "Africa for Africans." Once led by the brilliant Robert Sobukwe; now a shadow of its former self.',
    leader: 'Mzwanele Nyhontso', leaderTitle: 'President, Pan Africanist Congress of Azania',
    ideology: 'Africanism / Pan-Africanism', position: 'Far Left', founded: '1959', seats: '1 of 400', coalition: 'Opposition',
    pros: ['Legendary liberation heritage', 'Uncompromising Africanist platform'],
    cons: ['Electoral irrelevance', 'Factional infighting']
  },
  {
    name: 'National Coloured Congress', shortName: 'NCC',
    axes: {
      transformation: 0.2, stability: 0.7, stateAuthority: 0.2, constitutionalLiberalism: 0.2,
      ubuntuCollectivism: 0.4, individualRights: 0.3, panAfrican: -0.1, westernAlignment: 0.2,
      traditionalAuthority: 0.1, secularDemocracy: 0.2, racialRedress: 0.5, nonRacialism: -0.3,
      economicLeft: 0.1, economicRight: 0.2, authoritarian: 0.1, libertarian: -0.1
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'lean', operationalAgent: 'identityAnchor',
    ideologicalNeutrality: 'conditionalAligner', governanceEffectiveness: 'localSpecialist',
    desc: 'Regional party representing coloured community interests, primarily in the Western Cape.',
    leader: 'Fadiel Adams', leaderTitle: 'Leader, National Coloured Congress',
    ideology: 'Minority Rights / Regionalism', position: 'Centre', founded: '2020', seats: '2 of 400', coalition: 'Opposition',
    pros: ['Gives voice to coloured communities', 'Strong on local issues'],
    cons: ['Narrow regional and ethnic focus', 'Can be perceived as divisive']
  },
  {
    name: 'National Freedom Party', shortName: 'NFP',
    axes: {
      transformation: 0.3, stability: 0.8, stateAuthority: 0.3, constitutionalLiberalism: 0.0,
      ubuntuCollectivism: 0.6, individualRights: 0.0, panAfrican: 0.3, westernAlignment: -0.2,
      traditionalAuthority: 0.4, secularDemocracy: -0.2, racialRedress: 0.3, nonRacialism: 0.0,
      economicLeft: 0.2, economicRight: 0.1, authoritarian: 0.2, libertarian: -0.1
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'lean', operationalAgent: 'bureaucratic',
    ideologicalNeutrality: 'conditionalAligner', governanceEffectiveness: 'localSpecialist',
    desc: 'IFP breakaway focusing on rural KZN development and women empowerment. Struggling after its founder\'s death.',
    leader: 'Collective leadership', leaderTitle: 'National Freedom Party',
    ideology: 'Rural Development / Traditionalism', position: 'Centre-Right', founded: '2011', seats: '1 of 400', coalition: 'Opposition',
    pros: ['Rural KZN focus', 'Women empowerment agenda'],
    cons: ['Weak organisational capacity', 'Declining relevance']
  },
  {
    name: 'United Africans Transformation', shortName: 'UAT',
    axes: {
      transformation: 0.8, stability: 0.2, stateAuthority: 0.5, constitutionalLiberalism: -0.5,
      ubuntuCollectivism: 0.7, individualRights: -0.2, panAfrican: 0.6, westernAlignment: -0.5,
      traditionalAuthority: 0.2, secularDemocracy: 0.0, racialRedress: 0.8, nonRacialism: -0.5,
      economicLeft: 0.6, economicRight: -0.5, authoritarian: 0.4, libertarian: -0.4
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'lean', operationalAgent: 'centralizedCommand',
    ideologicalNeutrality: 'leftIdeological', governanceEffectiveness: 'localSpecialist',
    desc: 'Radical pan‑Africanist breakaway. Focus on black economic empowerment and decolonisation. Tainted by Gupta links.',
    leader: 'Mzwanele Manyi', leaderTitle: 'Leader, United Africans Transformation',
    ideology: 'Radical Africanism', position: 'Far Left', founded: '2022', seats: '1 of 400', coalition: 'Opposition',
    pros: ['Uncompromising Africanist voice'],
    cons: ['Gupta links', 'No electoral breakthrough']
  },
  {
    name: 'South African Communist Party', shortName: 'SACP',
    axes: {
      transformation: 1.6, stability: -1.0, stateAuthority: 1.3, constitutionalLiberalism: -1.2,
      ubuntuCollectivism: 1.4, individualRights: -0.6, panAfrican: 1.1, westernAlignment: -1.3,
      traditionalAuthority: -0.4, secularDemocracy: 0.6, racialRedress: 1.2, nonRacialism: 0.0,
      economicLeft: 1.6, economicRight: -1.5, authoritarian: 1.2, libertarian: -1.2
    },
    systemicInfluence: 'coalitionBroker', capitalTier: 'sustained', operationalAgent: 'bureaucratic',
    ideologicalNeutrality: 'adversarialAnchor', governanceEffectiveness: 'legislativeOversight',
    desc: 'Marxist‑Leninist party in alliance with the ANC. Driving force for left‑wing economic policy. Increasingly building an independent electoral profile.',
    leader: 'Blade Nzimande', leaderTitle: 'General Secretary, South African Communist Party',
    ideology: 'Marxism-Leninism', position: 'Far Left', founded: '1921', seats: '0 (part of ANC alliance)', coalition: 'ANC Alliance',
    pros: ['Strong ideological influence on ANC', 'Labour and intellectual base'],
    cons: ['Torn between alliance loyalty and independence', 'Aging membership']
  },

  // ═══════════════ PROVINCIAL & MUNICIPAL HEAVYWEIGHTS ═══════════════
  {
    name: 'African Independent Congress', shortName: 'AIC',
    axes: {
      transformation: 0.3, stability: 0.5, stateAuthority: 0.2, constitutionalLiberalism: 0.2,
      ubuntuCollectivism: 0.3, individualRights: 0.0, panAfrican: 0.3, westernAlignment: 0.0,
      traditionalAuthority: 0.2, secularDemocracy: 0.0, racialRedress: 0.3, nonRacialism: 0.0,
      economicLeft: 0.2, economicRight: 0.0, authoritarian: 0.0, libertarian: 0.0
    },
    systemicInfluence: 'microRegional', capitalTier: 'lean', operationalAgent: 'hyperLocal',
    ideologicalNeutrality: 'pragmaticNeutral', governanceEffectiveness: 'hyperLocalMonitor',
    desc: 'Regional party born from a municipal boundary dispute in Matatiele. Strong local identity politics.',
    leader: 'Mandla Galo', leaderTitle: 'Leader, African Independent Congress',
    ideology: 'Regionalism / Local Interests', position: 'Centre', founded: '2005', seats: '0', coalition: 'Local Coalitions',
    pros: ['Won seats based on strong community grievance'],
    cons: ['Cannot expand beyond its original grievance']
  },
  {
    name: 'Forum for Service Delivery', shortName: 'F4SD',
    axes: {
      transformation: 0.2, stability: 0.5, stateAuthority: 0.2, constitutionalLiberalism: 0.3,
      ubuntuCollectivism: 0.2, individualRights: 0.4, panAfrican: 0.0, westernAlignment: 0.0,
      traditionalAuthority: 0.0, secularDemocracy: 0.3, racialRedress: 0.1, nonRacialism: 0.3,
      economicLeft: 0.3, economicRight: 0.0, authoritarian: 0.0, libertarian: 0.2
    },
    systemicInfluence: 'microRegional', capitalTier: 'micro', operationalAgent: 'hyperLocal',
    ideologicalNeutrality: 'pragmaticNeutral', governanceEffectiveness: 'hyperLocalMonitor',
    desc: 'Grassroots movement focused on basic service delivery in townships and rural areas.',
    leader: 'Mampuru Mampuru', leaderTitle: 'Leader, Forum for Service Delivery',
    ideology: 'Service Delivery Activism', position: 'Non-Ideological', founded: '2014', seats: '0', coalition: 'Local Coalitions',
    pros: ['Directly addresses service failures', 'Active in local protests'],
    cons: ['Extremely small and underfunded', 'Single‑issue focus']
  },
  {
    name: 'Congress of the People', shortName: 'COPE',
    axes: {
      transformation: 0.2, stability: 0.8, stateAuthority: -0.3, constitutionalLiberalism: 0.8,
      ubuntuCollectivism: 0.1, individualRights: 0.6, panAfrican: 0.0, westernAlignment: 0.5,
      traditionalAuthority: -0.2, secularDemocracy: 0.4, racialRedress: 0.1, nonRacialism: 0.6,
      economicLeft: -0.2, economicRight: 0.4, authoritarian: -0.4, libertarian: 0.5
    },
    systemicInfluence: 'microRegional', capitalTier: 'lean', operationalAgent: 'bureaucratic',
    ideologicalNeutrality: 'conditionalAligner', governanceEffectiveness: 'legislativeOversight',
    desc: 'ANC breakaway from 2008. Once official opposition, now a minor player. Focus on constitutionalism and clean governance.',
    leader: 'Mosiuoa Lekota', leaderTitle: 'President, Congress of the People',
    ideology: 'Constitutional Democracy', position: 'Centre-Left', founded: '2008', seats: '0', coalition: 'Opposition',
    pros: ['Historic anti-Zuma stance', 'Constitutionalist platform'],
    cons: ['Spectacular leadership implosion', 'Now functionally irrelevant']
  },
  {
    name: 'Independent Civic Organisation of SA', shortName: 'ICOSA',
    axes: {
      transformation: 0.1, stability: 0.4, stateAuthority: 0.0, constitutionalLiberalism: 0.3,
      ubuntuCollectivism: 0.2, individualRights: 0.3, panAfrican: 0.0, westernAlignment: 0.1,
      traditionalAuthority: 0.0, secularDemocracy: 0.2, racialRedress: 0.0, nonRacialism: 0.3,
      economicLeft: 0.0, economicRight: 0.2, authoritarian: 0.0, libertarian: 0.2
    },
    systemicInfluence: 'microRegional', capitalTier: 'micro', operationalAgent: 'hyperLocal',
    ideologicalNeutrality: 'pragmaticNeutral', governanceEffectiveness: 'hyperLocalMonitor',
    desc: 'Civic organisation focused on independent local governance and community empowerment.',
    leader: 'Jeffrey Donson', leaderTitle: 'Leader, Independent Civic Organisation of SA',
    ideology: 'Local Governance', position: 'Non-Ideological', founded: '2015', seats: '0', coalition: 'Local Coalitions',
    pros: ['Active in municipal accountability'],
    cons: ['Leadership controversies', 'Narrow geographic focus']
  },
  {
    name: 'African People\'s Convention', shortName: 'APC',
    axes: {
      transformation: 0.5, stability: 0.3, stateAuthority: 0.3, constitutionalLiberalism: 0.0,
      ubuntuCollectivism: 0.4, individualRights: -0.1, panAfrican: 0.6, westernAlignment: -0.3,
      traditionalAuthority: 0.2, secularDemocracy: 0.0, racialRedress: 0.5, nonRacialism: -0.2,
      economicLeft: 0.4, economicRight: -0.2, authoritarian: 0.2, libertarian: -0.1
    },
    systemicInfluence: 'microRegional', capitalTier: 'lean', operationalAgent: 'hyperLocal',
    ideologicalNeutrality: 'leftIdeological', governanceEffectiveness: 'localSpecialist',
    desc: 'PAC breakaway. Africanist focus with emphasis on land and economic justice.',
    leader: 'Themba Godi', leaderTitle: 'President, African People\'s Convention',
    ideology: 'Africanism', position: 'Far Left', founded: '2007', seats: '0', coalition: 'Opposition',
    pros: ['Maintains the Africanist tradition'],
    cons: ['Electoral irrelevance']
  },
  {
    name: 'United Independent Movement', shortName: 'UIM',
    axes: {
      transformation: 0.0, stability: 0.6, stateAuthority: -0.5, constitutionalLiberalism: 0.8,
      ubuntuCollectivism: -0.3, individualRights: 0.8, panAfrican: 0.0, westernAlignment: 0.6,
      traditionalAuthority: -0.2, secularDemocracy: 0.5, racialRedress: -0.2, nonRacialism: 0.7,
      economicLeft: -0.3, economicRight: 0.5, authoritarian: -0.5, libertarian: 0.7
    },
    systemicInfluence: 'microRegional', capitalTier: 'lean', operationalAgent: 'technocratic',
    ideologicalNeutrality: 'pragmaticNeutral', governanceEffectiveness: 'localSpecialist',
    desc: 'Centrist independent movement. Strong on individual freedoms, small government, and anti‑corruption.',
    leader: 'Neil de Beer', leaderTitle: 'Leader, United Independent Movement',
    ideology: 'Libertarianism / Centrism', position: 'Centre-Right', founded: '2020', seats: '0', coalition: 'Opposition',
    pros: ['Appeals to libertarian voters'],
    cons: ['Negligible electoral support']
  },
  {
    name: 'Plaaslike Besorgde Inwoners', shortName: 'PBI',
    axes: {
      transformation: -0.2, stability: 0.7, stateAuthority: 0.1, constitutionalLiberalism: 0.3,
      ubuntuCollectivism: -0.1, individualRights: 0.4, panAfrican: -0.3, westernAlignment: 0.4,
      traditionalAuthority: 0.1, secularDemocracy: 0.3, racialRedress: -0.3, nonRacialism: 0.4,
      economicLeft: -0.2, economicRight: 0.3, authoritarian: 0.1, libertarian: 0.1
    },
    systemicInfluence: 'microRegional', capitalTier: 'micro', operationalAgent: 'hyperLocal',
    ideologicalNeutrality: 'conditionalAligner', governanceEffectiveness: 'hyperLocalMonitor',
    desc: 'Afrikaans community‑focused party. Local service delivery and cultural preservation.',
    leader: 'Local community figures', leaderTitle: 'Plaaslike Besorgde Inwoners',
    ideology: 'Afrikaner Localism', position: 'Right', founded: '2019', seats: '0', coalition: 'Local Coalitions',
    pros: ['Addresses specific Afrikaans community concerns'],
    cons: ['Can be perceived as racially exclusive']
  },
  {
    name: 'Cape Independence Party', shortName: 'CAPEXIT',
    axes: {
      transformation: -1.2, stability: 1.4, stateAuthority: -1.0, constitutionalLiberalism: 0.6,
      ubuntuCollectivism: -1.2, individualRights: 0.8, panAfrican: -1.5, westernAlignment: 1.4,
      traditionalAuthority: -0.4, secularDemocracy: 0.6, racialRedress: -1.2, nonRacialism: 0.7,
      economicLeft: -1.0, economicRight: 1.2, authoritarian: -0.8, libertarian: 0.9
    },
    systemicInfluence: 'microRegional', capitalTier: 'lean', operationalAgent: 'identityAnchor',
    ideologicalNeutrality: 'adversarialAnchor', governanceEffectiveness: 'localSpecialist',
    desc: 'Single‑issue party advocating for Western Cape independence. Pro‑market, pro‑Western alignment.',
    leader: 'Jack Miller', leaderTitle: 'Leader, Cape Independence Party',
    ideology: 'Secessionism / Libertarianism', position: 'Right', founded: '2019', seats: '0', coalition: 'None',
    pros: ['Clear, distinct vision'],
    cons: ['Almost no electoral support', 'Independence is unconstitutional']
  },
  {
    name: 'Azanian People\'s Organisation', shortName: 'AZAPO',
    axes: {
      transformation: 1.4, stability: -0.6, stateAuthority: 0.6, constitutionalLiberalism: -0.7,
      ubuntuCollectivism: 1.3, individualRights: -0.6, panAfrican: 1.5, westernAlignment: -1.4,
      traditionalAuthority: 0.1, secularDemocracy: 0.3, racialRedress: 1.5, nonRacialism: -1.2,
      economicLeft: 1.3, economicRight: -1.2, authoritarian: 0.5, libertarian: -0.6
    },
    systemicInfluence: 'microRegional', capitalTier: 'lean', operationalAgent: 'identityAnchor',
    ideologicalNeutrality: 'adversarialAnchor', governanceEffectiveness: 'legislativeOversight',
    desc: 'Born from the Black Consciousness Movement of Steve Biko. Intellectually influential but electorally irrelevant.',
    leader: 'Strike Thokoane', leaderTitle: 'President, Azanian People\'s Organisation',
    ideology: 'Black Consciousness', position: 'Far Left', founded: '1978', seats: '0', coalition: 'Opposition',
    pros: ['Carries Biko\'s powerful legacy', 'Consistent voice for Black Consciousness'],
    cons: ['Zero electoral presence', 'Failed to translate ideas into democratic participation']
  },
  {
    name: 'Minority Front', shortName: 'MF',
    axes: {
      transformation: 0.0, stability: 0.6, stateAuthority: 0.2, constitutionalLiberalism: 0.3,
      ubuntuCollectivism: 0.4, individualRights: 0.1, panAfrican: -0.1, westernAlignment: 0.3,
      traditionalAuthority: 0.3, secularDemocracy: -0.1, racialRedress: 0.1, nonRacialism: 0.2,
      economicLeft: 0.0, economicRight: 0.3, authoritarian: 0.2, libertarian: 0.0
    },
    systemicInfluence: 'microRegional', capitalTier: 'lean', operationalAgent: 'identityAnchor',
    ideologicalNeutrality: 'conditionalAligner', governanceEffectiveness: 'localSpecialist',
    desc: 'Represents Indian South African interests, primarily in KwaZulu‑Natal. Dynastic leadership under the Rajbansi family.',
    leader: 'Shameen Thakur-Rajbansi', leaderTitle: 'Leader, Minority Front',
    ideology: 'Minority Rights / Conservatism', position: 'Centre-Right', founded: '1993', seats: '0', coalition: 'Local Coalitions',
    pros: ['Consistent voice for Indian community'],
    cons: ['Dynastic leadership', 'Declining support among younger voters']
  }
];