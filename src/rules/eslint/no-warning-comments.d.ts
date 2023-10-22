export interface Schema0 {
  terms?: string[];
  location?: 'start' | 'anywhere';
  /**
   * @minItems 1
   */
  decoration?: [string, ...string[]];
}

export type NoWarningCommentsRuleOptions = [Schema0?];
