import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoCommonjsOption =
  | []
  | ['allow-primitive-modules']
  | []
  | [
      {
        allowPrimitiveModules?: boolean;
        allowRequire?: boolean;
        allowConditionalRequire?: boolean;
      },
    ];

/**
 * Options.
 */
export type NoCommonjsOptions = NoCommonjsOption;

/**
 *
 * @see [no-commonjs](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-commonjs.md)
 */
export type NoCommonjsRuleConfig = RuleConfig<NoCommonjsOptions>;

/**
 *
 * @see [no-commonjs](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-commonjs.md)
 */
export interface NoCommonjsRule {
  /**
   *
   * @see [no-commonjs](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-commonjs.md)
   */
  'import/no-commonjs': NoCommonjsRuleConfig;
}
