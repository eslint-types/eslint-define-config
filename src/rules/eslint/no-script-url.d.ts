import type { RuleConfig } from '../rule-config';

/**
 * Disallow `javascript:` urls.
 *
 * @see [no-script-url](https://eslint.org/docs/latest/rules/no-script-url)
 */
export type NoScriptUrlRuleConfig = RuleConfig<[]>;

/**
 * Disallow `javascript:` urls.
 *
 * @see [no-script-url](https://eslint.org/docs/latest/rules/no-script-url)
 */
export interface NoScriptUrlRule {
  /**
   * Disallow `javascript:` urls.
   *
   * @see [no-script-url](https://eslint.org/docs/latest/rules/no-script-url)
   */
  'no-script-url': NoScriptUrlRuleConfig;
}
