import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MethodSignatureStyleOption = 'property' | 'method';

/**
 * Options.
 */
export type MethodSignatureStyleOptions = [MethodSignatureStyleOption?];

/**
 * Enforces using a particular method signature syntax.
 *
 * @see [method-signature-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/method-signature-style.md)
 */
export type MethodSignatureStyleRuleConfig = RuleConfig<MethodSignatureStyleOptions>;

/**
 * Enforces using a particular method signature syntax.
 *
 * @see [method-signature-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/method-signature-style.md)
 */
export interface MethodSignatureStyleRule {
  /**
   * Enforces using a particular method signature syntax.
   *
   * @see [method-signature-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/method-signature-style.md)
   */
  '@typescript-eslint/method-signature-style': MethodSignatureStyleRuleConfig;
}
