import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MatchNameOption {
  match: {
    allowName?: string;
    comment?: string;
    context?: string;
    disallowName?: string;
    message?: string;
    tags?: string[];
    [k: string]: any;
  }[];
  [k: string]: any;
}

/**
 * Options.
 */
export type MatchNameOptions = [MatchNameOption?];

/**
 * Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
 *
 * @see [match-name](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-name)
 */
export type MatchNameRuleConfig = RuleConfig<MatchNameOptions>;

/**
 * Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
 *
 * @see [match-name](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-name)
 */
export interface MatchNameRule {
  /**
   * Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
   *
   * @see [match-name](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-name)
   */
  'jsdoc/match-name': MatchNameRuleConfig;
}
