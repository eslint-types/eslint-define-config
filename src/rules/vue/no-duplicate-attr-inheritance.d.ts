import type { RuleConfig } from '../rule-config';

/**
 * Enforce `inheritAttrs` to be set to `false` when using `v-bind="$attrs"`.
 *
 * @see [no-duplicate-attr-inheritance](https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html)
 */
export type NoDuplicateAttrInheritanceRuleConfig = RuleConfig<[]>;

/**
 * Enforce `inheritAttrs` to be set to `false` when using `v-bind="$attrs"`.
 *
 * @see [no-duplicate-attr-inheritance](https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html)
 */
export interface NoDuplicateAttrInheritanceRule {
  /**
   * Enforce `inheritAttrs` to be set to `false` when using `v-bind="$attrs"`.
   *
   * @see [no-duplicate-attr-inheritance](https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html)
   */
  'vue/no-duplicate-attr-inheritance': NoDuplicateAttrInheritanceRuleConfig;
}
