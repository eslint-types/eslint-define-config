import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ConsistentFunctionScopingOption {
  checkArrowFunctions?: boolean;
}

/**
 * Options.
 */
export type ConsistentFunctionScopingOptions = [
  ConsistentFunctionScopingOption?,
];

/**
 * Move function definitions to the highest possible scope.
 *
 * @see [consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/consistent-function-scoping.md)
 */
export type ConsistentFunctionScopingRuleConfig =
  RuleConfig<ConsistentFunctionScopingOptions>;

/**
 * Move function definitions to the highest possible scope.
 *
 * @see [consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/consistent-function-scoping.md)
 */
export interface ConsistentFunctionScopingRule {
  /**
   * Move function definitions to the highest possible scope.
   *
   * @see [consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/consistent-function-scoping.md)
   */
  'unicorn/consistent-function-scoping': ConsistentFunctionScopingRuleConfig;
}
