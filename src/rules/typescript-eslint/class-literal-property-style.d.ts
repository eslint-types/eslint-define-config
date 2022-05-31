import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ClassLiteralPropertyStyleOption = 'fields' | 'getters';

/**
 * Options.
 */
export type ClassLiteralPropertyStyleOptions = [
  ClassLiteralPropertyStyleOption?,
];

/**
 * Enforce that literals on classes are exposed in a consistent style.
 *
 * @see [class-literal-property-style](https://typescript-eslint.io/rules/class-literal-property-style)
 */
export type ClassLiteralPropertyStyleRuleConfig =
  RuleConfig<ClassLiteralPropertyStyleOptions>;

/**
 * Enforce that literals on classes are exposed in a consistent style.
 *
 * @see [class-literal-property-style](https://typescript-eslint.io/rules/class-literal-property-style)
 */
export interface ClassLiteralPropertyStyleRule {
  /**
   * Enforce that literals on classes are exposed in a consistent style.
   *
   * @see [class-literal-property-style](https://typescript-eslint.io/rules/class-literal-property-style)
   */
  '@typescript-eslint/class-literal-property-style': ClassLiteralPropertyStyleRuleConfig;
}
