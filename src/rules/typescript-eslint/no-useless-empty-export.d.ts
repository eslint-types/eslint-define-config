import type { RuleConfig } from '../rule-config';

/**
 * Disallow empty exports that don't change anything in a module file.
 *
 * @see [no-useless-empty-export](https://typescript-eslint.io/rules/no-useless-empty-export)
 */
export type NoUselessEmptyExportRuleConfig = RuleConfig<[]>;

/**
 * Disallow empty exports that don't change anything in a module file.
 *
 * @see [no-useless-empty-export](https://typescript-eslint.io/rules/no-useless-empty-export)
 */
export interface NoUselessEmptyExportRule {
  /**
   * Disallow empty exports that don't change anything in a module file.
   *
   * @see [no-useless-empty-export](https://typescript-eslint.io/rules/no-useless-empty-export)
   */
  '@typescript-eslint/no-useless-empty-export': NoUselessEmptyExportRuleConfig;
}
