import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface PlainScalarConfig {
  ignorePatterns?: string[];
}

/**
 * Option.
 */
export type PlainScalarOption = 'always' | 'never';

/**
 * Options.
 */
export type PlainScalarOptions = [PlainScalarOption?, PlainScalarConfig?];

/**
 * Require or disallow plain style scalar.
 *
 * @see [plain-scalar](https://ota-meshi.github.io/eslint-plugin-yml/rules/plain-scalar.html)
 */
export type PlainScalarRuleConfig = RuleConfig<PlainScalarOptions>;

/**
 * Require or disallow plain style scalar.
 *
 * @see [plain-scalar](https://ota-meshi.github.io/eslint-plugin-yml/rules/plain-scalar.html)
 */
export interface PlainScalarRule {
  /**
   * Require or disallow plain style scalar.
   *
   * @see [plain-scalar](https://ota-meshi.github.io/eslint-plugin-yml/rules/plain-scalar.html)
   */
  'yml/plain-scalar': PlainScalarRuleConfig;
}
