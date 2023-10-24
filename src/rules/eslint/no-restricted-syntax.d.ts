/**
 * @minItems 0
 */
export type Schema0 = (
  | string
  | {
      selector: string;
      message?: string;
    }
)[];

export type NoRestrictedSyntaxRuleOptions = Schema0;
