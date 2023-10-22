export type Schema0 = 'tab' | number;

export interface Schema1 {
  SwitchCase?: number;
  VariableDeclarator?:
    | number
    | {
        var?: number;
        let?: number;
        const?: number;
        [k: string]: unknown;
      };
  outerIIFEBody?: number;
  MemberExpression?: number;
  FunctionDeclaration?: {
    parameters?: number | 'first';
    body?: number;
    [k: string]: unknown;
  };
  FunctionExpression?: {
    parameters?: number | 'first';
    body?: number;
    [k: string]: unknown;
  };
  CallExpression?: {
    parameters?: number | 'first';
    [k: string]: unknown;
  };
  ArrayExpression?: number | 'first';
  ObjectExpression?: number | 'first';
}

export type IndentLegacyRuleOptions = [Schema0?, Schema1?];
