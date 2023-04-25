import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortCompOption {
  order?: string[];
  groups?: {
    /**
     */
    [k: string]: string[];
  };
}

/**
 * Options.
 */
export type SortCompOptions = [SortCompOption?];

/**
 * Enforce component methods order.
 *
 * @see [sort-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-comp.md)
 */
export type SortCompRuleConfig = RuleConfig<SortCompOptions>;

/**
 * Enforce component methods order.
 *
 * @see [sort-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-comp.md)
 */
export interface SortCompRule {
  /**
   * Enforce component methods order.
   *
   * @see [sort-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-comp.md)
   */
  'react/sort-comp': SortCompRuleConfig;
}
