import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ClassLiteralPropertyStyleOption = 'fields' | 'getters';

/**
 * Options.
 */
export type ClassLiteralPropertyStyleOptions = [ClassLiteralPropertyStyleOption?];

/**
 * Ensures that literals on classes are exposed in a consistent style.
 *
 * @see [class-literal-property-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/class-literal-property-style.md)
 */
export type ClassLiteralPropertyStyleRuleConfig = RuleConfig<ClassLiteralPropertyStyleOptions>;

/**
 * Ensures that literals on classes are exposed in a consistent style.
 *
 * @see [class-literal-property-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/class-literal-property-style.md)
 */
export interface ClassLiteralPropertyStyleRule {
  /**
   * Ensures that literals on classes are exposed in a consistent style.
   *
   * @see [class-literal-property-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/class-literal-property-style.md)
   */
  '@typescript-eslint/class-literal-property-style': ClassLiteralPropertyStyleRuleConfig;
}
