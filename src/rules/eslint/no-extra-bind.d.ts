import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary calls to `.bind()`.
 *
 * @see [no-extra-bind](https://eslint.org/docs/latest/rules/no-extra-bind)
 */
export type NoExtraBindRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary calls to `.bind()`.
 *
 * @see [no-extra-bind](https://eslint.org/docs/latest/rules/no-extra-bind)
 */
export interface NoExtraBindRule {
  /**
   * Disallow unnecessary calls to `.bind()`.
   *
   * @see [no-extra-bind](https://eslint.org/docs/latest/rules/no-extra-bind)
   */
  'no-extra-bind': NoExtraBindRuleConfig;
}
