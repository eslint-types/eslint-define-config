export type Schema0 =
  | 'nofunc'
  | {
      functions?: boolean;
      classes?: boolean;
      variables?: boolean;
      allowNamedExports?: boolean;
    };

export type NoUseBeforeDefineRuleOptions = [Schema0?];
