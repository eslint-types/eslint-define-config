import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedImportOption = (
  | string
  | {
      name: string | string[];
      message?: string;
    }
)[];

/**
 * Options.
 */
export type NoRestrictedImportOptions = [NoRestrictedImportOption?];

/**
 * Disallow specified modules when loaded by `import` declarations.
 *
 * @see [no-restricted-import](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-restricted-import.md)
 */
export type NoRestrictedImportRuleConfig =
  RuleConfig<NoRestrictedImportOptions>;

/**
 * Disallow specified modules when loaded by `import` declarations.
 *
 * @see [no-restricted-import](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-restricted-import.md)
 */
export interface NoRestrictedImportRule {
  /**
   * Disallow specified modules when loaded by `import` declarations.
   *
   * @see [no-restricted-import](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-restricted-import.md)
   */
  'n/no-restricted-import': NoRestrictedImportRuleConfig;
}
