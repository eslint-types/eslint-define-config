export type Schema0 =
  | (
      | string
      | {
          name: string;
          message?: string;
        }
    )[]
  | {
      paths?: (
        | string
        | {
            name: string;
            message?: string;
          }
      )[];
      patterns?: string[];
    }[];

export type NoRestrictedModulesRuleOptions = Schema0;
