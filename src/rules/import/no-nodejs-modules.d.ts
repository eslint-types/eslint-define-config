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
 *
 * @see [no-nodejs-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-nodejs-modules.md)
 */
export type NoNodejsModulesRuleConfig = RuleConfig<NoNodejsModulesOptions>;

/**
 *
 * @see [no-nodejs-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-nodejs-modules.md)
 */
export interface NoNodejsModulesRule {
  /**
   *
   * @see [no-nodejs-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-nodejs-modules.md)
   */
  'import/no-nodejs-modules': NoNodejsModulesRuleConfig;
}
