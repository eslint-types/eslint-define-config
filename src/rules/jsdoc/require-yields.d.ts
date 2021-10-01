import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireYieldsOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  exemptedBy?: string[];
  forceRequireNext?: boolean;
  forceRequireYields?: boolean;
  next?: boolean;
  nextWithGeneratorTag?: boolean;
  withGeneratorTag?: boolean;
}

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
