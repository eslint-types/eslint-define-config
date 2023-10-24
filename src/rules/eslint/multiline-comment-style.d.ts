export type Schema0 =
  | []
  | ['starred-block' | 'bare-block']
  | []
  | ['separate-lines']
  | [
      'separate-lines',
      {
        checkJSDoc?: boolean;
      },
    ];

export type MultilineCommentStyleRuleOptions = Schema0;
