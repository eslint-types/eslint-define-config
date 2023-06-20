import type { RuleConfig } from '../rule-config';

/**
 * Disallow assigning to imported bindings.
 *
 * @see [no-import-assign](https://eslint.org/docs/latest/rules/no-import-assign)
 */
export type NoImportAssignRuleConfig = RuleConfig<[]>;

/**
 * Disallow assigning to imported bindings.
 *
 * @see [no-import-assign](https://eslint.org/docs/latest/rules/no-import-assign)
 */
export interface NoImportAssignRule {
  /**
   * Disallow assigning to imported bindings.
   *
   * @see [no-import-assign](https://eslint.org/docs/latest/rules/no-import-assign)
   */
  'no-import-assign': NoImportAssignRuleConfig;
}
