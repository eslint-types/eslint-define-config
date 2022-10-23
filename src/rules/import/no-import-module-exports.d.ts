import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoImportModuleExportsOption {
  exceptions?: any[];
}

/**
 * Options.
 */
export type NoImportModuleExportsOptions = [NoImportModuleExportsOption?];

/**
 * Disallow import statements with module.exports.
 *
 */
export type NoImportModuleExportsRuleConfig =
  RuleConfig<NoImportModuleExportsOptions>;

/**
 * Disallow import statements with module.exports.
 *
 */
export interface NoImportModuleExportsRule {
  /**
   * Disallow import statements with module.exports.
   *
   */
  'import/no-import-module-exports': NoImportModuleExportsRuleConfig;
}
