import type { RuleConfig } from '../rule-config';

/**
 * Disallow `new` operators with global non-constructor functions.
 *
 * @see [no-new-native-nonconstructor](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)
 */
export type NoNewNativeNonconstructorRuleConfig = RuleConfig<[]>;

/**
 * Disallow `new` operators with global non-constructor functions.
 *
 * @see [no-new-native-nonconstructor](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)
 */
export interface NoNewNativeNonconstructorRule {
  /**
   * Disallow `new` operators with global non-constructor functions.
   *
   * @see [no-new-native-nonconstructor](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)
   */
  'no-new-native-nonconstructor': NoNewNativeNonconstructorRuleConfig;
}
