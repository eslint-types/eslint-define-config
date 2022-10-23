import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoAnonymousDefaultExportOption {
  /**
   * If `false`, will report default export of an array
   */
  allowArray?: boolean;
  /**
   * If `false`, will report default export of an arrow function
   */
  allowArrowFunction?: boolean;
  /**
   * If `false`, will report default export of a function call
   */
  allowCallExpression?: boolean;
  /**
   * If `false`, will report default export of an anonymous class
   */
  allowAnonymousClass?: boolean;
  /**
   * If `false`, will report default export of an anonymous function
   */
  allowAnonymousFunction?: boolean;
  /**
   * If `false`, will report default export of a literal
   */
  allowLiteral?: boolean;
  /**
   * If `false`, will report default export of an object expression
   */
  allowObject?: boolean;
}

/**
 * Options.
 */
export type NoAnonymousDefaultExportOptions = [NoAnonymousDefaultExportOption?];

/**
 *
 * @see [no-anonymous-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-anonymous-default-export.md)
 */
export type NoAnonymousDefaultExportRuleConfig =
  RuleConfig<NoAnonymousDefaultExportOptions>;

/**
 *
 * @see [no-anonymous-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-anonymous-default-export.md)
 */
export interface NoAnonymousDefaultExportRule {
  /**
   *
   * @see [no-anonymous-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-anonymous-default-export.md)
   */
  'import/no-anonymous-default-export': NoAnonymousDefaultExportRuleConfig;
}
