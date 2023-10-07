import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type DirectiveConfigSchema =
  | boolean
  | 'allow-with-description'
  | {
      descriptionFormat?: string;
    };

export interface BanTsCommentOption {
  'ts-expect-error'?: DirectiveConfigSchema;
  'ts-ignore'?: DirectiveConfigSchema;
  'ts-nocheck'?: DirectiveConfigSchema;
  'ts-check'?: DirectiveConfigSchema;
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
