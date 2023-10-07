import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface TypedefOption {
  arrayDestructuring?: boolean;
  arrowParameter?: boolean;
  memberVariableDeclaration?: boolean;
  objectDestructuring?: boolean;
  parameter?: boolean;
  propertyDeclaration?: boolean;
  variableDeclaration?: boolean;
  variableDeclarationIgnoreFunction?: boolean;
}

/**
 * Options.
 */
export type TypedefOptions = [TypedefOption?];

/**
 * Require type annotations in certain places.
 *
 * @see [typedef](https://typescript-eslint.io/rules/typedef)
 */
export type TypedefRuleConfig = RuleConfig<TypedefOptions>;

/**
 * Require type annotations in certain places.
 *
 * @see [typedef](https://typescript-eslint.io/rules/typedef)
 */
export interface TypedefRule {
  /**
   * Require type annotations in certain places.
   *
   * @see [typedef](https://typescript-eslint.io/rules/typedef)
   */
  '@typescript-eslint/typedef': TypedefRuleConfig;
}
