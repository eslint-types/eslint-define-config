import type { RuleConfig } from '../rule-config';

/**
 * Disallow specified identifiers.
 *
 * @see [id-denylist](https://eslint.org/docs/rules/id-denylist)
 */
export type IdDenylistRuleConfig = RuleConfig<string[]>;

/**
 * Disallow specified identifiers.
 *
 * @see [id-denylist](https://eslint.org/docs/rules/id-denylist)
 */
export interface IdDenylistRule {
  /**
   * Disallow specified identifiers.
   *
   * @see [id-denylist](https://eslint.org/docs/rules/id-denylist)
   */
  'id-denylist': IdDenylistRuleConfig;
  /**
   * @deprecated Use `id-denylist` instead.
   */
  'id-blacklist'?: IdDenylistRuleConfig;
}
