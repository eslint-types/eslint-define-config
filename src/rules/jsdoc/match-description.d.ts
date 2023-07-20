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
  nonemptyTags?: boolean;
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
 * @see [match-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md#repos-sticky-header)
 */
export type MatchDescriptionRuleConfig = RuleConfig<MatchDescriptionOptions>;

/**
 * Enforces a regular expression pattern on descriptions.
 *
 * @see [match-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md#repos-sticky-header)
 */
export interface MatchDescriptionRule {
  /**
   * Enforces a regular expression pattern on descriptions.
   *
   * @see [match-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md#repos-sticky-header)
   */
  'jsdoc/match-description': MatchDescriptionRuleConfig;
}
