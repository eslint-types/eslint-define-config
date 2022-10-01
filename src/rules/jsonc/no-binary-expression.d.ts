import type { RuleConfig } from '../rule-config';

/**
 * Disallow binary expression.
 *
 * @see [no-binary-expression](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-expression.html)
 */
export type NoBinaryExpressionRuleConfig = RuleConfig<[]>;

/**
 * Disallow binary expression.
 *
 * @see [no-binary-expression](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-expression.html)
 */
export interface NoBinaryExpressionRule {
  /**
   * Disallow binary expression.
   *
   * @see [no-binary-expression](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-expression.html)
   */
  'jsonc/no-binary-expression': NoBinaryExpressionRuleConfig;
}
