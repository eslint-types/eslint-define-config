import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 0
 */
export type NoRestrictedPropsOption = (
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
export type NoRestrictedPropsOptions = NoRestrictedPropsOption;

/**
 * Disallow specific props.
 *
 * @see [no-restricted-props](https://eslint.vuejs.org/rules/no-restricted-props.html)
 */
export type NoRestrictedPropsRuleConfig = RuleConfig<NoRestrictedPropsOptions>;

/**
 * Disallow specific props.
 *
 * @see [no-restricted-props](https://eslint.vuejs.org/rules/no-restricted-props.html)
 */
export interface NoRestrictedPropsRule {
  /**
   * Disallow specific props.
   *
   * @see [no-restricted-props](https://eslint.vuejs.org/rules/no-restricted-props.html)
   */
  'vue/no-restricted-props': NoRestrictedPropsRuleConfig;
}
