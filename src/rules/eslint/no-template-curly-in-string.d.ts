import type { RuleConfig } from '../rule-config';

/**
 * Disallow template literal placeholder syntax in regular strings.
 *
 * @see [no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string)
 */
export type NoTemplateCurlyInStringRuleConfig = RuleConfig<[]>;

/**
 * Disallow template literal placeholder syntax in regular strings.
 *
 * @see [no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string)
 */
export interface NoTemplateCurlyInStringRule {
  /**
   * Disallow template literal placeholder syntax in regular strings.
   *
   * @see [no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string)
   */
  'no-template-curly-in-string': NoTemplateCurlyInStringRuleConfig;
}
