import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoCollapsibleIfOption = 'sonar-runtime';

/**
 * Options.
 */
export type NoCollapsibleIfOptions = [NoCollapsibleIfOption?];

/**
 * Collapsible "if" statements should be merged.
 *
 * @see [no-collapsible-if](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collapsible-if.md)
 */
export type NoCollapsibleIfRuleConfig = RuleConfig<NoCollapsibleIfOptions>;

/**
 * Collapsible "if" statements should be merged.
 *
 * @see [no-collapsible-if](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collapsible-if.md)
 */
export interface NoCollapsibleIfRule {
  /**
   * Collapsible "if" statements should be merged.
   *
   * @see [no-collapsible-if](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collapsible-if.md)
   */
  'sonarjs/no-collapsible-if': NoCollapsibleIfRuleConfig;
}
