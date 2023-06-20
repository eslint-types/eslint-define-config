import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoInnerDeclarationsOption = 'functions' | 'both';

/**
 * Options.
 */
export type NoInnerDeclarationsOptions = [NoInnerDeclarationsOption?];

/**
 * Disallow variable or `function` declarations in nested blocks.
 *
 * @see [no-inner-declarations](https://eslint.org/docs/latest/rules/no-inner-declarations)
 */
export type NoInnerDeclarationsRuleConfig =
  RuleConfig<NoInnerDeclarationsOptions>;

/**
 * Disallow variable or `function` declarations in nested blocks.
 *
 * @see [no-inner-declarations](https://eslint.org/docs/latest/rules/no-inner-declarations)
 */
export interface NoInnerDeclarationsRule {
  /**
   * Disallow variable or `function` declarations in nested blocks.
   *
   * @see [no-inner-declarations](https://eslint.org/docs/latest/rules/no-inner-declarations)
   */
  'no-inner-declarations': NoInnerDeclarationsRuleConfig;
}
