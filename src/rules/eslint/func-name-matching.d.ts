export type Schema0 =
  | []
  | ['always' | 'never']
  | [
      'always' | 'never',
      {
        considerPropertyDescriptor?: boolean;
        includeCommonJSModuleExports?: boolean;
      },
    ]
  | []
  | [
      {
        considerPropertyDescriptor?: boolean;
        includeCommonJSModuleExports?: boolean;
      },
    ];

export type FuncNameMatchingRuleOptions = Schema0;
