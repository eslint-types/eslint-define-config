import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoNodejsModulesOption {
  allow?: string[];
}

/**
 * Options.
 */
export type NoNodejsModulesOptions = [NoNodejsModulesOption?];

/**
 * Forbid Node.js builtin modules.
 *
 * @see [no-nodejs-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-nodejs-modules.md)
 */
export type NoNodejsModulesRuleConfig = RuleConfig<NoNodejsModulesOptions>;

/**
 * Forbid Node.js builtin modules.
 *
 * @see [no-nodejs-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-nodejs-modules.md)
 */
export interface NoNodejsModulesRule {
  /**
   * Forbid Node.js builtin modules.
   *
   * @see [no-nodejs-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-nodejs-modules.md)
   */
  'import/no-nodejs-modules': NoNodejsModulesRuleConfig;
}
