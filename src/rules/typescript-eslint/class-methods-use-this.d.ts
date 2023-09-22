import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ClassMethodsUseThisOption {
  /**
   * Allows specified method names to be ignored with this rule
   */
  exceptMethods?: string[];
  /**
   * Enforces that functions used as instance field initializers utilize `this`
   */
  enforceForClassFields?: boolean;
  /**
   * Ingore members marked with the `override` modifier
   */
  ignoreOverrideMethods?: boolean;
  /**
   * Ignore classes that specifically implement some interface
   */
  ignoreClassesThatImplementAnInterface?: boolean;
}

/**
 * Options.
 */
export type ClassMethodsUseThisOptions = [ClassMethodsUseThisOption?];

/**
 * Enforce that class methods utilize `this`.
 *
 * @see [class-methods-use-this](https://typescript-eslint.io/rules/class-methods-use-this)
 */
export type ClassMethodsUseThisRuleConfig =
  RuleConfig<ClassMethodsUseThisOptions>;

/**
 * Enforce that class methods utilize `this`.
 *
 * @see [class-methods-use-this](https://typescript-eslint.io/rules/class-methods-use-this)
 */
export interface ClassMethodsUseThisRule {
  /**
   * Enforce that class methods utilize `this`.
   *
   * @see [class-methods-use-this](https://typescript-eslint.io/rules/class-methods-use-this)
   */
  '@typescript-eslint/class-methods-use-this': ClassMethodsUseThisRuleConfig;
}
