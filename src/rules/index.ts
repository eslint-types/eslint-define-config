import type { EslintRules } from './eslint';
import type { RuleConfig } from './rule-config';

/**
 *
 */
export type Rules = Partial<EslintRules> & Partial<Record<string, RuleConfig>>;
