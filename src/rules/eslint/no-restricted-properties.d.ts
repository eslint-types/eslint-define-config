import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedPropertiesOption = (
  | {
      object: string;
      property?: string;
      message?: string;
    }
  | {
      object?: string;
      property: string;
      message?: string;
    }
)[];

/**
 * Options.
 */
export type NoRestrictedPropertiesOptions = NoRestrictedPropertiesOption;

/**
 * Disallow certain properties on certain objects.
 *
 * @see [no-restricted-properties](https://eslint.org/docs/latest/rules/no-restricted-properties)
 */
export type NoRestrictedPropertiesRuleConfig =
  RuleConfig<NoRestrictedPropertiesOptions>;

/**
 * Disallow certain properties on certain objects.
 *
 * @see [no-restricted-properties](https://eslint.org/docs/latest/rules/no-restricted-properties)
 */
export interface NoRestrictedPropertiesRule {
  /**
   * Disallow certain properties on certain objects.
   *
   * @see [no-restricted-properties](https://eslint.org/docs/latest/rules/no-restricted-properties)
   */
  'no-restricted-properties': NoRestrictedPropertiesRuleConfig;
}
