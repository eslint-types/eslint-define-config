export interface Schema0 {
  ignore?: (
    | 'WhileStatement'
    | 'DoWhileStatement'
    | 'ForStatement'
    | 'ForInStatement'
    | 'ForOfStatement'
  )[];
}

export type NoUnreachableLoopRuleOptions = [Schema0?];
