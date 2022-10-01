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
 * @see [comma-style](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html)
 */
export type CommaStyleRuleConfig = RuleConfig<CommaStyleOptions>;

/**
 * Enforce consistent comma style.
 *
 * @see [comma-style](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html)
 */
export interface CommaStyleRule {
  /**
   * Enforce consistent comma style.
   *
   * @see [comma-style](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html)
   */
  'jsonc/comma-style': CommaStyleRuleConfig;
}
