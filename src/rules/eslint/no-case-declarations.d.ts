import type { RuleConfig } from '../rule-config';

/**
 * Disallow lexical declarations in case clauses.
 *
 * @see [no-case-declarations](https://eslint.org/docs/latest/rules/no-case-declarations)
 */
export type NoCaseDeclarationsRuleConfig = RuleConfig<[]>;

/**
 * Disallow lexical declarations in case clauses.
 *
 * @see [no-case-declarations](https://eslint.org/docs/latest/rules/no-case-declarations)
 */
export interface NoCaseDeclarationsRule {
  /**
   * Disallow lexical declarations in case clauses.
   *
   * @see [no-case-declarations](https://eslint.org/docs/latest/rules/no-case-declarations)
   */
  'no-case-declarations': NoCaseDeclarationsRuleConfig;
}
