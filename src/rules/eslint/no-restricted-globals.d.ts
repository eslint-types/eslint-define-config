/**
 * @minItems 0
 */
export type Schema0 = (
  | string
  | {
      name: string;
      message?: string;
    }
)[];

export type NoRestrictedGlobalsRuleOptions = Schema0;
