import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortImportsOption {
  ignoreCase?: boolean;
  /**
   * @minItems 4
   * @maxItems 4
   */
  memberSyntaxSortOrder?: [
    'none' | 'all' | 'multiple' | 'single',
    'none' | 'all' | 'multiple' | 'single',
    'none' | 'all' | 'multiple' | 'single',
    'none' | 'all' | 'multiple' | 'single',
  ];
  ignoreDeclarationSort?: boolean;
  ignoreMemberSort?: boolean;
  allowSeparatedGroups?: boolean;
}

/**
 * Options.
 */
export type SortImportsOptions = [SortImportsOption?];

/**
 * Enforce sorted import declarations within modules.
 *
 * @see [sort-imports](https://eslint.org/docs/latest/rules/sort-imports)
 */
export type SortImportsRuleConfig = RuleConfig<SortImportsOptions>;

/**
 * Enforce sorted import declarations within modules.
 *
 * @see [sort-imports](https://eslint.org/docs/latest/rules/sort-imports)
 */
export interface SortImportsRule {
  /**
   * Enforce sorted import declarations within modules.
   *
   * @see [sort-imports](https://eslint.org/docs/latest/rules/sort-imports)
   */
  'sort-imports': SortImportsRuleConfig;
}
