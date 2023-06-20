import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 0
 */
export type NoRestrictedComponentNamesOption = (
  | string
  | {
      name: string;
      message?: string;
      suggest?: string;
    }
)[];

/**
 * Options.
 */
export type NoRestrictedComponentNamesOptions =
  NoRestrictedComponentNamesOption;

/**
 * Disallow specific component names.
 *
 * @see [no-restricted-component-names](https://eslint.vuejs.org/rules/no-restricted-component-names.html)
 */
export type NoRestrictedComponentNamesRuleConfig =
  RuleConfig<NoRestrictedComponentNamesOptions>;

/**
 * Disallow specific component names.
 *
 * @see [no-restricted-component-names](https://eslint.vuejs.org/rules/no-restricted-component-names.html)
 */
export interface NoRestrictedComponentNamesRule {
  /**
   * Disallow specific component names.
   *
   * @see [no-restricted-component-names](https://eslint.vuejs.org/rules/no-restricted-component-names.html)
   */
  'vue/no-restricted-component-names': NoRestrictedComponentNamesRuleConfig;
}
