import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface WrapIifeConfig {
  functionPrototypeMethods?: boolean;
}

/**
 * Option.
 */
export type WrapIifeOption = 'outside' | 'inside' | 'any';

/**
 * Options.
 */
export type WrapIifeOptions = [WrapIifeOption?, WrapIifeConfig?];

/**
 * Require parentheses around immediate `function` invocations.
 *
 * @see [wrap-iife](https://eslint.org/docs/latest/rules/wrap-iife)
 */
export type WrapIifeRuleConfig = RuleConfig<WrapIifeOptions>;

/**
 * Require parentheses around immediate `function` invocations.
 *
 * @see [wrap-iife](https://eslint.org/docs/latest/rules/wrap-iife)
 */
export interface WrapIifeRule {
  /**
   * Require parentheses around immediate `function` invocations.
   *
   * @see [wrap-iife](https://eslint.org/docs/latest/rules/wrap-iife)
   */
  'wrap-iife': WrapIifeRuleConfig;
}
