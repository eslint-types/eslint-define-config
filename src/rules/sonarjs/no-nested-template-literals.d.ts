import type { RuleConfig } from '../rule-config';

/**
 * Template literals should not be nested.
 *
 * @see [no-nested-template-literals](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-nested-template-literals.md)
 */
export type NoNestedTemplateLiteralsRuleConfig = RuleConfig<[]>;

/**
 * Template literals should not be nested.
 *
 * @see [no-nested-template-literals](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-nested-template-literals.md)
 */
export interface NoNestedTemplateLiteralsRule {
  /**
   * Template literals should not be nested.
   *
   * @see [no-nested-template-literals](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-nested-template-literals.md)
   */
  'sonarjs/no-nested-template-literals': NoNestedTemplateLiteralsRuleConfig;
}
