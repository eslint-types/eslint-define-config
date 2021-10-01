import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoImplicitAnyCatchOption {
  allowExplicitAny?: boolean;
}

/**
 * Options.
 */
export type NoImplicitAnyCatchOptions = [NoImplicitAnyCatchOption?];

/**
 * Disallow usage of the implicit `any` type in catch clauses.
 *
 * @see [no-implicit-any-catch](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md)
 */
export type NoImplicitAnyCatchRuleConfig = RuleConfig<NoImplicitAnyCatchOptions>;

/**
 * Disallow usage of the implicit `any` type in catch clauses.
 *
 * @see [no-implicit-any-catch](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md)
 */
export interface NoImplicitAnyCatchRule {
  /**
   * Disallow usage of the implicit `any` type in catch clauses.
   *
   * @see [no-implicit-any-catch](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md)
   */
  '@typescript-eslint/no-implicit-any-catch': NoImplicitAnyCatchRuleConfig;
}
