import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoImplicitGlobalsOption {
  lexicalBindings?: boolean;
}

/**
 * Options.
 */
export type NoImplicitGlobalsOptions = [NoImplicitGlobalsOption?];

/**
 * Disallow declarations in the global scope.
 *
 * @see [no-implicit-globals](https://eslint.org/docs/latest/rules/no-implicit-globals)
 */
export type NoImplicitGlobalsRuleConfig = RuleConfig<NoImplicitGlobalsOptions>;

/**
 * Disallow declarations in the global scope.
 *
 * @see [no-implicit-globals](https://eslint.org/docs/latest/rules/no-implicit-globals)
 */
export interface NoImplicitGlobalsRule {
  /**
   * Disallow declarations in the global scope.
   *
   * @see [no-implicit-globals](https://eslint.org/docs/latest/rules/no-implicit-globals)
   */
  'no-implicit-globals': NoImplicitGlobalsRuleConfig;
}
