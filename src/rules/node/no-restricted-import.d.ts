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
 * Disallow specified modules when loaded by `require`.
 *
 * @see [no-restricted-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-restricted-import.md)
 */
export type NoRestrictedImportRuleConfig =
  RuleConfig<NoRestrictedImportOptions>;

/**
 * Disallow specified modules when loaded by `require`.
 *
 * @see [no-restricted-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-restricted-import.md)
 */
export interface NoRestrictedImportRule {
  /**
   * Disallow specified modules when loaded by `require`.
   *
   * @see [no-restricted-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-restricted-import.md)
   */
  'node/no-restricted-import': NoRestrictedImportRuleConfig;
}
