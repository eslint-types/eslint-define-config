export type Schema0 =
  | {
      props?: false;
    }
  | {
      props?: true;
      ignorePropertyModificationsFor?: string[];
      ignorePropertyModificationsForRegex?: string[];
    };

export type NoParamReassignRuleOptions = [Schema0?];
