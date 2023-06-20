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
 * @see [check-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md#repos-sticky-header)
 */
export type CheckTypesRuleConfig = RuleConfig<CheckTypesOptions>;

/**
 * Reports invalid types.
 *
 * @see [check-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md#repos-sticky-header)
 */
export interface CheckTypesRule {
  /**
   * Reports invalid types.
   *
   * @see [check-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md#repos-sticky-header)
   */
  'jsdoc/check-types': CheckTypesRuleConfig;
}
