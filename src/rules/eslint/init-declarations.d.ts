export type Schema0 =
  | []
  | ['always']
  | []
  | ['never']
  | [
      'never',
      {
        ignoreForLoopInit?: boolean;
      },
    ];

export type InitDeclarationsRuleOptions = Schema0;
