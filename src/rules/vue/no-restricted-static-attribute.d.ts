import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 0
 */
export type NoRestrictedStaticAttributeOption = (
  | string
  | {
      key: string;
      value?: string | true;
      element?: string;
      message?: string;
    }
)[];

/**
 * Options.
 */
export type NoRestrictedStaticAttributeOptions =
  NoRestrictedStaticAttributeOption;

/**
 * Disallow specific attribute.
 *
 * @see [no-restricted-static-attribute](https://eslint.vuejs.org/rules/no-restricted-static-attribute.html)
 */
export type NoRestrictedStaticAttributeRuleConfig =
  RuleConfig<NoRestrictedStaticAttributeOptions>;

/**
 * Disallow specific attribute.
 *
 * @see [no-restricted-static-attribute](https://eslint.vuejs.org/rules/no-restricted-static-attribute.html)
 */
export interface NoRestrictedStaticAttributeRule {
  /**
   * Disallow specific attribute.
   *
   * @see [no-restricted-static-attribute](https://eslint.vuejs.org/rules/no-restricted-static-attribute.html)
   */
  'vue/no-restricted-static-attribute': NoRestrictedStaticAttributeRuleConfig;
}
