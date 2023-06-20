import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoParamReassignOption =
  | {
      props?: false;
    }
  | {
      props?: true;
      ignorePropertyModificationsFor?: string[];
      ignorePropertyModificationsForRegex?: string[];
    };

/**
 * Options.
 */
export type NoParamReassignOptions = [NoParamReassignOption?];

/**
 * Disallow reassigning `function` parameters.
 *
 * @see [no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign)
 */
export type NoParamReassignRuleConfig = RuleConfig<NoParamReassignOptions>;

/**
 * Disallow reassigning `function` parameters.
 *
 * @see [no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign)
 */
export interface NoParamReassignRule {
  /**
   * Disallow reassigning `function` parameters.
   *
   * @see [no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign)
   */
  'no-param-reassign': NoParamReassignRuleConfig;
}
