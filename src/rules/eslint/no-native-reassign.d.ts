import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoNativeReassignOption {
  exceptions?: string[];
}

/**
 * Options.
 */
export type NoNativeReassignOptions = [NoNativeReassignOption?];

/**
 * Disallow assignments to native objects or read-only global variables.
 *
 * @deprecated
 *
 * @see [no-native-reassign](https://eslint.org/docs/latest/rules/no-native-reassign)
 */
export type NoNativeReassignRuleConfig = RuleConfig<NoNativeReassignOptions>;

/**
 * Disallow assignments to native objects or read-only global variables.
 *
 * @deprecated
 *
 * @see [no-native-reassign](https://eslint.org/docs/latest/rules/no-native-reassign)
 */
export interface NoNativeReassignRule {
  /**
   * Disallow assignments to native objects or read-only global variables.
   *
   * @deprecated
   *
   * @see [no-native-reassign](https://eslint.org/docs/latest/rules/no-native-reassign)
   */
  'no-native-reassign': NoNativeReassignRuleConfig;
}
