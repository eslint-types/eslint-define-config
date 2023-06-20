import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedModulesOption =
  | (
      | string
      | {
          name: string;
          message?: string;
        }
    )[]
  | {
      paths?: (
        | string
        | {
            name: string;
            message?: string;
          }
      )[];
      patterns?: string[];
    }[];

/**
 * Options.
 */
export type NoRestrictedModulesOptions = NoRestrictedModulesOption;

/**
 * Disallow specified modules when loaded by `require`.
 *
 * @deprecated
 *
 * @see [no-restricted-modules](https://eslint.org/docs/latest/rules/no-restricted-modules)
 */
export type NoRestrictedModulesRuleConfig =
  RuleConfig<NoRestrictedModulesOptions>;

/**
 * Disallow specified modules when loaded by `require`.
 *
 * @deprecated
 *
 * @see [no-restricted-modules](https://eslint.org/docs/latest/rules/no-restricted-modules)
 */
export interface NoRestrictedModulesRule {
  /**
   * Disallow specified modules when loaded by `require`.
   *
   * @deprecated
   *
   * @see [no-restricted-modules](https://eslint.org/docs/latest/rules/no-restricted-modules)
   */
  'no-restricted-modules': NoRestrictedModulesRuleConfig;
}
