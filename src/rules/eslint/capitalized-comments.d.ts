import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export type CapitalizedCommentsConfig =
  | {
      ignorePattern?: string;
      ignoreInlineComments?: boolean;
      ignoreConsecutiveComments?: boolean;
    }
  | {
      line?: {
        ignorePattern?: string;
        ignoreInlineComments?: boolean;
        ignoreConsecutiveComments?: boolean;
      };
      block?: {
        ignorePattern?: string;
        ignoreInlineComments?: boolean;
        ignoreConsecutiveComments?: boolean;
      };
    };

/**
 * Option.
 */
export type CapitalizedCommentsOption = 'always' | 'never';

/**
 * Options.
 */
export type CapitalizedCommentsOptions = [
  CapitalizedCommentsOption?,
  CapitalizedCommentsConfig?,
];

/**
 * Enforce or disallow capitalization of the first letter of a comment.
 *
 * @see [capitalized-comments](https://eslint.org/docs/latest/rules/capitalized-comments)
 */
export type CapitalizedCommentsRuleConfig =
  RuleConfig<CapitalizedCommentsOptions>;

/**
 * Enforce or disallow capitalization of the first letter of a comment.
 *
 * @see [capitalized-comments](https://eslint.org/docs/latest/rules/capitalized-comments)
 */
export interface CapitalizedCommentsRule {
  /**
   * Enforce or disallow capitalization of the first letter of a comment.
   *
   * @see [capitalized-comments](https://eslint.org/docs/latest/rules/capitalized-comments)
   */
  'capitalized-comments': CapitalizedCommentsRuleConfig;
}
