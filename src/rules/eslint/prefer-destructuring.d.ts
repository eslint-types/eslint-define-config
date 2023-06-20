import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface PreferDestructuringConfig {
  enforceForRenamedProperties?: boolean;
}

/**
 * Option.
 */
export type PreferDestructuringOption =
  | {
      VariableDeclarator?: {
        array?: boolean;
        object?: boolean;
      };
      AssignmentExpression?: {
        array?: boolean;
        object?: boolean;
      };
    }
  | {
      array?: boolean;
      object?: boolean;
    };

/**
 * Options.
 */
export type PreferDestructuringOptions = [
  PreferDestructuringOption?,
  PreferDestructuringConfig?,
];

/**
 * Require destructuring from arrays and/or objects.
 *
 * @see [prefer-destructuring](https://eslint.org/docs/latest/rules/prefer-destructuring)
 */
export type PreferDestructuringRuleConfig =
  RuleConfig<PreferDestructuringOptions>;

/**
 * Require destructuring from arrays and/or objects.
 *
 * @see [prefer-destructuring](https://eslint.org/docs/latest/rules/prefer-destructuring)
 */
export interface PreferDestructuringRule {
  /**
   * Require destructuring from arrays and/or objects.
   *
   * @see [prefer-destructuring](https://eslint.org/docs/latest/rules/prefer-destructuring)
   */
  'prefer-destructuring': PreferDestructuringRuleConfig;
}
