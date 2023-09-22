import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRenderInLifecycleOption {
  allowTestingFrameworkSetupHook?: 'beforeEach' | 'beforeAll';
  [k: string]: any;
}

/**
 * Options.
 */
export type NoRenderInLifecycleOptions = [NoRenderInLifecycleOption?];

/**
 * Disallow the use of `render` in testing frameworks setup functions.
 *
 * @see [no-render-in-lifecycle](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-render-in-lifecycle.md)
 */
export type NoRenderInLifecycleRuleConfig =
  RuleConfig<NoRenderInLifecycleOptions>;

/**
 * Disallow the use of `render` in testing frameworks setup functions.
 *
 * @see [no-render-in-lifecycle](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-render-in-lifecycle.md)
 */
export interface NoRenderInLifecycleRule {
  /**
   * Disallow the use of `render` in testing frameworks setup functions.
   *
   * @see [no-render-in-lifecycle](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-render-in-lifecycle.md)
   */
  'testing-library/no-render-in-lifecycle': NoRenderInLifecycleRuleConfig;
}
