import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [no-new-statics](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-new-statics.md)
 */
export type NoNewStaticsRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [no-new-statics](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-new-statics.md)
 */
export interface NoNewStaticsRule {
  /**
   *
   * @see [no-new-statics](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-new-statics.md)
   */
  'promise/no-new-statics': NoNewStaticsRuleConfig;
}
