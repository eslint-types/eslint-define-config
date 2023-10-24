export type Schema0 =
  | []
  | [Value]
  | [
      Value,
      {
        generators?: Value;
      },
    ];
export type Value = 'always' | 'as-needed' | 'never';

export type FuncNamesRuleOptions = Schema0;
