import type { RuleConfig } from '../rule-config';

/**
 * Disallow whitespace before properties.
 *
 * @see [no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property)
 */
export type NoWhitespaceBeforePropertyRuleConfig = RuleConfig<[]>;

/**
 * Disallow whitespace before properties.
 *
 * @see [no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property)
 */
export interface NoWhitespaceBeforePropertyRule {
  /**
   * Disallow whitespace before properties.
   *
   * @see [no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property)
   */
  'no-whitespace-before-property': NoWhitespaceBeforePropertyRuleConfig;
}
