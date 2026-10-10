export const profile = {
  name: 'Piero Enriquez',
  role: 'AI Infrastructure Engineer',
  pitch:
    'I build the plumbing that lets AI agents do real work inside a company without anyone losing sleep: ' +
    'permission tiers, sandboxed VMs, human approvals, and an audit trail for every tool call. ' +
    'Before that I shipped crypto payment rails and fintech backends at Bitrefill.',
  email: 'pieroenriquezvera@gmail.com',
  github: 'https://github.com/PieroEnriquez',
  linkedin: 'https://www.linkedin.com/in/piero-enriquez-vera-21599b232/',
  cv: '/piero-enriquez-cv.pdf',
}

export const stats = [
  { value: '~85%', label: 'of Bitrefill adopted the agent platform I co-built' },
  { value: '100k+', label: 'audited tool executions a month' },
  { value: '1000s', label: 'of sandboxed VMs a month so agents can touch production safely' },
]

export const ace = {
  name: 'Ace',
  meta: 'Open source · Proof of concept · 2026',
  body:
    'A proof of concept for a much bigger idea: run an organization out of a git repo. Not the org’s code, ' +
    'the org itself. What a team knows, what it can do, and who may do it, all as reviewable text behind one gate, ' +
    'with permission-checked dispatch, durable human approvals, and a full audit log. The core ships small on purpose. ' +
    'The production shape, from SSO and sandboxed execution to a model proxy and an agent fleet, is designed and ' +
    'documented in the README, each piece attaching behind a seam that already exists.',
  tags: ['TypeScript', 'Open source', 'Agent platforms'],
  link: 'https://github.com/PieroEnriquez/ace',
}

export const experience = [
  {
    role: 'AI Infrastructure Engineer',
    company: 'Bitrefill',
    period: 'Sep 2025 – Sep 2026',
    title: 'An AI agent platform for a whole company',
    body:
      'I co-built the internal platform that let most of Bitrefill hand real work to AI agents. ' +
      'I designed the MCP tool domains, the permission tiers, and the human-in-the-loop approval flows, ' +
      'built the sandboxed VM layer that lets agents reach production safely, and shipped most of the UI: ' +
      'the Slack agent experience, the web run viewer, and the draft editor. I owned reliability, deploys, ' +
      'and CI cost, and finally pulled the whole platform out of the monolith into its own repository.',
    tags: ['MCP', 'Claude Agent SDK', 'Slack Bolt', 'Sandboxing', 'TypeScript'],
  },
  {
    role: 'Blockchain Developer',
    company: 'Bitrefill',
    period: 'Jan 2025 – Aug 2025',
    title: 'Crypto payment rails',
    body:
      'Core engineer on the rails that take Solana, Tron, TON and more from node to checkout. ' +
      'I rebuilt Solana payment detection as real-time streaming with automatic provider failover, ' +
      'led the ethers v6 and Tronweb v6 migrations, sped up ERC-20 confirmations, and automated ' +
      'fee-aware treasury sweeps to exchanges with per-sweep accounting.',
    tags: ['Solana web3.js', 'ethers.js', 'Tronweb', 'Node.js'],
  },
  {
    role: 'Backend Developer',
    company: 'Bitrefill',
    period: 'Jan 2023 – Dec 2024',
    title: 'The Bitrefill Card',
    body:
      'I joined as an intern and was hired full-time three months later. I became a core developer of the ' +
      'card and, for a while, its only backend owner: the KYC pipeline, webhook processing, SEPA, crypto and ' +
      'Lightning deposits, the physical card program, real-time notifications, localized emails, and reporting. ' +
      'Along the way I shipped USDT on Polygon, web3 login, LiFi swaps, and eSIM flows.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Customer.io'],
  },
]

export const principles = [
  {
    title: 'Agents need rails, not trust.',
    body: 'Permission tiers, sandboxes, approvals, and audit logs are what let an agent do real work: the blast radius stays bounded, so people stop hovering.',
  },
  {
    title: 'Own it end to end.',
    body: 'Node to checkout, backend to Slack UI. I would rather own the whole path than a slice of it, because that is where the real bugs live.',
  },
  {
    title: 'Boring reliability is a feature.',
    body: 'Deploys, failover, CI cost. The unglamorous work is what makes a team trust a system enough to build on it.',
  },
]

export const skills = [
  'TypeScript', 'Node.js', 'SQL', 'Express', 'MongoDB', 'Redis', 'S3',
  'MCP', 'Claude Agent SDK', 'Claude Code', 'Agent sandboxing', 'Human-in-the-loop design',
  'ethers.js', 'Solana web3.js', 'Tronweb',
  'Slack Bolt & Block Kit', 'Customer.io', 'Mixpanel', 'Kraken & Bitfinex APIs',
]
