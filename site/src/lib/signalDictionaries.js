// Signal Dictionaries — rule-based patterns for the Signal Analyzer engine.
// These are the single source of truth for all scoring heuristics.
// Contributors: edit these lists to improve signal detection accuracy.

// Verbs that indicate direct ownership and execution
export const OWNERSHIP_VERBS = [
  'led', 'built', 'architected', 'designed', 'drove', 'launched', 'created',
  'delivered', 'owned', 'spearheaded', 'established', 'defined', 'shipped',
  'authored', 'founded', 'initiated', 'pioneered', 'directed', 'executed',
  'deployed', 'engineered', 'developed', 'implemented', 'introduced', 'scaled',
  'transformed', 'migrated', 'refactored', 'optimized', 'automated', 'resolved',
  // -ing forms for present/active tense
  'leading', 'building', 'designing', 'driving', 'launching', 'creating',
  'delivering', 'scaling', 'transforming', 'migrating', 'optimizing',
]

// Verbs and phrases that dilute ownership signal
export const WEAK_VERBS = [
  'helped', 'assisted', 'participated', 'involved in', 'worked on',
  'supported', 'contributed to', 'collaborated on', 'was part of',
  'was involved', 'helped with', 'assisted with', 'took part in',
  'played a role', 'was responsible', 'had the opportunity',
]

// Words indicating business and customer impact
export const IMPACT_WORDS = [
  'revenue', 'cost', 'saving', 'savings', 'efficiency', 'retention',
  'conversion', 'growth', 'reduced', 'reducing', 'increased', 'increasing',
  'improved', 'improving', 'eliminated', 'accelerated', 'customer', 'adoption',
  'churn', 'profit', 'loss', 'engagement', 'satisfaction', 'uptime', 'downtime',
  'latency', 'performance', 'reliability', 'throughput', 'availability',
  'roi', 'mrr', 'arr', 'time to market', 'deploy frequency', 'error rate',
]

// Words indicating scale and scope
export const SCALE_INDICATORS = [
  'million', 'billion', 'thousand', 'users', 'customers', 'engineers',
  'team', 'services', 'requests', 'transactions', 'countries', 'regions',
  'markets', 'products', 'teams', 'organizations', 'globally', 'enterprise',
  'petabyte', 'terabyte', 'dau', 'mau', 'rps', 'tps', 'qps',
]

// Words indicating leadership and people influence
export const LEADERSHIP_INDICATORS = [
  'mentored', 'coached', 'hired', 'grew', 'managed', 'aligned', 'influenced',
  'stakeholder', 'roadmap', 'strategy', 'vision', 'cross-functional', 'org',
  'culture', 'promoted', 'evangelized', 'standardized', 'orchestrated',
  'partnered', 'negotiated', 'facilitated', 'presented', 'advocated',
  'cultivated', 'empowered', 'enabled', 'mentoring', 'coaching',
]

// Regex patterns that detect quantified metrics
export const METRIC_PATTERNS = [
  /\d+\.?\d*%/,       // percentages: 40%, 99.9%
  /\$[\d,.]+[kKmMbB]?/, // dollar amounts: $50M, $1,200, $500K
  /\d+\.?\d*x\b/,    // multipliers: 2x, 10x, 1.5x
  /\d+[kKmMbB]\b/,   // shorthand: 40K, 2M, 1B
  /\d{1,3}(,\d{3})+/, // large numbers with commas: 1,200,000
]

// Technical terms indicating implementation depth
export const TECHNICAL_TERMS = [
  // Architecture patterns
  'architecture', 'microservice', 'microservices', 'distributed', 'scalable',
  'infrastructure', 'pipeline', 'api', 'platform', 'framework', 'database',
  'cache', 'caching', 'message queue', 'event-driven', 'load balancer',
  // Engineering concepts
  'latency', 'throughput', 'availability', 'reliability', 'observability',
  'algorithm', 'authentication', 'authorization', 'encryption', 'sharding',
  'indexing', 'migration', 'schema', 'replica', 'rollback', 'deployment',
  // Modern tools & stacks
  'kubernetes', 'docker', 'ci/cd', 'monitoring', 'cloud', 'serverless',
  'kafka', 'redis', 'postgres', 'graphql', 'rest', 'grpc', 'oauth',
  'terraform', 'ansible', 'aws', 'gcp', 'azure', 'lambda', 'ec2', 's3',
  // Practices
  'a/b test', 'feature flag', 'canary', 'integration test', 'unit test',
  'end-to-end', 'code review', 'sprint', 'on-call',
]

// Vague phrases that dilute signal quality
export const VAGUE_PHRASES = [
  'various', 'several', 'many', 'some', 'a lot', 'good', 'great', 'excellent',
  'best practices', 'cutting edge', 'innovative', 'synergy', 'dynamic',
  'passionate', 'results-driven', 'self-starter', 'team player',
  'strong', 'proven', 'extensive', 'significant', 'substantial', 'numerous',
  'multiple', 'diverse', 'robust', 'impactful', 'leveraged',
]

// STAR method keywords for interview answer analysis
export const STAR_KEYWORDS = {
  situation: [
    'when', 'during', 'while', 'context', 'background', 'at the time',
    'facing', 'the challenge', 'the situation', 'our team was', 'we were',
  ],
  task: [
    'needed to', 'responsible for', 'goal was', 'tasked with', 'my role',
    'i was asked', 'objective', 'requirement', 'i needed', 'we needed',
  ],
  action: [
    'decided to', 'chose to', 'i led', 'i drove', 'i initiated', 'i built',
    'i implemented', 'i designed', 'i created', 'i developed', 'i deployed',
    'took the approach', 'solution was', 'i proposed',
  ],
  result: [
    'resulted in', 'led to', 'achieved', 'outcome', 'impact', 'as a result',
    'ultimately', 'this reduced', 'this increased', 'this improved',
    'delivered', 'we shipped', 'we launched',
  ],
}
