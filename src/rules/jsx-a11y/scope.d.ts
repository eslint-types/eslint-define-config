import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ScopeOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type ScopeOptions = [ScopeOption?];

/**
 * Enforce `scope` prop is only used on `<th>` elements.
 *
 * @see [scope](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/scope.md)
 */
export type ScopeRuleConfig = RuleConfig<ScopeOptions>;

/**
 * Enforce `scope` prop is only used on `<th>` elements.
 *
 * @see [scope](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/scope.md)
 */
export interface ScopeRule {
  /**
   * Enforce `scope` prop is only used on `<th>` elements.
   *
   * @see [scope](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/scope.md)
   */
  'jsx-a11y/scope': ScopeRuleConfig;
}
