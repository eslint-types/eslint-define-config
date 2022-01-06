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
  [k: string]: any;
}

/**
 * Options.
 */
export type TypedefOptions = [TypedefOption?];

/**
 * Requires type annotations to exist.
 *
 * @see [typedef](https://typescript-eslint.io/rules/typedef)
 */
export type TypedefRuleConfig = RuleConfig<TypedefOptions>;

/**
 * Requires type annotations to exist.
 *
 * @see [typedef](https://typescript-eslint.io/rules/typedef)
 */
export interface TypedefRule {
  /**
   * Requires type annotations to exist.
   *
   * @see [typedef](https://typescript-eslint.io/rules/typedef)
   */
  '@typescript-eslint/typedef': TypedefRuleConfig;
}
