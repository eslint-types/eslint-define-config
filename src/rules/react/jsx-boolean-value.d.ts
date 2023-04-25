import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxBooleanValueOption =
  | []
  | ['always' | 'never']
  | []
  | ['always']
  | [
      'always',
      {
        never?: string[];
      },
    ]
  | []
  | ['never']
  | [
      'never',
      {
        always?: string[];
      },
    ];

/**
 * Options.
 */
export type JsxBooleanValueOptions = JsxBooleanValueOption;

/**
 * Enforce boolean attributes notation in JSX.
 *
 * @see [jsx-boolean-value](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md)
 */
export type JsxBooleanValueRuleConfig = RuleConfig<JsxBooleanValueOptions>;

/**
 * Enforce boolean attributes notation in JSX.
 *
 * @see [jsx-boolean-value](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md)
 */
export interface JsxBooleanValueRule {
  /**
   * Enforce boolean attributes notation in JSX.
   *
   * @see [jsx-boolean-value](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md)
   */
  'react/jsx-boolean-value': JsxBooleanValueRuleConfig;
}
