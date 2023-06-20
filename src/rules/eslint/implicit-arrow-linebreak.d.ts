import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ImplicitArrowLinebreakOption = 'beside' | 'below';

/**
 * Options.
 */
export type ImplicitArrowLinebreakOptions = [ImplicitArrowLinebreakOption?];

/**
 * Enforce the location of arrow function bodies.
 *
 * @see [implicit-arrow-linebreak](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)
 */
export type ImplicitArrowLinebreakRuleConfig =
  RuleConfig<ImplicitArrowLinebreakOptions>;

/**
 * Enforce the location of arrow function bodies.
 *
 * @see [implicit-arrow-linebreak](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)
 */
export interface ImplicitArrowLinebreakRule {
  /**
   * Enforce the location of arrow function bodies.
   *
   * @see [implicit-arrow-linebreak](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)
   */
  'implicit-arrow-linebreak': ImplicitArrowLinebreakRuleConfig;
}
