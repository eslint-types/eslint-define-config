import type { RuleConfig } from '../rule-config';

/**
 *
 * @deprecated
 *
 * @see [prefer-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#prefer-replace-all)
 */
export type PreferReplaceAllRuleConfig = RuleConfig<[]>;

/**
 *
 * @deprecated
 *
 * @see [prefer-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#prefer-replace-all)
 */
export interface PreferReplaceAllRule {
  /**
   *
   * @deprecated
   *
   * @see [prefer-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#prefer-replace-all)
   */
  'unicorn/prefer-replace-all': PreferReplaceAllRuleConfig;
}
