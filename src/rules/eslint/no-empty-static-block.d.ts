import type { RuleConfig } from '../rule-config';

/**
 * Disallow empty static blocks.
 *
 * @see [no-empty-static-block](https://eslint.org/docs/latest/rules/no-empty-static-block)
 */
export type NoEmptyStaticBlockRuleConfig = RuleConfig<[]>;

/**
 * Disallow empty static blocks.
 *
 * @see [no-empty-static-block](https://eslint.org/docs/latest/rules/no-empty-static-block)
 */
export interface NoEmptyStaticBlockRule {
  /**
   * Disallow empty static blocks.
   *
   * @see [no-empty-static-block](https://eslint.org/docs/latest/rules/no-empty-static-block)
   */
  'no-empty-static-block': NoEmptyStaticBlockRuleConfig;
}
