import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMissingImportOption {
  allowModules?: string[];
  tryExtensions?: string[];
  resolvePaths?: string[];
}

/**
 * Options.
 */
export type NoMissingImportOptions = [NoMissingImportOption?];

/**
 * Disallow `import` declarations which import non-existence modules.
 *
 * @see [no-missing-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-import.md)
 */
export type NoMissingImportRuleConfig = RuleConfig<NoMissingImportOptions>;

/**
 * Disallow `import` declarations which import non-existence modules.
 *
 * @see [no-missing-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-import.md)
 */
export interface NoMissingImportRule {
  /**
   * Disallow `import` declarations which import non-existence modules.
   *
   * @see [no-missing-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-import.md)
   */
  'node/no-missing-import': NoMissingImportRuleConfig;
}
