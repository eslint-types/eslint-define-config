import type { RuleConfig } from '../rule-config';

/**
 * Prefer default parameters over reassignment.
 *
 * @see [prefer-default-parameters](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-default-parameters.md)
 */
export type PreferDefaultParametersRuleConfig = RuleConfig<[]>;

/**
 * Prefer default parameters over reassignment.
 *
 * @see [prefer-default-parameters](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-default-parameters.md)
 */
export interface PreferDefaultParametersRule {
  /**
   * Prefer default parameters over reassignment.
   *
   * @see [prefer-default-parameters](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-default-parameters.md)
   */
  'unicorn/prefer-default-parameters': PreferDefaultParametersRuleConfig;
}
