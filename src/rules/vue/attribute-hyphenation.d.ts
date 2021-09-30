import type { RuleConfig } from '../rule-config';

/**
 * enforce attribute naming style on custom components in template
 *
 * @see [attribute-hyphenation](https://eslint.vuejs.org/rules/attribute-hyphenation.html)
 */
export type AttributeHyphenationRuleConfig = RuleConfig<[]>;

/**
 * enforce attribute naming style on custom components in template
 *
 * @see [attribute-hyphenation](https://eslint.vuejs.org/rules/attribute-hyphenation.html)
 */
export interface AttributeHyphenationRule {
  /**
   * enforce attribute naming style on custom components in template
   *
   * @see [attribute-hyphenation](https://eslint.vuejs.org/rules/attribute-hyphenation.html)
   */
  'vue/attribute-hyphenation': AttributeHyphenationRuleConfig;
}
