import type { RuleConfig } from '../rule-config';

/**
 * Disallow number property keys.
 *
 * @see [no-number-props](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-number-props.html)
 */
export type NoNumberPropsRuleConfig = RuleConfig<[]>;

/**
 * Disallow number property keys.
 *
 * @see [no-number-props](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-number-props.html)
 */
export interface NoNumberPropsRule {
  /**
   * Disallow number property keys.
   *
   * @see [no-number-props](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-number-props.html)
   */
  'jsonc/no-number-props': NoNumberPropsRuleConfig;
}
