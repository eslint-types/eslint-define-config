import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoInvalidVoidTypeOption {
  allowInGenericTypeArguments?: boolean | [string, ...string[]];
  allowAsThisParameter?: boolean;
}

/**
 * Options.
 */
export type NoInvalidVoidTypeOptions = [NoInvalidVoidTypeOption?];

/**
 * Disallow `void` type outside of generic or return types.
 *
 * @see [no-invalid-void-type](https://typescript-eslint.io/rules/no-invalid-void-type)
 */
export type NoInvalidVoidTypeRuleConfig = RuleConfig<NoInvalidVoidTypeOptions>;

/**
 * Disallow `void` type outside of generic or return types.
 *
 * @see [no-invalid-void-type](https://typescript-eslint.io/rules/no-invalid-void-type)
 */
export interface NoInvalidVoidTypeRule {
  /**
   * Disallow `void` type outside of generic or return types.
   *
   * @see [no-invalid-void-type](https://typescript-eslint.io/rules/no-invalid-void-type)
   */
  '@typescript-eslint/no-invalid-void-type': NoInvalidVoidTypeRuleConfig;
}
