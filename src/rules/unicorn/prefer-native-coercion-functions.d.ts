import type { RuleConfig } from '../rule-config';

/**
 * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
 *
 * @see [prefer-native-coercion-functions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-native-coercion-functions.md)
 */
export type PreferNativeCoercionFunctionsRuleConfig = RuleConfig<[]>;

/**
 * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
 *
 * @see [prefer-native-coercion-functions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-native-coercion-functions.md)
 */
export interface PreferNativeCoercionFunctionsRule {
  /**
   * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
   *
   * @see [prefer-native-coercion-functions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-native-coercion-functions.md)
   */
  'unicorn/prefer-native-coercion-functions': PreferNativeCoercionFunctionsRuleConfig;
}
