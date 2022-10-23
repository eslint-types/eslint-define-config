import type { RuleConfig } from '../rule-config';

/**
 * Linter integration with remark plugins.
 *
 */
export type RemarkRuleConfig = RuleConfig<[]>;

/**
 * Linter integration with remark plugins.
 *
 */
export interface RemarkRule {
  /**
   * Linter integration with remark plugins.
   *
   */
  'mdx/remark': RemarkRuleConfig;
}
