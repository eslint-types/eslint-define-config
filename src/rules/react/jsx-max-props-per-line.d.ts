import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxMaxPropsPerLineOption =
  | {
      maximum?: {
        single?: number;
        multi?: number;
        [k: string]: any;
      };
    }
  | {
      maximum?: number;
      when?: 'always' | 'multiline';
    };

/**
 * Options.
 */
export type JsxMaxPropsPerLineOptions = [JsxMaxPropsPerLineOption?];

/**
 * Enforce maximum of props on a single line in JSX.
 *
 * @see [jsx-max-props-per-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md)
 */
export type JsxMaxPropsPerLineRuleConfig =
  RuleConfig<JsxMaxPropsPerLineOptions>;

/**
 * Enforce maximum of props on a single line in JSX.
 *
 * @see [jsx-max-props-per-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md)
 */
export interface JsxMaxPropsPerLineRule {
  /**
   * Enforce maximum of props on a single line in JSX.
   *
   * @see [jsx-max-props-per-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md)
   */
  'react/jsx-max-props-per-line': JsxMaxPropsPerLineRuleConfig;
}
