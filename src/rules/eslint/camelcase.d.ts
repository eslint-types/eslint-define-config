export interface Schema0 {
  ignoreDestructuring?: boolean;
  ignoreImports?: boolean;
  ignoreGlobals?: boolean;
  properties?: 'always' | 'never';
  /**
   * @minItems 0
   */
  allow?: [] | [string];
}

export type CamelcaseRuleOptions = [Schema0?];
