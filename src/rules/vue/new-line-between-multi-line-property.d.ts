import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NewLineBetweenMultiLinePropertyOption = {
  /**
   * @see [new-line-between-multi-line-property](https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html)
   */
  minLineOfMultilineProperty?: any;
};

/**
 * Options.
 */
export type NewLineBetweenMultiLinePropertyOptions = [NewLineBetweenMultiLinePropertyOption?];

/**
 * enforce new lines between multi-line properties in Vue components
 *
 * @see [new-line-between-multi-line-property](https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html)
 */
export type NewLineBetweenMultiLinePropertyRuleConfig = RuleConfig<NewLineBetweenMultiLinePropertyOptions>;

/**
 * enforce new lines between multi-line properties in Vue components
 *
 * @see [new-line-between-multi-line-property](https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html)
 */
export interface NewLineBetweenMultiLinePropertyRule {
  /**
   * enforce new lines between multi-line properties in Vue components
   *
   * @see [new-line-between-multi-line-property](https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html)
   */
  'vue/new-line-between-multi-line-property': NewLineBetweenMultiLinePropertyRuleConfig;
}
