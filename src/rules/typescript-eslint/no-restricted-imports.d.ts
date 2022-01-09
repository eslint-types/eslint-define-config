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
