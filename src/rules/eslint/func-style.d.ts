import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface FuncStyleConfig {
  allowArrowFunctions?: boolean;
}

/**
 * Option.
 */
export type FuncStyleOption = 'declaration' | 'expression';

/**
 * Options.
 */
export type FuncStyleOptions = [FuncStyleOption?, FuncStyleConfig?];

/**
 * Enforce the consistent use of either `function` declarations or expressions.
 *
 * @see [func-style](https://eslint.org/docs/latest/rules/func-style)
 */
export type FuncStyleRuleConfig = RuleConfig<FuncStyleOptions>;

/**
 * Enforce the consistent use of either `function` declarations or expressions.
 *
 * @see [func-style](https://eslint.org/docs/latest/rules/func-style)
 */
export interface FuncStyleRule {
  /**
   * Enforce the consistent use of either `function` declarations or expressions.
   *
   * @see [func-style](https://eslint.org/docs/latest/rules/func-style)
   */
  'func-style': FuncStyleRuleConfig;
}
