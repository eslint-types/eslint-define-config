import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoPotentialComponentOptionTypoOption = {
  /**
   * @see [no-potential-component-option-typo](https://eslint.vuejs.org/rules/no-potential-component-option-typo.html)
   */
  presets?: any;

  /**
   * @see [no-potential-component-option-typo](https://eslint.vuejs.org/rules/no-potential-component-option-typo.html)
   */
  custom?: any;

  /**
   * @see [no-potential-component-option-typo](https://eslint.vuejs.org/rules/no-potential-component-option-typo.html)
   */
  threshold?: any;
};

/**
 * Options.
 */
export type NoPotentialComponentOptionTypoOptions = [NoPotentialComponentOptionTypoOption?];

/**
 * Disallow a potential typo in your component property
 *
 * @see [no-potential-component-option-typo](https://eslint.vuejs.org/rules/no-potential-component-option-typo.html)
 */
export type NoPotentialComponentOptionTypoRuleConfig = RuleConfig<NoPotentialComponentOptionTypoOptions>;

/**
 * Disallow a potential typo in your component property
 *
 * @see [no-potential-component-option-typo](https://eslint.vuejs.org/rules/no-potential-component-option-typo.html)
 */
export interface NoPotentialComponentOptionTypoRule {
  /**
   * Disallow a potential typo in your component property
   *
   * @see [no-potential-component-option-typo](https://eslint.vuejs.org/rules/no-potential-component-option-typo.html)
   */
  'vue/no-potential-component-option-typo': NoPotentialComponentOptionTypoRuleConfig;
}
