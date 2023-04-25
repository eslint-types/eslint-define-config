import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxCurlySpacingOption =
  | []
  | [
      | (BasicConfig & {
          attributes?: BasicConfigOrBoolean;
          children?: BasicConfigOrBoolean;
          [k: string]: any;
        })
      | ('always' | 'never'),
    ]
  | [
      (
        | (BasicConfig & {
            attributes?: BasicConfigOrBoolean;
            children?: BasicConfigOrBoolean;
            [k: string]: any;
          })
        | ('always' | 'never')
      ),
      {
        allowMultiline?: boolean;
        spacing?: {
          objectLiterals?: 'always' | 'never';
          [k: string]: any;
        };
      },
    ];
export type BasicConfigOrBoolean = BasicConfig | boolean;

export interface BasicConfig {
  when?: 'always' | 'never';
  allowMultiline?: boolean;
  spacing?: {
    objectLiterals?: 'always' | 'never';
    [k: string]: any;
  };
  [k: string]: any;
}

/**
 * Options.
 */
export type JsxCurlySpacingOptions = JsxCurlySpacingOption;

/**
 * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
 *
 * @see [jsx-curly-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md)
 */
export type JsxCurlySpacingRuleConfig = RuleConfig<JsxCurlySpacingOptions>;

/**
 * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
 *
 * @see [jsx-curly-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md)
 */
export interface JsxCurlySpacingRule {
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
   *
   * @see [jsx-curly-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md)
   */
  'react/jsx-curly-spacing': JsxCurlySpacingRuleConfig;
}
