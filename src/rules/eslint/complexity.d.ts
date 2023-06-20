import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ComplexityOption =
  | number
  | {
      maximum?: number;
      max?: number;
    };

/**
 * Options.
 */
export type ComplexityOptions = [ComplexityOption?];

/**
 * Enforce a maximum cyclomatic complexity allowed in a program.
 *
 * @see [complexity](https://eslint.org/docs/latest/rules/complexity)
 */
export type ComplexityRuleConfig = RuleConfig<ComplexityOptions>;

/**
 * Enforce a maximum cyclomatic complexity allowed in a program.
 *
 * @see [complexity](https://eslint.org/docs/latest/rules/complexity)
 */
export interface ComplexityRule {
  /**
   * Enforce a maximum cyclomatic complexity allowed in a program.
   *
   * @see [complexity](https://eslint.org/docs/latest/rules/complexity)
   */
  complexity: ComplexityRuleConfig;
}
