import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ClassMethodsUseThisOption {
  exceptMethods?: string[];
}

/**
 * Options.
 */
export type ClassMethodsUseThisOptions = [ClassMethodsUseThisOption?];

/**
 * Enforce that class methods utilize `this`.
 *
 * @see [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)
 */
export type ClassMethodsUseThisRuleConfig = RuleConfig<ClassMethodsUseThisOptions>;

/**
 * Enforce that class methods utilize `this`.
 *
 * @see [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)
 */
export interface ClassMethodsUseThisRule {
  /**
   * Enforce that class methods utilize `this`.
   *
   * @see [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)
   */
  'class-methods-use-this': ClassMethodsUseThisRuleConfig;
}
