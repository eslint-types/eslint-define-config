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
          /**
           * Disallow value imports, but allow type-only imports.
           */
          allowTypeImports?: boolean;
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
              /**
               * Disallow value imports, but allow type-only imports.
               */
              allowTypeImports?: boolean;
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
              /**
               * Disallow value imports, but allow type-only imports.
               */
              allowTypeImports?: boolean;
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
 * @see [no-restricted-imports](https://typescript-eslint.io/rules/no-restricted-imports)
 */
export type NoRestrictedImportsRuleConfig =
  RuleConfig<NoRestrictedImportsOptions>;

/**
 * Disallow specified modules when loaded by `import`.
 *
 * @see [no-restricted-imports](https://typescript-eslint.io/rules/no-restricted-imports)
 */
export interface NoRestrictedImportsRule {
  /**
   * Disallow specified modules when loaded by `import`.
   *
   * @see [no-restricted-imports](https://typescript-eslint.io/rules/no-restricted-imports)
   */
  '@typescript-eslint/no-restricted-imports': NoRestrictedImportsRuleConfig;
}
