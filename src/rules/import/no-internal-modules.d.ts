import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoInternalModulesOption =
  | {
      allow?: string[];
    }
  | {
      forbid?: string[];
    };

/**
 * Options.
 */
export type NoInternalModulesOptions = [NoInternalModulesOption?];

/**
 *
 * @see [no-internal-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-internal-modules.md)
 */
export type NoInternalModulesRuleConfig = RuleConfig<NoInternalModulesOptions>;

/**
 *
 * @see [no-internal-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-internal-modules.md)
 */
export interface NoInternalModulesRule {
  /**
   *
   * @see [no-internal-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-internal-modules.md)
   */
  'import/no-internal-modules': NoInternalModulesRuleConfig;
}
