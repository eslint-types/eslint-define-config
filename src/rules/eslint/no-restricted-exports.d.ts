export type Schema0 =
  | {
      restrictedNamedExports?: string[];
    }
  | {
      restrictedNamedExports?: string[];
      restrictDefaultExports?: {
        direct?: boolean;
        named?: boolean;
        defaultFrom?: boolean;
        namedFrom?: boolean;
        namespaceFrom?: boolean;
      };
    };

export type NoRestrictedExportsRuleOptions = [Schema0?];
