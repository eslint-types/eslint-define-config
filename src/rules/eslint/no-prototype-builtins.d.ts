import type { RuleConfig } from '../rule-config';

/**
 * Disallow calling some `Object.prototype` methods directly on objects.
 *
 * @see [no-prototype-builtins](https://eslint.org/docs/latest/rules/no-prototype-builtins)
 */
export type NoPrototypeBuiltinsRuleConfig = RuleConfig<[]>;

/**
 * Disallow calling some `Object.prototype` methods directly on objects.
 *
 * @see [no-prototype-builtins](https://eslint.org/docs/latest/rules/no-prototype-builtins)
 */
export interface NoPrototypeBuiltinsRule {
  /**
   * Disallow calling some `Object.prototype` methods directly on objects.
   *
   * @see [no-prototype-builtins](https://eslint.org/docs/latest/rules/no-prototype-builtins)
   */
  'no-prototype-builtins': NoPrototypeBuiltinsRuleConfig;
}
