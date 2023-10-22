export type Schema0 =
  | ('always' | 'never' | 'consecutive')
  | {
      separateRequires?: boolean;
      var?: 'always' | 'never' | 'consecutive';
      let?: 'always' | 'never' | 'consecutive';
      const?: 'always' | 'never' | 'consecutive';
    }
  | {
      initialized?: 'always' | 'never' | 'consecutive';
      uninitialized?: 'always' | 'never' | 'consecutive';
    };

export type OneVarRuleOptions = [Schema0?];
