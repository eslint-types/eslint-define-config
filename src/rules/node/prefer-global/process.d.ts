import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export type PreferGlobalProcessOption = 'always' | 'never';

/**
 * Options.
 */
export type PreferGlobalProcessOptions = [PreferGlobalProcessOption?];

/**
 * Enforce either `process` or `require("process")`.
 *
 * @see [prefer-global/process](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/process.md)
 */
export type PreferGlobalProcessRuleConfig =
  RuleConfig<PreferGlobalProcessOptions>;

/**
 * Enforce either `process` or `require("process")`.
 *
 * @see [prefer-global/process](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/process.md)
 */
export interface PreferGlobalProcessRule {
  /**
   * Enforce either `process` or `require("process")`.
   *
   * @see [prefer-global/process](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/process.md)
   */
  'node/prefer-global/process': PreferGlobalProcessRuleConfig;
}
