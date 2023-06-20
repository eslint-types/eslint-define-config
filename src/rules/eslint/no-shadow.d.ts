import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoShadowOption {
  builtinGlobals?: boolean;
  hoist?: 'all' | 'functions' | 'never';
  allow?: string[];
  ignoreOnInitialization?: boolean;
}

/**
 * Options.
 */
export type NoShadowOptions = [NoShadowOption?];

/**
 * Disallow variable declarations from shadowing variables declared in the outer scope.
 *
 * @see [no-shadow](https://eslint.org/docs/latest/rules/no-shadow)
 */
export type NoShadowRuleConfig = RuleConfig<NoShadowOptions>;

/**
 * Disallow variable declarations from shadowing variables declared in the outer scope.
 *
 * @see [no-shadow](https://eslint.org/docs/latest/rules/no-shadow)
 */
export interface NoShadowRule {
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope.
   *
   * @see [no-shadow](https://eslint.org/docs/latest/rules/no-shadow)
   */
  'no-shadow': NoShadowRuleConfig;
}
