import type { RuleConfig } from '../rule-config';

/**
 * Bans `// tslint:<rule-flag>` comments from being used.
 *
 * @see [ban-tslint-comment](https://typescript-eslint.io/rules/ban-tslint-comment)
 */
export type BanTslintCommentRuleConfig = RuleConfig<[]>;

/**
 * Bans `// tslint:<rule-flag>` comments from being used.
 *
 * @see [ban-tslint-comment](https://typescript-eslint.io/rules/ban-tslint-comment)
 */
export interface BanTslintCommentRule {
  /**
   * Bans `// tslint:<rule-flag>` comments from being used.
   *
   * @see [ban-tslint-comment](https://typescript-eslint.io/rules/ban-tslint-comment)
   */
  '@typescript-eslint/ban-tslint-comment': BanTslintCommentRuleConfig;
}
