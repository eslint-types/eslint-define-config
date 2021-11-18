import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedImportsOption =
  | (
      | any
      | {
          allowTypeImports?: boolean;
          [k: string]: any;
        }
    )[]
  | {
      paths?: (
        | any
        | {
            allowTypeImports?: boolean;
            [k: string]: any;
          }
      )[];
      patterns?:
        | any
        | {
            allowTypeImports?: boolean;
            [k: string]: any;
          }[];
      [k: string]: any;
    }[];

/**
 * Options.
 */
export type NoRestrictedImportsOptions = NoRestrictedImportsOption;

/**
 * Disallow specified modules when loaded by `import`.
 *
 * @see [no-restricted-imports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-restricted-imports.md)
 */
export type NoRestrictedImportsRuleConfig = RuleConfig<NoRestrictedImportsOptions>;

/**
 * Disallow specified modules when loaded by `import`.
 *
 * @see [no-restricted-imports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-restricted-imports.md)
 */
export interface NoRestrictedImportsRule {
  /**
   * Disallow specified modules when loaded by `import`.
   *
   * @see [no-restricted-imports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-restricted-imports.md)
   */
  '@typescript-eslint/no-restricted-imports': NoRestrictedImportsRuleConfig;
}
