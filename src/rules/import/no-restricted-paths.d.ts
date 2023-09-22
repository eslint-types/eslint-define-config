import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRestrictedPathsOption {
  /**
   * @minItems 1
   */
  zones?: [
    {
      target?: string | string[];
      from?: string | string[];
      except?: string[];
      message?: string;
    },
    ...{
      target?: string | string[];
      from?: string | string[];
      except?: string[];
      message?: string;
    }[],
  ];
  basePath?: string;
}

/**
 * Options.
 */
export type NoRestrictedPathsOptions = [NoRestrictedPathsOption?];

/**
 * Enforce which files can be imported in a given folder.
 *
 * @see [no-restricted-paths](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-restricted-paths.md)
 */
export type NoRestrictedPathsRuleConfig = RuleConfig<NoRestrictedPathsOptions>;

/**
 * Enforce which files can be imported in a given folder.
 *
 * @see [no-restricted-paths](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-restricted-paths.md)
 */
export interface NoRestrictedPathsRule {
  /**
   * Enforce which files can be imported in a given folder.
   *
   * @see [no-restricted-paths](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-restricted-paths.md)
   */
  'import/no-restricted-paths': NoRestrictedPathsRuleConfig;
}
