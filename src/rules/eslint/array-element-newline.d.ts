import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ArrayElementNewlineOption =
  | []
  | [
      | BasicConfig
      | {
          ArrayExpression?: BasicConfig;
          ArrayPattern?: BasicConfig;
        },
    ];
export type BasicConfig =
  | ('always' | 'never' | 'consistent')
  | {
      multiline?: boolean;
      minItems?: number | null;
    };

/**
 * Options.
 */
export type ArrayElementNewlineOptions = ArrayElementNewlineOption;

/**
 * Enforce line breaks after each array element.
 *
 * @see [array-element-newline](https://eslint.org/docs/latest/rules/array-element-newline)
 */
export type ArrayElementNewlineRuleConfig =
  RuleConfig<ArrayElementNewlineOptions>;

/**
 * Enforce line breaks after each array element.
 *
 * @see [array-element-newline](https://eslint.org/docs/latest/rules/array-element-newline)
 */
export interface ArrayElementNewlineRule {
  /**
   * Enforce line breaks after each array element.
   *
   * @see [array-element-newline](https://eslint.org/docs/latest/rules/array-element-newline)
   */
  'array-element-newline': ArrayElementNewlineRuleConfig;
}
