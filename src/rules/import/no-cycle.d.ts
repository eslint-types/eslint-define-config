import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoCycleOption {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  /**
   * @minItems 1
   */
  ignore?: [string, ...string[]];
  maxDepth?: number | '∞';
  /**
   * ignore external modules
   */
  ignoreExternal?: boolean;
  /**
   * Allow cyclic dependency if there is at least one dynamic import in the chain
   */
  allowUnsafeDynamicCyclicDependency?: boolean;
}

/**
 * Options.
 */
export type NoCycleOptions = [NoCycleOption?];

/**
 * Forbid a module from importing a module with a dependency path back to itself.
 *
 * @see [no-cycle](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-cycle.md)
 */
export type NoCycleRuleConfig = RuleConfig<NoCycleOptions>;

/**
 * Forbid a module from importing a module with a dependency path back to itself.
 *
 * @see [no-cycle](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-cycle.md)
 */
export interface NoCycleRule {
  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   *
   * @see [no-cycle](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-cycle.md)
   */
  'import/no-cycle': NoCycleRuleConfig;
}
