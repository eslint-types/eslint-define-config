export type Schema0 =
  | []
  | ['always' | 'never']
  | []
  | ['as-needed']
  | [
      'as-needed',
      {
        requireReturnForObjectLiteral?: boolean;
      },
    ];

export type ArrowBodyStyleRuleOptions = Schema0;
