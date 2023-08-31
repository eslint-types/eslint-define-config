import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Option.
 */
export type IdDenylistOption = string[];

/**
 * Options.
 */
export type IdDenylistOptions = IdDenylistOption;

/**
 * Disallow specified identifiers.
 *
 * @see [id-denylist](https://eslint.org/docs/latest/rules/id-denylist)
 */
export type IdDenylistRuleConfig = RuleConfig<IdDenylistOptions>;

/**
 * Disallow specified identifiers.
 *
 * @see [id-denylist](https://eslint.org/docs/latest/rules/id-denylist)
 */
export interface IdDenylistRule {
  /**
   * Disallow specified identifiers.
   *
   * @see [id-denylist](https://eslint.org/docs/latest/rules/id-denylist)
   */
  'id-denylist': IdDenylistRuleConfig;
}
