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
 * Forbid import statements with CommonJS module.exports.
 *
 */
export type NoImportModuleExportsRuleConfig =
  RuleConfig<NoImportModuleExportsOptions>;

/**
 * Forbid import statements with CommonJS module.exports.
 *
 */
export interface NoImportModuleExportsRule {
  /**
   * Forbid import statements with CommonJS module.exports.
   *
   */
  'import/no-import-module-exports': NoImportModuleExportsRuleConfig;
}
