import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxNoUselessFragmentOption {
  allowExpressions?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxNoUselessFragmentOptions = [JsxNoUselessFragmentOption?];

/**
 * Disallow unnecessary fragments.
 *
 * @see [jsx-no-useless-fragment](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md)
 */
export type JsxNoUselessFragmentRuleConfig =
  RuleConfig<JsxNoUselessFragmentOptions>;

/**
 * Disallow unnecessary fragments.
 *
 * @see [jsx-no-useless-fragment](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md)
 */
export interface JsxNoUselessFragmentRule {
  /**
   * Disallow unnecessary fragments.
   *
   * @see [jsx-no-useless-fragment](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md)
   */
  'react/jsx-no-useless-fragment': JsxNoUselessFragmentRuleConfig;
}
