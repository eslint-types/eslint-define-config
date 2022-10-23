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
      target?: string;
      from?: string;
      except?: string[];
      message?: string;
    },
    ...{
      target?: string;
      from?: string;
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
 *
 * @see [no-restricted-paths](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-restricted-paths.md)
 */
export type NoRestrictedPathsRuleConfig = RuleConfig<NoRestrictedPathsOptions>;

/**
 *
 * @see [no-restricted-paths](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-restricted-paths.md)
 */
export interface NoRestrictedPathsRule {
  /**
   *
   * @see [no-restricted-paths](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-restricted-paths.md)
   */
  'import/no-restricted-paths': NoRestrictedPathsRuleConfig;
}
