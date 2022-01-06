import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface UnboundMethodOption {
  ignoreStatic?: boolean;
}

/**
 * Options.
 */
export type UnboundMethodOptions = [UnboundMethodOption?];

/**
 * Enforces unbound methods are called with their expected scope.
 *
 * @see [unbound-method](https://typescript-eslint.io/rules/unbound-method)
 */
export type UnboundMethodRuleConfig = RuleConfig<UnboundMethodOptions>;

/**
 * Enforces unbound methods are called with their expected scope.
 *
 * @see [unbound-method](https://typescript-eslint.io/rules/unbound-method)
 */
export interface UnboundMethodRule {
  /**
   * Enforces unbound methods are called with their expected scope.
   *
   * @see [unbound-method](https://typescript-eslint.io/rules/unbound-method)
   */
  '@typescript-eslint/unbound-method': UnboundMethodRuleConfig;
}
