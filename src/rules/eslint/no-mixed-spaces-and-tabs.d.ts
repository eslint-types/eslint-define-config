import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoMixedSpacesAndTabsOption = 'smart-tabs' | true | false;

/**
 * Options.
 */
export type NoMixedSpacesAndTabsOptions = [NoMixedSpacesAndTabsOption?];

/**
 * Disallow mixed spaces and tabs for indentation.
 *
 * @see [no-mixed-spaces-and-tabs](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs)
 */
export type NoMixedSpacesAndTabsRuleConfig =
  RuleConfig<NoMixedSpacesAndTabsOptions>;

/**
 * Disallow mixed spaces and tabs for indentation.
 *
 * @see [no-mixed-spaces-and-tabs](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs)
 */
export interface NoMixedSpacesAndTabsRule {
  /**
   * Disallow mixed spaces and tabs for indentation.
   *
   * @see [no-mixed-spaces-and-tabs](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs)
   */
  'no-mixed-spaces-and-tabs': NoMixedSpacesAndTabsRuleConfig;
}
