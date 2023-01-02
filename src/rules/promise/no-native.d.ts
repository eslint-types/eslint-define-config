import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [no-native](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-native.md)
 */
export type NoNativeRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [no-native](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-native.md)
 */
export interface NoNativeRule {
  /**
   *
   * @see [no-native](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-native.md)
   */
  'promise/no-native': NoNativeRuleConfig;
}
