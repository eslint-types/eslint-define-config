export type Schema0 =
  | ('always' | 'never')
  | {
      blocks?: 'always' | 'never';
      switches?: 'always' | 'never';
      classes?: 'always' | 'never';
    };

export interface Schema1 {
  allowSingleLineBlocks?: boolean;
}

export type PaddedBlocksRuleOptions = [Schema0?, Schema1?];
