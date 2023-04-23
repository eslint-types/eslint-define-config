import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxCurlyBracePresenceOption =
  | {
      props?: 'always' | 'never' | 'ignore';
      children?: 'always' | 'never' | 'ignore';
      propElementValues?: 'always' | 'never' | 'ignore';
    }
  | ('always' | 'never' | 'ignore');

/**
 * Options.
 */
export type JsxCurlyBracePresenceOptions = [JsxCurlyBracePresenceOption?];

/**
 * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
 *
 * @see [jsx-curly-brace-presence](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md)
 */
export type JsxCurlyBracePresenceRuleConfig =
  RuleConfig<JsxCurlyBracePresenceOptions>;

/**
 * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
 *
 * @see [jsx-curly-brace-presence](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md)
 */
export interface JsxCurlyBracePresenceRule {
  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
   *
   * @see [jsx-curly-brace-presence](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md)
   */
  'react/jsx-curly-brace-presence': JsxCurlyBracePresenceRuleConfig;
}
