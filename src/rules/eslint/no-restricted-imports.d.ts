export type Schema0 =
  | (
      | string
      | {
          name: string;
          message?: string;
          importNames?: string[];
        }
    )[]
  | []
  | [
      {
        paths?: (
          | string
          | {
              name: string;
              message?: string;
              importNames?: string[];
            }
        )[];
        patterns?:
          | string[]
          | {
              /**
               * @minItems 1
               */
              importNames?: [string, ...string[]];
              /**
               * @minItems 1
               */
              group: [string, ...string[]];
              importNamePattern?: string;
              message?: string;
              caseSensitive?: boolean;
            }[];
      },
    ];

export type NoRestrictedImportsRuleOptions = Schema0;
