export type Schema0 = 'always' | 'never';

export interface Schema1 {
  singleValue?: boolean;
  objectsInArrays?: boolean;
  arraysInArrays?: boolean;
}

export type ArrayBracketSpacingRuleOptions = [Schema0?, Schema1?];
