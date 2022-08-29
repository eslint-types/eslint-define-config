import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface UnboundMethodOption {
  /**
   * Whether to skip checking whether `static` methods are correctly bound.
   */
  ignoreStatic?: boolean;
}

/**
 * Options.
 */
export type UnboundMethodOptions = [UnboundMethodOption?];

/**
 * Enforce unbound methods are called with their expected scope.
 *
 * @see [unbound-method](https://typescript-eslint.io/rules/unbound-method)
 */
export type UnboundMethodRuleConfig = RuleConfig<UnboundMethodOptions>;

/**
 * Enforce unbound methods are called with their expected scope.
 *
 * @see [unbound-method](https://typescript-eslint.io/rules/unbound-method)
 */
export interface UnboundMethodRule {
  /**
   * Enforce unbound methods are called with their expected scope.
   *
   * @see [unbound-method](https://typescript-eslint.io/rules/unbound-method)
   */
  '@typescript-eslint/unbound-method': UnboundMethodRuleConfig;
}
