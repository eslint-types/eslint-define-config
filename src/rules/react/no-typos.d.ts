import type { RuleConfig } from '../rule-config';

/**
 * Disallow common typos.
 *
 * @see [no-typos](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-typos.md)
 */
export type NoTyposRuleConfig = RuleConfig<[]>;

/**
 * Disallow common typos.
 *
 * @see [no-typos](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-typos.md)
 */
export interface NoTyposRule {
  /**
   * Disallow common typos.
   *
   * @see [no-typos](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-typos.md)
   */
  'react/no-typos': NoTyposRuleConfig;
}
