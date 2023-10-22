export type Schema0 = 'single' | 'double' | 'backtick';

export type Schema1 =
  | 'avoid-escape'
  | {
      avoidEscape?: boolean;
      allowTemplateLiterals?: boolean;
    };

export type QuotesRuleOptions = [Schema0?, Schema1?];
