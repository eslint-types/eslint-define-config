export type Schema0 = (
  | []
  | ['always']
  | [
      'always',
      {
        enforceForIfStatements?: boolean;
      },
    ]
  | ['never']
) &
  unknown[];

export type LogicalAssignmentOperatorsRuleOptions = Schema0;
