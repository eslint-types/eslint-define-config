import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMultiSpacesOption {
  exceptions?: {
    /**
     */
    [k: string]: boolean;
  };
  ignoreEOLComments?: boolean;
}

/**
 * Options.
 */
export type NoMultiSpacesOptions = [NoMultiSpacesOption?];

/**
 * Disallow multiple spaces.
 *
 * @see [no-multi-spaces](https://eslint.org/docs/latest/rules/no-multi-spaces)
 */
export type NoMultiSpacesRuleConfig = RuleConfig<NoMultiSpacesOptions>;

/**
 * Disallow multiple spaces.
 *
 * @see [no-multi-spaces](https://eslint.org/docs/latest/rules/no-multi-spaces)
 */
export interface NoMultiSpacesRule {
  /**
   * Disallow multiple spaces.
   *
   * @see [no-multi-spaces](https://eslint.org/docs/latest/rules/no-multi-spaces)
   */
  'no-multi-spaces': NoMultiSpacesRuleConfig;
}
