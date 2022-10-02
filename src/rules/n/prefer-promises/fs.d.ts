import type { RuleConfig } from '../../rule-config';

/**
 * Enforce `require("fs").promises`.
 *
 * @see [prefer-promises/fs](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-promises/fs.md)
 */
export type PreferPromisesFsRuleConfig = RuleConfig<[]>;

/**
 * Enforce `require("fs").promises`.
 *
 * @see [prefer-promises/fs](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-promises/fs.md)
 */
export interface PreferPromisesFsRule {
  /**
   * Enforce `require("fs").promises`.
   *
   * @see [prefer-promises/fs](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-promises/fs.md)
   */
  'n/prefer-promises/fs': PreferPromisesFsRuleConfig;
}
