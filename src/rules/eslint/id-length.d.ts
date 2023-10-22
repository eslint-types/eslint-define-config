export interface Schema0 {
  min?: number;
  max?: number;
  exceptions?: string[];
  exceptionPatterns?: string[];
  properties?: 'always' | 'never';
}

export type IdLengthRuleOptions = [Schema0?];
