import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type IdBlacklistOption = string[];

/**
 * Options.
 */
export type IdBlacklistOptions = IdBlacklistOption;

/**
 * Disallow specified identifiers.
 *
 * @deprecated
 *
 * @see [id-blacklist](https://eslint.org/docs/latest/rules/id-blacklist)
 */
export type IdBlacklistRuleConfig = RuleConfig<IdBlacklistOptions>;

/**
 * Disallow specified identifiers.
 *
 * @deprecated
 *
 * @see [id-blacklist](https://eslint.org/docs/latest/rules/id-blacklist)
 */
export interface IdBlacklistRule {
  /**
   * Disallow specified identifiers.
   *
   * @deprecated
   *
   * @see [id-blacklist](https://eslint.org/docs/latest/rules/id-blacklist)
   */
  'id-blacklist': IdBlacklistRuleConfig;
}
