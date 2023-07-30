import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ImportStyleOption =
  | []
  | [
      {
        checkImport?: boolean;
        checkDynamicImport?: boolean;
        checkExportFrom?: boolean;
        checkRequire?: boolean;
        extendDefaultStyles?: boolean;
        styles?: ModuleStyles;
      },
    ];
export type Styles = false | BooleanObject;

export interface ModuleStyles {
  [k: string]: Styles;
}
export interface BooleanObject {
  [k: string]: boolean;
}

/**
 * Options.
 */
export type ImportStyleOptions = ImportStyleOption;

/**
 * Enforce specific import styles per module.
 *
 * @see [import-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/import-style.md)
 */
export type ImportStyleRuleConfig = RuleConfig<ImportStyleOptions>;

/**
 * Enforce specific import styles per module.
 *
 * @see [import-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/import-style.md)
 */
export interface ImportStyleRule {
  /**
   * Enforce specific import styles per module.
   *
   * @see [import-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/import-style.md)
   */
  'unicorn/import-style': ImportStyleRuleConfig;
}
