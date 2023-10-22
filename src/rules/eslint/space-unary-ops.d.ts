export interface Schema0 {
  words?: boolean;
  nonwords?: boolean;
  overrides?: {
    [k: string]: boolean;
  };
}

export type SpaceUnaryOpsRuleOptions = [Schema0?];
