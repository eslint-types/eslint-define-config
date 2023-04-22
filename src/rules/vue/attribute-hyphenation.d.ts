import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface AttributeHyphenationConfig {
  ignore?: string[];
}

/**
 * Option.
 */
export type AttributeHyphenationOption = 'always' | 'never';

/**
 * Options.
 */
export type AttributeHyphenationOptions = [
  AttributeHyphenationOption?,
  AttributeHyphenationConfig?,
];

/**
 * Enforce attribute naming style on custom components in template.
 *
 * @see [attribute-hyphenation](https://eslint.vuejs.org/rules/attribute-hyphenation.html)
 */
export type AttributeHyphenationRuleConfig =
  RuleConfig<AttributeHyphenationOptions>;

/**
 * Enforce attribute naming style on custom components in template.
 *
 * @see [attribute-hyphenation](https://eslint.vuejs.org/rules/attribute-hyphenation.html)
 */
export interface AttributeHyphenationRule {
  /**
   * Enforce attribute naming style on custom components in template.
   *
   * @see [attribute-hyphenation](https://eslint.vuejs.org/rules/attribute-hyphenation.html)
   */
  'vue/attribute-hyphenation': AttributeHyphenationRuleConfig;
}
