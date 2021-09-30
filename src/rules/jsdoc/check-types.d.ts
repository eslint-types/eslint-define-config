import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CheckTypesOption = {
  /**
   * @see [check-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types)
   */
  exemptTagContexts?: any;

  /**
   * @see [check-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types)
   */
  noDefaults?: any;

  /**
   * @see [check-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types)
   */
  unifyParentAndChildTypeChecks?: any;
};

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
