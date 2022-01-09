import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CustomEventNameCasingOption =
  | []
  | ['kebab-case' | 'camelCase']
  | [
      'kebab-case' | 'camelCase',
      {
        ignores?: string[];
      },
    ]
  | []
  | [
      {
        ignores?: string[];
      },
    ];

/**
 * Options.
 */
export type CustomEventNameCasingOptions = CustomEventNameCasingOption;

/**
 * Enforce specific casing for custom event name.
 *
 * @see [custom-event-name-casing](https://eslint.vuejs.org/rules/custom-event-name-casing.html)
 */
export type CustomEventNameCasingRuleConfig =
  RuleConfig<CustomEventNameCasingOptions>;

/**
 * Enforce specific casing for custom event name.
 *
 * @see [custom-event-name-casing](https://eslint.vuejs.org/rules/custom-event-name-casing.html)
 */
export interface CustomEventNameCasingRule {
  /**
   * Enforce specific casing for custom event name.
   *
   * @see [custom-event-name-casing](https://eslint.vuejs.org/rules/custom-event-name-casing.html)
   */
  'vue/custom-event-name-casing': CustomEventNameCasingRuleConfig;
}
