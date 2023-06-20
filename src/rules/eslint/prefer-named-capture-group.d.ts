import type { RuleConfig } from '../rule-config';

/**
 * Enforce using named capture group in regular expression.
 *
 * @see [prefer-named-capture-group](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
 */
export type PreferNamedCaptureGroupRuleConfig = RuleConfig<[]>;

/**
 * Enforce using named capture group in regular expression.
 *
 * @see [prefer-named-capture-group](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
 */
export interface PreferNamedCaptureGroupRule {
  /**
   * Enforce using named capture group in regular expression.
   *
   * @see [prefer-named-capture-group](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
   */
  'prefer-named-capture-group': PreferNamedCaptureGroupRuleConfig;
}
