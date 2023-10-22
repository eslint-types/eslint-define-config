export type Schema0 =
  | ('all' | 'local')
  | {
      vars?: 'all' | 'local';
      varsIgnorePattern?: string;
      args?: 'all' | 'after-used' | 'none';
      ignoreRestSiblings?: boolean;
      argsIgnorePattern?: string;
      caughtErrors?: 'all' | 'none';
      caughtErrorsIgnorePattern?: string;
      destructuredArrayIgnorePattern?: string;
    };

export type NoUnusedVarsRuleOptions = [Schema0?];
