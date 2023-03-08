import type { RuleConfig } from '../rule-config';

/**
 *
 * @deprecated
 *
 * @see [prefer-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#prefer-event-key)
 */
export type PreferEventKeyRuleConfig = RuleConfig<[]>;

/**
 *
 * @deprecated
 *
 * @see [prefer-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#prefer-event-key)
 */
export interface PreferEventKeyRule {
  /**
   *
   * @deprecated
   *
   * @see [prefer-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#prefer-event-key)
   */
  'unicorn/prefer-event-key': PreferEventKeyRuleConfig;
}
