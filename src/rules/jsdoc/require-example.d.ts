import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireExampleOption = {
  /**
   * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example)
   */
  checkConstructors?: any;

  /**
   * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example)
   */
  checkGetters?: any;

  /**
   * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example)
   */
  checkSetters?: any;

  /**
   * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example)
   */
  contexts?: any;

  /**
   * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example)
   */
  exemptedBy?: any;

  /**
   * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example)
   */
  exemptNoArguments?: any;
};

/**
 * Options.
 */
export type RequireExampleOptions = [RequireExampleOption?];

/**
 * Requires that all functions have examples.
 *
 * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example)
 */
export type RequireExampleRuleConfig = RuleConfig<RequireExampleOptions>;

/**
 * Requires that all functions have examples.
 *
 * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example)
 */
export interface RequireExampleRule {
  /**
   * Requires that all functions have examples.
   *
   * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example)
   */
  'jsdoc/require-example': RequireExampleRuleConfig;
}
