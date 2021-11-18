import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoInvalidVoidTypeOption {
  allowInGenericTypeArguments?: boolean | string[];
  allowAsThisParameter?: boolean;
}

/**
 * Options.
 */
export type NoInvalidVoidTypeOptions = [NoInvalidVoidTypeOption?];

/**
 * Disallows usage of `void` type outside of generic or return types.
 *
 * @see [no-invalid-void-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-invalid-void-type.md)
 */
export type NoInvalidVoidTypeRuleConfig = RuleConfig<NoInvalidVoidTypeOptions>;

/**
 * Disallows usage of `void` type outside of generic or return types.
 *
 * @see [no-invalid-void-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-invalid-void-type.md)
 */
export interface NoInvalidVoidTypeRule {
  /**
   * Disallows usage of `void` type outside of generic or return types.
   *
   * @see [no-invalid-void-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-invalid-void-type.md)
   */
  '@typescript-eslint/no-invalid-void-type': NoInvalidVoidTypeRuleConfig;
}
