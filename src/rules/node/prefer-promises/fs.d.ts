import type { RuleConfig } from '../../rule-config';

/**
 * Enforce `require("fs").promises`.
 *
 * @see [prefer-promises/fs](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-promises/fs.md)
 */
export type PreferPromisesFsRuleConfig = RuleConfig<[]>;

/**
 * Enforce `require("fs").promises`.
 *
 * @see [prefer-promises/fs](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-promises/fs.md)
 */
export interface PreferPromisesFsRule {
  /**
   * Enforce `require("fs").promises`.
   *
   * @see [prefer-promises/fs](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-promises/fs.md)
   */
  'node/prefer-promises/fs': PreferPromisesFsRuleConfig;
}
