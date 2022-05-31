import type { RuleConfig } from '../rule-config';

/**
 * Disallow `// tslint:<rule-flag>` comments.
 *
 * @see [ban-tslint-comment](https://typescript-eslint.io/rules/ban-tslint-comment)
 */
export type BanTslintCommentRuleConfig = RuleConfig<[]>;

/**
 * Disallow `// tslint:<rule-flag>` comments.
 *
 * @see [ban-tslint-comment](https://typescript-eslint.io/rules/ban-tslint-comment)
 */
export interface BanTslintCommentRule {
  /**
   * Disallow `// tslint:<rule-flag>` comments.
   *
   * @see [ban-tslint-comment](https://typescript-eslint.io/rules/ban-tslint-comment)
   */
  '@typescript-eslint/ban-tslint-comment': BanTslintCommentRuleConfig;
}
