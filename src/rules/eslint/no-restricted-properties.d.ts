export type Schema0 = (
  | {
      object: string;
      property?: string;
      message?: string;
    }
  | {
      object?: string;
      property: string;
      message?: string;
    }
)[];

export type NoRestrictedPropertiesRuleOptions = Schema0;
