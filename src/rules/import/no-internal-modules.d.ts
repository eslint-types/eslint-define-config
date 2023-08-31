import type { RuleConfig } from '../rule-config.d.ts';

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
 * Forbid importing the submodules of other modules.
 *
 * @see [no-internal-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-internal-modules.md)
 */
export type NoInternalModulesRuleConfig = RuleConfig<NoInternalModulesOptions>;

/**
 * Forbid importing the submodules of other modules.
 *
 * @see [no-internal-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-internal-modules.md)
 */
export interface NoInternalModulesRule {
  /**
   * Forbid importing the submodules of other modules.
   *
   * @see [no-internal-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-internal-modules.md)
   */
  'import/no-internal-modules': NoInternalModulesRuleConfig;
}
