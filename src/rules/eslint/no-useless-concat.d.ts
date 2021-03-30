import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary concatenation of strings.
 *
 * @see [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)
 */
export type NoUselessConcatRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary concatenation of strings.
 *
 * @see [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)
 */
export interface NoUselessConcatRule {
  /**
   * Disallow unnecessary concatenation of strings.
   *
   * @see [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)
   */
  'no-useless-concat': NoUselessConcatRuleConfig;
}
