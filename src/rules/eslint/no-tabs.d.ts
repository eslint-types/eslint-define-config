import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoTabsOption {
  allowIndentationTabs?: boolean;
}

/**
 * Options.
 */
export type NoTabsOptions = [NoTabsOption?];

/**
 * Disallow all tabs.
 *
 * @see [no-tabs](https://eslint.org/docs/latest/rules/no-tabs)
 */
export type NoTabsRuleConfig = RuleConfig<NoTabsOptions>;

/**
 * Disallow all tabs.
 *
 * @see [no-tabs](https://eslint.org/docs/latest/rules/no-tabs)
 */
export interface NoTabsRule {
  /**
   * Disallow all tabs.
   *
   * @see [no-tabs](https://eslint.org/docs/latest/rules/no-tabs)
   */
  'no-tabs': NoTabsRuleConfig;
}
