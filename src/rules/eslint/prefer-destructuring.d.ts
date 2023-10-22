export type Schema0 =
  | {
      VariableDeclarator?: {
        array?: boolean;
        object?: boolean;
      };
      AssignmentExpression?: {
        array?: boolean;
        object?: boolean;
      };
    }
  | {
      array?: boolean;
      object?: boolean;
    };

export interface Schema1 {
  enforceForRenamedProperties?: boolean;
}

export type PreferDestructuringRuleOptions = [Schema0?, Schema1?];
