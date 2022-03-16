import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoCycleOption {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  ignore?: [string, ...string[]];
  maxDepth?: number | '∞';
  /**
   * ignore external modules
   */
  ignoreExternal?: boolean;
}

/**
 * Options.
 */
export type NoCycleOptions = [NoCycleOption?];

/**
 *
 *
 * @see [no-cycle](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-cycle.md)
 */
export type NoCycleRuleConfig = RuleConfig<NoCycleOptions>;

/**
 *
 *
 * @see [no-cycle](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-cycle.md)
 */
export interface NoCycleRule {
  /**
   *
   *
   * @see [no-cycle](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-cycle.md)
   */
  'import/no-cycle': NoCycleRuleConfig;
}
