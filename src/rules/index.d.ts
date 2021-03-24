import type { EslintRules } from './eslint';
import type { RuleConfig } from './rule-config';

/**
 * Rules.
 *
 * @see [Rules](https://eslint.org/docs/user-guide/configuring/rules)
 */
export type Rules = Partial<EslintRules> & Partial<Record<string, RuleConfig>>;
