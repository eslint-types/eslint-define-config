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
 * @see [unbound-method](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/unbound-method.md)
 */
export type UnboundMethodRuleConfig = RuleConfig<UnboundMethodOptions>;

/**
 * Enforces unbound methods are called with their expected scope.
 *
 * @see [unbound-method](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/unbound-method.md)
 */
export interface UnboundMethodRule {
  /**
   * Enforces unbound methods are called with their expected scope.
   *
   * @see [unbound-method](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/unbound-method.md)
   */
  '@typescript-eslint/unbound-method': UnboundMethodRuleConfig;
}
