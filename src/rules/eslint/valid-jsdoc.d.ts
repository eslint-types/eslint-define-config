export interface Schema0 {
  prefer?: {
    [k: string]: string;
  };
  preferType?: {
    [k: string]: string;
  };
  requireReturn?: boolean;
  requireParamDescription?: boolean;
  requireReturnDescription?: boolean;
  matchDescription?: string;
  requireReturnType?: boolean;
  requireParamType?: boolean;
}

export type ValidJsdocRuleOptions = [Schema0?];
