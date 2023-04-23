import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type PreferEs6ClassOption = 'always' | 'never';

/**
 * Options.
 */
export type PreferEs6ClassOptions = [PreferEs6ClassOption?];

/**
 * Enforce ES5 or ES6 class for React Components.
 *
 * @see [prefer-es6-class](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md)
 */
export type PreferEs6ClassRuleConfig = RuleConfig<PreferEs6ClassOptions>;

/**
 * Enforce ES5 or ES6 class for React Components.
 *
 * @see [prefer-es6-class](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md)
 */
export interface PreferEs6ClassRule {
  /**
   * Enforce ES5 or ES6 class for React Components.
   *
   * @see [prefer-es6-class](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md)
   */
  'react/prefer-es6-class': PreferEs6ClassRuleConfig;
}
