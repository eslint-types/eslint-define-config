import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireExampleOption {
  checkConstructors?: boolean;
  checkGetters?: boolean;
  checkSetters?: boolean;
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  enableFixer?: boolean;
  exemptedBy?: string[];
  exemptNoArguments?: boolean;
}

/**
 * Options.
 */
export type RequireExampleOptions = [RequireExampleOption?];

/**
 * Requires that all functions have examples.
 *
 * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md#repos-sticky-header)
 */
export type RequireExampleRuleConfig = RuleConfig<RequireExampleOptions>;

/**
 * Requires that all functions have examples.
 *
 * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md#repos-sticky-header)
 */
export interface RequireExampleRule {
  /**
   * Requires that all functions have examples.
   *
   * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md#repos-sticky-header)
   */
  'jsdoc/require-example': RequireExampleRuleConfig;
}
