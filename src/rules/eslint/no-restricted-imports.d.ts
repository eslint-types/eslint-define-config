import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedImportsOption =
  | (
      | string
      | {
          name: string;
          message?: string;
          importNames?: string[];
        }
    )[]
  | []
  | [
      {
        paths?: (
          | string
          | {
              name: string;
              message?: string;
              importNames?: string[];
            }
        )[];
        patterns?:
          | string[]
          | {
              /**
               * @minItems 1
               */
              importNames?: [string, ...string[]];
              /**
               * @minItems 1
               */
              group: [string, ...string[]];
              message?: string;
              caseSensitive?: boolean;
            }[];
      },
    ];

/**
 * Options.
 */
export type NoRestrictedImportsOptions = NoRestrictedImportsOption;

/**
 * Disallow specified modules when loaded by `import`.
 *
 * @see [no-restricted-imports](https://eslint.org/docs/latest/rules/no-restricted-imports)
 */
export type NoRestrictedImportsRuleConfig =
  RuleConfig<NoRestrictedImportsOptions>;

/**
 * Disallow specified modules when loaded by `import`.
 *
 * @see [no-restricted-imports](https://eslint.org/docs/latest/rules/no-restricted-imports)
 */
export interface NoRestrictedImportsRule {
  /**
   * Disallow specified modules when loaded by `import`.
   *
   * @see [no-restricted-imports](https://eslint.org/docs/latest/rules/no-restricted-imports)
   */
  'no-restricted-imports': NoRestrictedImportsRuleConfig;
}
