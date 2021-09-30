import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type DotNotationOption = {
  /**
   * @see [dot-notation](https://eslint.vuejs.org/rules/dot-notation.html)
   */
  allowKeywords?: any;

  /**
   * @see [dot-notation](https://eslint.vuejs.org/rules/dot-notation.html)
   */
  allowPattern?: any;
};

/**
 * Options.
 */
export type DotNotationOptions = [DotNotationOption?];

/**
 * enforce dot notation whenever possible
 *
 * @see [dot-notation](https://eslint.vuejs.org/rules/dot-notation.html)
 */
export type DotNotationRuleConfig = RuleConfig<DotNotationOptions>;

/**
 * enforce dot notation whenever possible
 *
 * @see [dot-notation](https://eslint.vuejs.org/rules/dot-notation.html)
 */
export interface DotNotationRule {
  /**
   * enforce dot notation whenever possible
   *
   * @see [dot-notation](https://eslint.vuejs.org/rules/dot-notation.html)
   */
  'vue/dot-notation': DotNotationRuleConfig;
}
