import type { RuleConfig } from '../rule-config';

/**
 * Bans `// tslint:<rule-flag>` comments from being used.
 *
 * @see [ban-tslint-comment](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/ban-tslint-comment.md)
 */
export type BanTslintCommentRuleConfig = RuleConfig<[]>;

/**
 * Bans `// tslint:<rule-flag>` comments from being used.
 *
 * @see [ban-tslint-comment](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/ban-tslint-comment.md)
 */
export interface BanTslintCommentRule {
  /**
   * Bans `// tslint:<rule-flag>` comments from being used.
   *
   * @see [ban-tslint-comment](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/ban-tslint-comment.md)
   */
  '@typescript-eslint/ban-tslint-comment': BanTslintCommentRuleConfig;
}
