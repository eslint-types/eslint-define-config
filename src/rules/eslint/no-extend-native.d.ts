import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoExtendNativeOption {
  exceptions?: string[];
}

/**
 * Options.
 */
export type NoExtendNativeOptions = [NoExtendNativeOption?];

/**
 * Disallow extending native types.
 *
 * @see [no-extend-native](https://eslint.org/docs/latest/rules/no-extend-native)
 */
export type NoExtendNativeRuleConfig = RuleConfig<NoExtendNativeOptions>;

/**
 * Disallow extending native types.
 *
 * @see [no-extend-native](https://eslint.org/docs/latest/rules/no-extend-native)
 */
export interface NoExtendNativeRule {
  /**
   * Disallow extending native types.
   *
   * @see [no-extend-native](https://eslint.org/docs/latest/rules/no-extend-native)
   */
  'no-extend-native': NoExtendNativeRuleConfig;
}
