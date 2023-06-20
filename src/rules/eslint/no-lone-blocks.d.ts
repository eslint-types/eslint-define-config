import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary nested blocks.
 *
 * @see [no-lone-blocks](https://eslint.org/docs/latest/rules/no-lone-blocks)
 */
export type NoLoneBlocksRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary nested blocks.
 *
 * @see [no-lone-blocks](https://eslint.org/docs/latest/rules/no-lone-blocks)
 */
export interface NoLoneBlocksRule {
  /**
   * Disallow unnecessary nested blocks.
   *
   * @see [no-lone-blocks](https://eslint.org/docs/latest/rules/no-lone-blocks)
   */
  'no-lone-blocks': NoLoneBlocksRuleConfig;
}
