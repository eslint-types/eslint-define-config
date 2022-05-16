import type { RuleConfig } from '../rule-config';

/**
 * Require the registered component name to match the imported component name.
 *
 * @see [match-component-import-name](https://eslint.vuejs.org/rules/match-component-import-name.html)
 */
export type MatchComponentImportNameRuleConfig = RuleConfig<[]>;

/**
 * Require the registered component name to match the imported component name.
 *
 * @see [match-component-import-name](https://eslint.vuejs.org/rules/match-component-import-name.html)
 */
export interface MatchComponentImportNameRule {
  /**
   * Require the registered component name to match the imported component name.
   *
   * @see [match-component-import-name](https://eslint.vuejs.org/rules/match-component-import-name.html)
   */
  'vue/match-component-import-name': MatchComponentImportNameRuleConfig;
}
