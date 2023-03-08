import type { RuleConfig } from '../rule-config';

/**
 * Disallow enums from having both number and string members.
 *
 * @see [no-mixed-enums](https://typescript-eslint.io/rules/no-mixed-enums)
 */
export type NoMixedEnumsRuleConfig = RuleConfig<[]>;

/**
 * Disallow enums from having both number and string members.
 *
 * @see [no-mixed-enums](https://typescript-eslint.io/rules/no-mixed-enums)
 */
export interface NoMixedEnumsRule {
  /**
   * Disallow enums from having both number and string members.
   *
   * @see [no-mixed-enums](https://typescript-eslint.io/rules/no-mixed-enums)
   */
  '@typescript-eslint/no-mixed-enums': NoMixedEnumsRuleConfig;
}
