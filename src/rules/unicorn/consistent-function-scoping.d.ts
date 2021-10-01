import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ConsistentFunctionScopingOption {
  checkArrowFunctions?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type ConsistentFunctionScopingOptions = [ConsistentFunctionScopingOption?];

/**
 * Move function definitions to the highest possible scope.
 *
 * @see [consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v36.0.0/docs/rules/consistent-function-scoping.md)
 */
export type ConsistentFunctionScopingRuleConfig = RuleConfig<ConsistentFunctionScopingOptions>;

/**
 * Move function definitions to the highest possible scope.
 *
 * @see [consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v36.0.0/docs/rules/consistent-function-scoping.md)
 */
export interface ConsistentFunctionScopingRule {
  /**
   * Move function definitions to the highest possible scope.
   *
   * @see [consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v36.0.0/docs/rules/consistent-function-scoping.md)
   */
  'unicorn/consistent-function-scoping': ConsistentFunctionScopingRuleConfig;
}
