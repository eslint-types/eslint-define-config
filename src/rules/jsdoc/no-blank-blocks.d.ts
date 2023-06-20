import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoBlankBlocksOption {
  enableFixer?: boolean;
}

/**
 * Options.
 */
export type NoBlankBlocksOptions = [NoBlankBlocksOption?];

/**
 * Removes empty blocks with nothing but possibly line breaks.
 *
 * @see [no-blank-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md#repos-sticky-header)
 */
export type NoBlankBlocksRuleConfig = RuleConfig<NoBlankBlocksOptions>;

/**
 * Removes empty blocks with nothing but possibly line breaks.
 *
 * @see [no-blank-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md#repos-sticky-header)
 */
export interface NoBlankBlocksRule {
  /**
   * Removes empty blocks with nothing but possibly line breaks.
   *
   * @see [no-blank-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md#repos-sticky-header)
   */
  'jsdoc/no-blank-blocks': NoBlankBlocksRuleConfig;
}
