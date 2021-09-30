import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type DotNotationOption = {
  /**
   * @see [dot-notation](https://eslint.vuejs.org/rules/dot-notation.html)
   */
  allowKeywords?: boolean;

  /**
   * @see [dot-notation](https://eslint.vuejs.org/rules/dot-notation.html)
   */
  allowPattern?: string;
};

/**
 * Options.
 */
export type DotNotationOptions = [DotNotationOption?];

/**
 * Enforce dot notation whenever possible
 *
 * @see [dot-notation](https://eslint.vuejs.org/rules/dot-notation.html)
 */
export type DotNotationRuleConfig = RuleConfig<DotNotationOptions>;

/**
 * Enforce dot notation whenever possible
 *
 * @see [dot-notation](https://eslint.vuejs.org/rules/dot-notation.html)
 */
export interface DotNotationRule {
  /**
   * Enforce dot notation whenever possible
   *
   * @see [dot-notation](https://eslint.vuejs.org/rules/dot-notation.html)
   */
  'vue/dot-notation': DotNotationRuleConfig;
}
