export type Schema0 =
  | ('always' | 'never' | 'consistent')
  | {
      multiline?: boolean;
      minItems?: number | null;
    };

export type ArrayBracketNewlineRuleOptions = [Schema0?];
