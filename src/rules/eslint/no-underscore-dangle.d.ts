import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnderscoreDangleOption {
  allow?: string[];
  allowAfterThis?: boolean;
  allowAfterSuper?: boolean;
  allowAfterThisConstructor?: boolean;
  enforceInMethodNames?: boolean;
  allowFunctionParams?: boolean;
  enforceInClassFields?: boolean;
  allowInArrayDestructuring?: boolean;
  allowInObjectDestructuring?: boolean;
}

/**
 * Options.
 */
export type NoUnderscoreDangleOptions = [NoUnderscoreDangleOption?];

/**
 * Disallow dangling underscores in identifiers.
 *
 * @see [no-underscore-dangle](https://eslint.org/docs/latest/rules/no-underscore-dangle)
 */
export type NoUnderscoreDangleRuleConfig =
  RuleConfig<NoUnderscoreDangleOptions>;

/**
 * Disallow dangling underscores in identifiers.
 *
 * @see [no-underscore-dangle](https://eslint.org/docs/latest/rules/no-underscore-dangle)
 */
export interface NoUnderscoreDangleRule {
  /**
   * Disallow dangling underscores in identifiers.
   *
   * @see [no-underscore-dangle](https://eslint.org/docs/latest/rules/no-underscore-dangle)
   */
  'no-underscore-dangle': NoUnderscoreDangleRuleConfig;
}
