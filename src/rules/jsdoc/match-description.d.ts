import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MatchDescriptionOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  mainDescription?:
    | string
    | boolean
    | {
        match?: string | boolean;
        message?: string;
      };
  matchDescription?: string;
  message?: string;
  tags?: {
    /**
     */
    [k: string]:
      | string
      | true
      | {
          match?: string | true;
          message?: string;
        };
  };
}

/**
 * Options.
 */
export type MatchDescriptionOptions = [MatchDescriptionOption?];

/**
 * Enforces a regular expression pattern on descriptions.
 *
 * @see [match-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-description)
 */
export type MatchDescriptionRuleConfig = RuleConfig<MatchDescriptionOptions>;

/**
 * Enforces a regular expression pattern on descriptions.
 *
 * @see [match-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-description)
 */
export interface MatchDescriptionRule {
  /**
   * Enforces a regular expression pattern on descriptions.
   *
   * @see [match-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-description)
   */
  'jsdoc/match-description': MatchDescriptionRuleConfig;
}
