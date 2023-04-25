import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface DestructuringAssignmentConfig {
  ignoreClassFields?: boolean;
  destructureInSignature?: 'always' | 'ignore';
}

/**
 * Option.
 */
export type DestructuringAssignmentOption = 'always' | 'never';

/**
 * Options.
 */
export type DestructuringAssignmentOptions = [
  DestructuringAssignmentOption?,
  DestructuringAssignmentConfig?,
];

/**
 * Enforce consistent usage of destructuring assignment of props, state, and context.
 *
 * @see [destructuring-assignment](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md)
 */
export type DestructuringAssignmentRuleConfig =
  RuleConfig<DestructuringAssignmentOptions>;

/**
 * Enforce consistent usage of destructuring assignment of props, state, and context.
 *
 * @see [destructuring-assignment](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md)
 */
export interface DestructuringAssignmentRule {
  /**
   * Enforce consistent usage of destructuring assignment of props, state, and context.
   *
   * @see [destructuring-assignment](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md)
   */
  'react/destructuring-assignment': DestructuringAssignmentRuleConfig;
}
