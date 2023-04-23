import type { RuleConfig } from '../rule-config';

/**
 * Disallow usage of Array index in keys.
 *
 * @see [no-array-index-key](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md)
 */
export type NoArrayIndexKeyRuleConfig = RuleConfig<[]>;

/**
 * Disallow usage of Array index in keys.
 *
 * @see [no-array-index-key](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md)
 */
export interface NoArrayIndexKeyRule {
  /**
   * Disallow usage of Array index in keys.
   *
   * @see [no-array-index-key](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md)
   */
  'react/no-array-index-key': NoArrayIndexKeyRuleConfig;
}
