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
 * @see [no-blank-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-blank-blocks)
 */
export type NoBlankBlocksRuleConfig = RuleConfig<NoBlankBlocksOptions>;

/**
 * Removes empty blocks with nothing but possibly line breaks.
 *
 * @see [no-blank-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-blank-blocks)
 */
export interface NoBlankBlocksRule {
  /**
   * Removes empty blocks with nothing but possibly line breaks.
   *
   * @see [no-blank-blocks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-blank-blocks)
   */
  'jsdoc/no-blank-blocks': NoBlankBlocksRuleConfig;
}
