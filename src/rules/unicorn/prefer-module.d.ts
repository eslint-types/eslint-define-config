import type { RuleConfig } from '../rule-config';

/**
 * Prefer JavaScript modules (ESM) over CommonJS.
 *
 * @see [prefer-module](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-module.md)
 */
export type PreferModuleRuleConfig = RuleConfig<[]>;

/**
 * Prefer JavaScript modules (ESM) over CommonJS.
 *
 * @see [prefer-module](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-module.md)
 */
export interface PreferModuleRule {
  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   *
   * @see [prefer-module](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-module.md)
   */
  'unicorn/prefer-module': PreferModuleRuleConfig;
}
