import type { RuleConfig } from '../rule-config';

/**
 * Enforce import from 'vue' instead of import from '@vue/*'.
 *
 * @see [prefer-import-from-vue](https://eslint.vuejs.org/rules/prefer-import-from-vue.html)
 */
export type PreferImportFromVueRuleConfig = RuleConfig<[]>;

/**
 * Enforce import from 'vue' instead of import from '@vue/*'.
 *
 * @see [prefer-import-from-vue](https://eslint.vuejs.org/rules/prefer-import-from-vue.html)
 */
export interface PreferImportFromVueRule {
  /**
   * Enforce import from 'vue' instead of import from '@vue/*'.
   *
   * @see [prefer-import-from-vue](https://eslint.vuejs.org/rules/prefer-import-from-vue.html)
   */
  'vue/prefer-import-from-vue': PreferImportFromVueRuleConfig;
}
