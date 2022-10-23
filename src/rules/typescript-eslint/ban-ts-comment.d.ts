import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface BanTsCommentOption {
  'ts-expect-error'?:
    | boolean
    | 'allow-with-description'
    | {
        descriptionFormat?: string;
        [k: string]: any;
      };
  'ts-ignore'?:
    | boolean
    | 'allow-with-description'
    | {
        descriptionFormat?: string;
        [k: string]: any;
      };
  'ts-nocheck'?:
    | boolean
    | 'allow-with-description'
    | {
        descriptionFormat?: string;
        [k: string]: any;
      };
  'ts-check'?:
    | boolean
    | 'allow-with-description'
    | {
        descriptionFormat?: string;
        [k: string]: any;
      };
  minimumDescriptionLength?: number;
}

/**
 * Options.
 */
export type BanTsCommentOptions = [BanTsCommentOption?];

/**
 * Disallow `@ts-<directive>` comments or require descriptions after directives.
 *
 * @see [ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)
 */
export type BanTsCommentRuleConfig = RuleConfig<BanTsCommentOptions>;

/**
 * Disallow `@ts-<directive>` comments or require descriptions after directives.
 *
 * @see [ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)
 */
export interface BanTsCommentRule {
  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives.
   *
   * @see [ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)
   */
  '@typescript-eslint/ban-ts-comment': BanTsCommentRuleConfig;
}
