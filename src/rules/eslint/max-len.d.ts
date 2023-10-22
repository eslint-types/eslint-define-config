export type Schema0 =
  | {
      code?: number;
      comments?: number;
      tabWidth?: number;
      ignorePattern?: string;
      ignoreComments?: boolean;
      ignoreStrings?: boolean;
      ignoreUrls?: boolean;
      ignoreTemplateLiterals?: boolean;
      ignoreRegExpLiterals?: boolean;
      ignoreTrailingComments?: boolean;
    }
  | number;

export type Schema1 =
  | {
      code?: number;
      comments?: number;
      tabWidth?: number;
      ignorePattern?: string;
      ignoreComments?: boolean;
      ignoreStrings?: boolean;
      ignoreUrls?: boolean;
      ignoreTemplateLiterals?: boolean;
      ignoreRegExpLiterals?: boolean;
      ignoreTrailingComments?: boolean;
    }
  | number;

export interface Schema2 {
  code?: number;
  comments?: number;
  tabWidth?: number;
  ignorePattern?: string;
  ignoreComments?: boolean;
  ignoreStrings?: boolean;
  ignoreUrls?: boolean;
  ignoreTemplateLiterals?: boolean;
  ignoreRegExpLiterals?: boolean;
  ignoreTrailingComments?: boolean;
}

export type MaxLenRuleOptions = [Schema0?, Schema1?, Schema2?];
