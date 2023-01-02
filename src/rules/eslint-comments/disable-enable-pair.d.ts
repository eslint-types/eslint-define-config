import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface DisableEnablePairOption {
  allowWholeFile?: boolean;
}

/**
 * Options.
 */
export type DisableEnablePairOptions = [DisableEnablePairOption?];

/**
 * Require a `eslint-enable` comment for every `eslint-disable` comment.
 *
 * @see [disable-enable-pair](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html)
 */
export type DisableEnablePairRuleConfig = RuleConfig<DisableEnablePairOptions>;

/**
 * Require a `eslint-enable` comment for every `eslint-disable` comment.
 *
 * @see [disable-enable-pair](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html)
 */
export interface DisableEnablePairRule {
  /**
   * Require a `eslint-enable` comment for every `eslint-disable` comment.
   *
   * @see [disable-enable-pair](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html)
   */
  'eslint-comments/disable-enable-pair': DisableEnablePairRuleConfig;
}
