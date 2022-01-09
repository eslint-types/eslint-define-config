import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NewLineBetweenMultiLinePropertyOption {
  minLineOfMultilineProperty?: number;
}

/**
 * Options.
 */
export type NewLineBetweenMultiLinePropertyOptions = [
  NewLineBetweenMultiLinePropertyOption?,
];

/**
 * Enforce new lines between multi-line properties in Vue components.
 *
 * @see [new-line-between-multi-line-property](https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html)
 */
export type NewLineBetweenMultiLinePropertyRuleConfig =
  RuleConfig<NewLineBetweenMultiLinePropertyOptions>;

/**
 * Enforce new lines between multi-line properties in Vue components.
 *
 * @see [new-line-between-multi-line-property](https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html)
 */
export interface NewLineBetweenMultiLinePropertyRule {
  /**
   * Enforce new lines between multi-line properties in Vue components.
   *
   * @see [new-line-between-multi-line-property](https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html)
   */
  'vue/new-line-between-multi-line-property': NewLineBetweenMultiLinePropertyRuleConfig;
}
