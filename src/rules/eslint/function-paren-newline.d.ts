export type Schema0 =
  | ('always' | 'never' | 'consistent' | 'multiline' | 'multiline-arguments')
  | {
      minItems?: number;
    };

export type FunctionParenNewlineRuleOptions = [Schema0?];
