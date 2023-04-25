import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnsafeOption {
  checkAliases?: boolean;
}

/**
 * Options.
 */
export type NoUnsafeOptions = [NoUnsafeOption?];

/**
 * Disallow usage of unsafe lifecycle methods.
 *
 * @see [no-unsafe](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md)
 */
export type NoUnsafeRuleConfig = RuleConfig<NoUnsafeOptions>;

/**
 * Disallow usage of unsafe lifecycle methods.
 *
 * @see [no-unsafe](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md)
 */
export interface NoUnsafeRule {
  /**
   * Disallow usage of unsafe lifecycle methods.
   *
   * @see [no-unsafe](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md)
   */
  'react/no-unsafe': NoUnsafeRuleConfig;
}
