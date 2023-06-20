import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type LinebreakStyleOption = 'unix' | 'windows';

/**
 * Options.
 */
export type LinebreakStyleOptions = [LinebreakStyleOption?];

/**
 * Enforce consistent linebreak style.
 *
 * @see [linebreak-style](https://eslint.org/docs/latest/rules/linebreak-style)
 */
export type LinebreakStyleRuleConfig = RuleConfig<LinebreakStyleOptions>;

/**
 * Enforce consistent linebreak style.
 *
 * @see [linebreak-style](https://eslint.org/docs/latest/rules/linebreak-style)
 */
export interface LinebreakStyleRule {
  /**
   * Enforce consistent linebreak style.
   *
   * @see [linebreak-style](https://eslint.org/docs/latest/rules/linebreak-style)
   */
  'linebreak-style': LinebreakStyleRuleConfig;
}
