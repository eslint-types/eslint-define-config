import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 0
 */
export type NoRestrictedComponentOptionsOption = (
  | string
  | string[]
  | {
      name: string | string[];
      message?: string;
    }
)[];

/**
 * Options.
 */
export type NoRestrictedComponentOptionsOptions =
  NoRestrictedComponentOptionsOption;

/**
 * Disallow specific component option.
 *
 * @see [no-restricted-component-options](https://eslint.vuejs.org/rules/no-restricted-component-options.html)
 */
export type NoRestrictedComponentOptionsRuleConfig =
  RuleConfig<NoRestrictedComponentOptionsOptions>;

/**
 * Disallow specific component option.
 *
 * @see [no-restricted-component-options](https://eslint.vuejs.org/rules/no-restricted-component-options.html)
 */
export interface NoRestrictedComponentOptionsRule {
  /**
   * Disallow specific component option.
   *
   * @see [no-restricted-component-options](https://eslint.vuejs.org/rules/no-restricted-component-options.html)
   */
  'vue/no-restricted-component-options': NoRestrictedComponentOptionsRuleConfig;
}
