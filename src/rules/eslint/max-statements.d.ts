export type Schema0 =
  | number
  | {
      maximum?: number;
      max?: number;
    };

export interface Schema1 {
  ignoreTopLevelFunctions?: boolean;
}

export type MaxStatementsRuleOptions = [Schema0?, Schema1?];
