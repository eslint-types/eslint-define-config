import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRenderInSetupOption {
  allowTestingFrameworkSetupHook?: 'beforeEach' | 'beforeAll';
  [k: string]: any;
}

/**
 * Options.
 */
export type NoRenderInSetupOptions = [NoRenderInSetupOption?];

/**
 * Disallow the use of `render` in testing frameworks setup functions.
 *
 * @see [no-render-in-setup](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-render-in-setup.md)
 */
export type NoRenderInSetupRuleConfig = RuleConfig<NoRenderInSetupOptions>;

/**
 * Disallow the use of `render` in testing frameworks setup functions.
 *
 * @see [no-render-in-setup](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-render-in-setup.md)
 */
export interface NoRenderInSetupRule {
  /**
   * Disallow the use of `render` in testing frameworks setup functions.
   *
   * @see [no-render-in-setup](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-render-in-setup.md)
   */
  'testing-library/no-render-in-setup': NoRenderInSetupRuleConfig;
}
