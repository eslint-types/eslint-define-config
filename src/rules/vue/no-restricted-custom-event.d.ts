import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 0
 */
export type NoRestrictedCustomEventOption = (
  | string
  | {
      event: string;
      message?: string;
      suggest?: string;
    }
)[];

/**
 * Options.
 */
export type NoRestrictedCustomEventOptions = NoRestrictedCustomEventOption;

/**
 * Disallow specific custom event.
 *
 * @see [no-restricted-custom-event](https://eslint.vuejs.org/rules/no-restricted-custom-event.html)
 */
export type NoRestrictedCustomEventRuleConfig =
  RuleConfig<NoRestrictedCustomEventOptions>;

/**
 * Disallow specific custom event.
 *
 * @see [no-restricted-custom-event](https://eslint.vuejs.org/rules/no-restricted-custom-event.html)
 */
export interface NoRestrictedCustomEventRule {
  /**
   * Disallow specific custom event.
   *
   * @see [no-restricted-custom-event](https://eslint.vuejs.org/rules/no-restricted-custom-event.html)
   */
  'vue/no-restricted-custom-event': NoRestrictedCustomEventRuleConfig;
}
