export interface Schema0 {
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

export type SortImportsRuleOptions = [Schema0?];
