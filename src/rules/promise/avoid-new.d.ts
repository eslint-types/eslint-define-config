import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [avoid-new](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/avoid-new.md)
 */
export type AvoidNewRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [avoid-new](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/avoid-new.md)
 */
export interface AvoidNewRule {
  /**
   *
   * @see [avoid-new](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/avoid-new.md)
   */
  'promise/avoid-new': AvoidNewRuleConfig;
}
