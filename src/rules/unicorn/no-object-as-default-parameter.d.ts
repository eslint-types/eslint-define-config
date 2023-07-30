import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of objects as default parameters.
 *
 * @see [no-object-as-default-parameter](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-object-as-default-parameter.md)
 */
export type NoObjectAsDefaultParameterRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of objects as default parameters.
 *
 * @see [no-object-as-default-parameter](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-object-as-default-parameter.md)
 */
export interface NoObjectAsDefaultParameterRule {
  /**
   * Disallow the use of objects as default parameters.
   *
   * @see [no-object-as-default-parameter](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-object-as-default-parameter.md)
   */
  'unicorn/no-object-as-default-parameter': NoObjectAsDefaultParameterRuleConfig;
}
