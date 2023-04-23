import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxKeyOption {
  checkFragmentShorthand?: boolean;
  checkKeyMustBeforeSpread?: boolean;
  warnOnDuplicates?: boolean;
}

/**
 * Options.
 */
export type JsxKeyOptions = [JsxKeyOption?];

/**
 * Disallow missing `key` props in iterators/collection literals.
 *
 * @see [jsx-key](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-key.md)
 */
export type JsxKeyRuleConfig = RuleConfig<JsxKeyOptions>;

/**
 * Disallow missing `key` props in iterators/collection literals.
 *
 * @see [jsx-key](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-key.md)
 */
export interface JsxKeyRule {
  /**
   * Disallow missing `key` props in iterators/collection literals.
   *
   * @see [jsx-key](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-key.md)
   */
  'react/jsx-key': JsxKeyRuleConfig;
}
