import type { RuleConfig } from '../rule-config';

/**
 * Disallow `new` operators with the `Symbol` object.
 *
 * @see [no-new-symbol](https://eslint.org/docs/latest/rules/no-new-symbol)
 */
export type NoNewSymbolRuleConfig = RuleConfig<[]>;

/**
 * Disallow `new` operators with the `Symbol` object.
 *
 * @see [no-new-symbol](https://eslint.org/docs/latest/rules/no-new-symbol)
 */
export interface NoNewSymbolRule {
  /**
   * Disallow `new` operators with the `Symbol` object.
   *
   * @see [no-new-symbol](https://eslint.org/docs/latest/rules/no-new-symbol)
   */
  'no-new-symbol': NoNewSymbolRuleConfig;
}
