import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface TypedefOption {
  /**
   * Whether to enforce type annotations on variables declared using array destructuring.
   *
   * @default false
   *
   * @see [arrayDestructuring](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md#arraydestructuring)
   */
  arrayDestructuring?: boolean;
  /**
   * Whether to enforce type annotations for parameters of arrow functions.
   *
   * @default false
   *
   * @see [arrowParameter](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md#arrowparameter)
   */
  arrowParameter?: boolean;
  /**
   * Whether to enforce type annotations on member variables of classes.
   *
   * @default false
   *
   * @see [memberVariableDeclaration](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md#membervariabledeclaration)
   */
  memberVariableDeclaration?: boolean;
  /**
   * Whether to enforce type annotations on variables declared using object destructuring.
   *
   * @default false
   *
   * @see [objectDestructuring](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md#objectdestructuring)
   */
  objectDestructuring?: boolean;
  /**
   * Whether to enforce type annotations for parameters of functions and methods.
   *
   * @default false
   *
   * @see [parameter](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md#parameter)
   */
  parameter?: boolean;
  /**
   * Whether to enforce type annotations for properties of interfaces and types.
   *
   * @default false
   *
   * @see [propertyDeclaration](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md#propertydeclaration)
   */
  propertyDeclaration?: boolean;
  /**
   * Whether to enforce type annotations for variable declarations, excluding array and object destructuring.
   *
   * @default false
   *
   * @see [variableDeclaration](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md#variabledeclaration)
   */
  variableDeclaration?: boolean;
  /**
   * Ignore variable declarations for non-arrow and arrow functions.
   *
   * @default false
   *
   * @see [variableDeclarationIgnoreFunction](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md#variabledeclarationignorefunction)
   */
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
 * @see [typedef](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/typedef.md)
 */
export type TypedefRuleConfig = RuleConfig<TypedefOptions>;

/**
 * Requires type annotations to exist.
 *
 * @see [typedef](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/typedef.md)
 */
export interface TypedefRule {
  /**
   * Requires type annotations to exist.
   *
   * @see [typedef](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/typedef.md)
   */
  '@typescript-eslint/typedef': TypedefRuleConfig;
}
