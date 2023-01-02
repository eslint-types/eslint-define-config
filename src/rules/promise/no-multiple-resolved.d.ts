import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [no-multiple-resolved](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md)
 */
export type NoMultipleResolvedRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [no-multiple-resolved](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md)
 */
export interface NoMultipleResolvedRule {
  /**
   *
   * @see [no-multiple-resolved](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md)
   */
  'promise/no-multiple-resolved': NoMultipleResolvedRuleConfig;
}
