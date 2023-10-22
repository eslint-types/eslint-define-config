export type Schema0 = 'always' | 'never';

export interface Schema1 {
  exceptRange?: boolean;
  onlyEquality?: boolean;
}

export type YodaRuleOptions = [Schema0?, Schema1?];
