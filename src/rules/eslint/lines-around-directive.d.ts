export type Schema0 =
  | ('always' | 'never')
  | {
      before?: 'always' | 'never';
      after?: 'always' | 'never';
    };

export type LinesAroundDirectiveRuleOptions = [Schema0?];
