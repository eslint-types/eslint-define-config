import type { RuleConfig } from '../rule-config';

/**
 * Disallow initializing variables to `undefined`.
 *
 * @see [no-undef-init](https://eslint.org/docs/latest/rules/no-undef-init)
 */
export type NoUndefInitRuleConfig = RuleConfig<[]>;

/**
 * Disallow initializing variables to `undefined`.
 *
 * @see [no-undef-init](https://eslint.org/docs/latest/rules/no-undef-init)
 */
export interface NoUndefInitRule {
  /**
   * Disallow initializing variables to `undefined`.
   *
   * @see [no-undef-init](https://eslint.org/docs/latest/rules/no-undef-init)
   */
  'no-undef-init': NoUndefInitRuleConfig;
}
