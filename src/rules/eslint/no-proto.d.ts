import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Disallow the use of the `__proto__` property.
 *
 * @see [no-proto](https://eslint.org/docs/latest/rules/no-proto)
 */
export type NoProtoRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of the `__proto__` property.
 *
 * @see [no-proto](https://eslint.org/docs/latest/rules/no-proto)
 */
export interface NoProtoRule {
  /**
   * Disallow the use of the `__proto__` property.
   *
   * @see [no-proto](https://eslint.org/docs/latest/rules/no-proto)
   */
  'no-proto': NoProtoRuleConfig;
}
