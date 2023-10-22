export type Schema0 = 'always' | 'never';

export type Schema1 =
  | {
      ignorePattern?: string;
      ignoreInlineComments?: boolean;
      ignoreConsecutiveComments?: boolean;
    }
  | {
      line?: {
        ignorePattern?: string;
        ignoreInlineComments?: boolean;
        ignoreConsecutiveComments?: boolean;
      };
      block?: {
        ignorePattern?: string;
        ignoreInlineComments?: boolean;
        ignoreConsecutiveComments?: boolean;
      };
    };

export type CapitalizedCommentsRuleOptions = [Schema0?, Schema1?];
