import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoPotentialComponentOptionTypoOption {
  /**
   * @minItems 0
   */
  presets?: ('all' | 'vue' | 'vue-router' | 'nuxt')[];
  /**
   * @minItems 0
   */
  custom?: string[];
  threshold?: number;
}

/**
 * Options.
 */
export type NoPotentialComponentOptionTypoOptions = [
  NoPotentialComponentOptionTypoOption?,
];

/**
 * Disallow a potential typo in your component property.
 *
 * @see [no-potential-component-option-typo](https://eslint.vuejs.org/rules/no-potential-component-option-typo.html)
 */
export type NoPotentialComponentOptionTypoRuleConfig =
  RuleConfig<NoPotentialComponentOptionTypoOptions>;

/**
 * Disallow a potential typo in your component property.
 *
 * @see [no-potential-component-option-typo](https://eslint.vuejs.org/rules/no-potential-component-option-typo.html)
 */
export interface NoPotentialComponentOptionTypoRule {
  /**
   * Disallow a potential typo in your component property.
   *
   * @see [no-potential-component-option-typo](https://eslint.vuejs.org/rules/no-potential-component-option-typo.html)
   */
  'vue/no-potential-component-option-typo': NoPotentialComponentOptionTypoRuleConfig;
}
