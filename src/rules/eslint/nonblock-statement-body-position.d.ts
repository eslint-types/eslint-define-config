export type Schema0 = 'beside' | 'below' | 'any';

export interface Schema1 {
  overrides?: {
    if?: 'beside' | 'below' | 'any';
    else?: 'beside' | 'below' | 'any';
    while?: 'beside' | 'below' | 'any';
    do?: 'beside' | 'below' | 'any';
    for?: 'beside' | 'below' | 'any';
  };
}

export type NonblockStatementBodyPositionRuleOptions = [Schema0?, Schema1?];
