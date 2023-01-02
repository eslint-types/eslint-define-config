import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [prefer-await-to-then](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md)
 */
export type PreferAwaitToThenRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [prefer-await-to-then](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md)
 */
export interface PreferAwaitToThenRule {
  /**
   *
   * @see [prefer-await-to-then](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md)
   */
  'promise/prefer-await-to-then': PreferAwaitToThenRuleConfig;
}
