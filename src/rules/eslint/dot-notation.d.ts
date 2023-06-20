import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface DotNotationOption {
  allowKeywords?: boolean;
  allowPattern?: string;
}

/**
 * Options.
 */
export type DotNotationOptions = [DotNotationOption?];

/**
 * Enforce dot notation whenever possible.
 *
 * @see [dot-notation](https://eslint.org/docs/latest/rules/dot-notation)
 */
export type DotNotationRuleConfig = RuleConfig<DotNotationOptions>;

/**
 * Enforce dot notation whenever possible.
 *
 * @see [dot-notation](https://eslint.org/docs/latest/rules/dot-notation)
 */
export interface DotNotationRule {
  /**
   * Enforce dot notation whenever possible.
   *
   * @see [dot-notation](https://eslint.org/docs/latest/rules/dot-notation)
   */
  'dot-notation': DotNotationRuleConfig;
}
