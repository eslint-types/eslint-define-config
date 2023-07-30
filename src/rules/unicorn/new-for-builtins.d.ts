import type { RuleConfig } from '../rule-config';

/**
 * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
 *
 * @see [new-for-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/new-for-builtins.md)
 */
export type NewForBuiltinsRuleConfig = RuleConfig<[]>;

/**
 * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
 *
 * @see [new-for-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/new-for-builtins.md)
 */
export interface NewForBuiltinsRule {
  /**
   * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
   *
   * @see [new-for-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/new-for-builtins.md)
   */
  'unicorn/new-for-builtins': NewForBuiltinsRuleConfig;
}
