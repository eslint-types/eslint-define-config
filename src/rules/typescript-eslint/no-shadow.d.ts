import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoShadowOption {
  builtinGlobals?: boolean;
  hoist?: 'all' | 'functions' | 'never';
  allow?: string[];
  ignoreTypeValueShadow?: boolean;
  ignoreFunctionTypeParameterNameValueShadow?: boolean;
}

/**
 * Options.
 */
export type NoShadowOptions = [NoShadowOption?];

/**
 * Disallow variable declarations from shadowing variables declared in the outer scope.
 *
 * @see [no-shadow](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-shadow.md)
 */
export type NoShadowRuleConfig = RuleConfig<NoShadowOptions>;

/**
 * Disallow variable declarations from shadowing variables declared in the outer scope.
 *
 * @see [no-shadow](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-shadow.md)
 */
export interface NoShadowRule {
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope.
   *
   * @see [no-shadow](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-shadow.md)
   */
  '@typescript-eslint/no-shadow': NoShadowRuleConfig;
}
