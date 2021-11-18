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
 * @see [typedef](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/typedef.md)
 */
export type TypedefRuleConfig = RuleConfig<TypedefOptions>;

/**
 * Requires type annotations to exist.
 *
 * @see [typedef](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/typedef.md)
 */
export interface TypedefRule {
  /**
   * Requires type annotations to exist.
   *
   * @see [typedef](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/typedef.md)
   */
  '@typescript-eslint/typedef': TypedefRuleConfig;
}
