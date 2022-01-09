import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export type PreferGlobalConsoleOption = 'always' | 'never';

/**
 * Options.
 */
export type PreferGlobalConsoleOptions = [PreferGlobalConsoleOption?];

/**
 * Enforce either `console` or `require("console")`.
 *
 * @see [prefer-global/console](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/console.md)
 */
export type PreferGlobalConsoleRuleConfig =
  RuleConfig<PreferGlobalConsoleOptions>;

/**
 * Enforce either `console` or `require("console")`.
 *
 * @see [prefer-global/console](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/console.md)
 */
export interface PreferGlobalConsoleRule {
  /**
   * Enforce either `console` or `require("console")`.
   *
   * @see [prefer-global/console](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/console.md)
   */
  'node/prefer-global/console': PreferGlobalConsoleRuleConfig;
}
