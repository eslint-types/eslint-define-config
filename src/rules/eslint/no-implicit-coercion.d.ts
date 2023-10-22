export interface Schema0 {
  boolean?: boolean;
  number?: boolean;
  string?: boolean;
  disallowTemplateShorthand?: boolean;
  allow?: ('~' | '!!' | '+' | '*')[];
}

export type NoImplicitCoercionRuleOptions = [Schema0?];
