import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface BanTsCommentOption {
  'ts-expect-error'?: boolean | 'allow-with-description';
  'ts-ignore'?: boolean | 'allow-with-description';
  'ts-nocheck'?: boolean | 'allow-with-description';
  'ts-check'?: boolean | 'allow-with-description';
  minimumDescriptionLength?: number;
}

/**
 * Options.
 */
export type BanTsCommentOptions = [BanTsCommentOption?];

/**
 * Bans `@ts-<directive>` comments from being used or requires descriptions after directive.
 *
 * @see [ban-ts-comment](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/ban-ts-comment.md)
 */
export type BanTsCommentRuleConfig = RuleConfig<BanTsCommentOptions>;

/**
 * Bans `@ts-<directive>` comments from being used or requires descriptions after directive.
 *
 * @see [ban-ts-comment](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/ban-ts-comment.md)
 */
export interface BanTsCommentRule {
  /**
   * Bans `@ts-<directive>` comments from being used or requires descriptions after directive.
   *
   * @see [ban-ts-comment](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/ban-ts-comment.md)
   */
  '@typescript-eslint/ban-ts-comment': BanTsCommentRuleConfig;
}
