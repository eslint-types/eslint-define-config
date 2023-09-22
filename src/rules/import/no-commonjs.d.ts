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
 * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
 *
 * @see [no-commonjs](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-commonjs.md)
 */
export type NoCommonjsRuleConfig = RuleConfig<NoCommonjsOptions>;

/**
 * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
 *
 * @see [no-commonjs](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-commonjs.md)
 */
export interface NoCommonjsRule {
  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   *
   * @see [no-commonjs](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-commonjs.md)
   */
  'import/no-commonjs': NoCommonjsRuleConfig;
}
