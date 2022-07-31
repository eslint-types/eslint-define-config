import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 0
 */
export type NoRestrictedBlockOption = (
  | string
  | {
      element: string;
      message?: string;
    }
)[];

/**
 * Options.
 */
export type NoRestrictedBlockOptions = NoRestrictedBlockOption;

/**
 * Disallow specific block.
 *
 * @see [no-restricted-block](https://eslint.vuejs.org/rules/no-restricted-block.html)
 */
export type NoRestrictedBlockRuleConfig = RuleConfig<NoRestrictedBlockOptions>;

/**
 * Disallow specific block.
 *
 * @see [no-restricted-block](https://eslint.vuejs.org/rules/no-restricted-block.html)
 */
export interface NoRestrictedBlockRule {
  /**
   * Disallow specific block.
   *
   * @see [no-restricted-block](https://eslint.vuejs.org/rules/no-restricted-block.html)
   */
  'vue/no-restricted-block': NoRestrictedBlockRuleConfig;
}
