import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface ExportsStyleConfig {
  allowBatchAssign?: boolean;
}

/**
 * Option.
 */
export type ExportsStyleOption = 'module.exports' | 'exports';

/**
 * Options.
 */
export type ExportsStyleOptions = [ExportsStyleOption?, ExportsStyleConfig?];

/**
 * Enforce either `module.exports` or `exports`.
 *
 * @see [exports-style](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/exports-style.md)
 */
export type ExportsStyleRuleConfig = RuleConfig<ExportsStyleOptions>;

/**
 * Enforce either `module.exports` or `exports`.
 *
 * @see [exports-style](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/exports-style.md)
 */
export interface ExportsStyleRule {
  /**
   * Enforce either `module.exports` or `exports`.
   *
   * @see [exports-style](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/exports-style.md)
   */
  'n/exports-style': ExportsStyleRuleConfig;
}
