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
 * @see [brace-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/brace-style.md)
 */
export type BraceStyleRuleConfig = RuleConfig<BraceStyleOptions>;

/**
 * Enforce consistent brace style for blocks.
 *
 * @see [brace-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/brace-style.md)
 */
export interface BraceStyleRule {
  /**
   * Enforce consistent brace style for blocks.
   *
   * @see [brace-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/brace-style.md)
   */
  '@typescript-eslint/brace-style': BraceStyleRuleConfig;
}
