import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireYieldsOption = {
  /**
   * @see [require-yields](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields)
   */
  contexts?: any;

  /**
   * @see [require-yields](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields)
   */
  exemptedBy?: any;

  /**
   * @see [require-yields](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields)
   */
  forceRequireNext?: any;

  /**
   * @see [require-yields](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields)
   */
  forceRequireYields?: any;

  /**
   * @see [require-yields](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields)
   */
  next?: any;

  /**
   * @see [require-yields](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields)
   */
  nextWithGeneratorTag?: any;

  /**
   * @see [require-yields](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields)
   */
  withGeneratorTag?: any;
};

/**
 * Options.
 */
export type RequireYieldsOptions = [RequireYieldsOption?];

/**
 * Requires yields are documented.
 *
 * @see [require-yields](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields)
 */
export type RequireYieldsRuleConfig = RuleConfig<RequireYieldsOptions>;

/**
 * Requires yields are documented.
 *
 * @see [require-yields](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields)
 */
export interface RequireYieldsRule {
  /**
   * Requires yields are documented.
   *
   * @see [require-yields](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields)
   */
  'jsdoc/require-yields': RequireYieldsRuleConfig;
}
