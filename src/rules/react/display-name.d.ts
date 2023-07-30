import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface DisplayNameOption {
  ignoreTranspilerName?: boolean;
  checkContextObjects?: boolean;
}

/**
 * Options.
 */
export type DisplayNameOptions = [DisplayNameOption?];

/**
 * Disallow missing displayName in a React component definition.
 *
 * @see [display-name](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/display-name.md)
 */
export type DisplayNameRuleConfig = RuleConfig<DisplayNameOptions>;

/**
 * Disallow missing displayName in a React component definition.
 *
 * @see [display-name](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/display-name.md)
 */
export interface DisplayNameRule {
  /**
   * Disallow missing displayName in a React component definition.
   *
   * @see [display-name](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/display-name.md)
   */
  'react/display-name': DisplayNameRuleConfig;
}
