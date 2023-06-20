import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ImplementsOnClassesOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
}

/**
 * Options.
 */
export type ImplementsOnClassesOptions = [ImplementsOnClassesOption?];

/**
 * Reports an issue with any non-constructor function using `@implements`.
 *
 * @see [implements-on-classes](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md#repos-sticky-header)
 */
export type ImplementsOnClassesRuleConfig =
  RuleConfig<ImplementsOnClassesOptions>;

/**
 * Reports an issue with any non-constructor function using `@implements`.
 *
 * @see [implements-on-classes](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md#repos-sticky-header)
 */
export interface ImplementsOnClassesRule {
  /**
   * Reports an issue with any non-constructor function using `@implements`.
   *
   * @see [implements-on-classes](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md#repos-sticky-header)
   */
  'jsdoc/implements-on-classes': ImplementsOnClassesRuleConfig;
}
