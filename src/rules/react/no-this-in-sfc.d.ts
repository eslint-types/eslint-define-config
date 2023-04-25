import type { RuleConfig } from '../rule-config';

/**
 * Disallow `this` from being used in stateless functional components.
 *
 * @see [no-this-in-sfc](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md)
 */
export type NoThisInSfcRuleConfig = RuleConfig<[]>;

/**
 * Disallow `this` from being used in stateless functional components.
 *
 * @see [no-this-in-sfc](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md)
 */
export interface NoThisInSfcRule {
  /**
   * Disallow `this` from being used in stateless functional components.
   *
   * @see [no-this-in-sfc](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md)
   */
  'react/no-this-in-sfc': NoThisInSfcRuleConfig;
}
