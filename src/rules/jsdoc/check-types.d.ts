import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CheckTypesOption {
  exemptTagContexts?: {
    tag?: string;
    types?: boolean | string[];
  }[];
  noDefaults?: boolean;
  unifyParentAndChildTypeChecks?: boolean;
}

/**
 * Options.
 */
export type CheckTypesOptions = [CheckTypesOption?];

/**
 * Reports invalid types.
 *
 * @see [check-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types)
 */
export type CheckTypesRuleConfig = RuleConfig<CheckTypesOptions>;

/**
 * Reports invalid types.
 *
 * @see [check-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types)
 */
export interface CheckTypesRule {
  /**
   * Reports invalid types.
   *
   * @see [check-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types)
   */
  'jsdoc/check-types': CheckTypesRuleConfig;
}
