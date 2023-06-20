import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUselessRenameOption {
  ignoreDestructuring?: boolean;
  ignoreImport?: boolean;
  ignoreExport?: boolean;
}

/**
 * Options.
 */
export type NoUselessRenameOptions = [NoUselessRenameOption?];

/**
 * Disallow renaming import, export, and destructured assignments to the same name.
 *
 * @see [no-useless-rename](https://eslint.org/docs/latest/rules/no-useless-rename)
 */
export type NoUselessRenameRuleConfig = RuleConfig<NoUselessRenameOptions>;

/**
 * Disallow renaming import, export, and destructured assignments to the same name.
 *
 * @see [no-useless-rename](https://eslint.org/docs/latest/rules/no-useless-rename)
 */
export interface NoUselessRenameRule {
  /**
   * Disallow renaming import, export, and destructured assignments to the same name.
   *
   * @see [no-useless-rename](https://eslint.org/docs/latest/rules/no-useless-rename)
   */
  'no-useless-rename': NoUselessRenameRuleConfig;
}
