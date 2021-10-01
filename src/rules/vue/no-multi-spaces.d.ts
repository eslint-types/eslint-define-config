import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMultiSpacesOption {
  ignoreProperties?: boolean;
}

/**
 * Options.
 */
export type NoMultiSpacesOptions = [NoMultiSpacesOption?];

/**
 * Disallow multiple spaces.
 *
 * @see [no-multi-spaces](https://eslint.vuejs.org/rules/no-multi-spaces.html)
 */
export type NoMultiSpacesRuleConfig = RuleConfig<NoMultiSpacesOptions>;

/**
 * Disallow multiple spaces.
 *
 * @see [no-multi-spaces](https://eslint.vuejs.org/rules/no-multi-spaces.html)
 */
export interface NoMultiSpacesRule {
  /**
   * Disallow multiple spaces.
   *
   * @see [no-multi-spaces](https://eslint.vuejs.org/rules/no-multi-spaces.html)
   */
  'vue/no-multi-spaces': NoMultiSpacesRuleConfig;
}
