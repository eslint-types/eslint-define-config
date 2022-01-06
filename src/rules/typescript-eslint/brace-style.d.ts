import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface BraceStyleConfig {
  allowSingleLine?: boolean;
}

/**
 * Option.
 */
export type BraceStyleOption = '1tbs' | 'stroustrup' | 'allman';

/**
 * Options.
 */
export type BraceStyleOptions = [BraceStyleOption?, BraceStyleConfig?];

/**
 * Enforce consistent brace style for blocks.
 *
 * @see [brace-style](https://typescript-eslint.io/rules/brace-style)
 */
export type BraceStyleRuleConfig = RuleConfig<BraceStyleOptions>;

/**
 * Enforce consistent brace style for blocks.
 *
 * @see [brace-style](https://typescript-eslint.io/rules/brace-style)
 */
export interface BraceStyleRule {
  /**
   * Enforce consistent brace style for blocks.
   *
   * @see [brace-style](https://typescript-eslint.io/rules/brace-style)
   */
  '@typescript-eslint/brace-style': BraceStyleRuleConfig;
}
