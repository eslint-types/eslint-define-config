export type Schema0 =
  | ('before' | 'after' | 'both' | 'neither')
  | {
      before?: boolean;
      after?: boolean;
    };

export type YieldStarSpacingRuleOptions = [Schema0?];
