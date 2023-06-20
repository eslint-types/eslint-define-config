import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CamelcaseOption {
  ignoreDestructuring?: boolean;
  ignoreImports?: boolean;
  ignoreGlobals?: boolean;
  properties?: 'always' | 'never';
  /**
   * @minItems 0
   */
  allow?: [] | [string];
}

/**
 * Options.
 */
export type CamelcaseOptions = [CamelcaseOption?];

/**
 * Enforce camelcase naming convention.
 *
 * @see [camelcase](https://eslint.org/docs/latest/rules/camelcase)
 */
export type CamelcaseRuleConfig = RuleConfig<CamelcaseOptions>;

/**
 * Enforce camelcase naming convention.
 *
 * @see [camelcase](https://eslint.org/docs/latest/rules/camelcase)
 */
export interface CamelcaseRule {
  /**
   * Enforce camelcase naming convention.
   *
   * @see [camelcase](https://eslint.org/docs/latest/rules/camelcase)
   */
  camelcase: CamelcaseRuleConfig;
}
