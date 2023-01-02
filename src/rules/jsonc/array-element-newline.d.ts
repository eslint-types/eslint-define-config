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
 * Enforce line breaks between array elements.
 *
 * @see [array-element-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html)
 */
export type ArrayElementNewlineRuleConfig =
  RuleConfig<ArrayElementNewlineOptions>;

/**
 * Enforce line breaks between array elements.
 *
 * @see [array-element-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html)
 */
export interface ArrayElementNewlineRule {
  /**
   * Enforce line breaks between array elements.
   *
   * @see [array-element-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html)
   */
  'jsonc/array-element-newline': ArrayElementNewlineRuleConfig;
}
