import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type DotLocationOption = 'object' | 'property';

/**
 * Options.
 */
export type DotLocationOptions = [DotLocationOption?];

/**
 * Enforce consistent newlines before and after dots.
 *
 * @see [dot-location](https://eslint.org/docs/latest/rules/dot-location)
 */
export type DotLocationRuleConfig = RuleConfig<DotLocationOptions>;

/**
 * Enforce consistent newlines before and after dots.
 *
 * @see [dot-location](https://eslint.org/docs/latest/rules/dot-location)
 */
export interface DotLocationRule {
  /**
   * Enforce consistent newlines before and after dots.
   *
   * @see [dot-location](https://eslint.org/docs/latest/rules/dot-location)
   */
  'dot-location': DotLocationRuleConfig;
}
