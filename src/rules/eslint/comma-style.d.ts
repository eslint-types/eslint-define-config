import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface CommaStyleConfig {
  exceptions?: {
    [k: string]: boolean;
  };
}

/**
 * Option.
 */
export type CommaStyleOption = 'first' | 'last';

/**
 * Options.
 */
export type CommaStyleOptions = [CommaStyleOption?, CommaStyleConfig?];

/**
 * Enforce consistent comma style.
 *
 * @see [comma-style](https://eslint.org/docs/latest/rules/comma-style)
 */
export type CommaStyleRuleConfig = RuleConfig<CommaStyleOptions>;

/**
 * Enforce consistent comma style.
 *
 * @see [comma-style](https://eslint.org/docs/latest/rules/comma-style)
 */
export interface CommaStyleRule {
  /**
   * Enforce consistent comma style.
   *
   * @see [comma-style](https://eslint.org/docs/latest/rules/comma-style)
   */
  'comma-style': CommaStyleRuleConfig;
}
