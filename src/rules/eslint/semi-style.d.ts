import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SemiStyleOption = 'last' | 'first';

/**
 * Options.
 */
export type SemiStyleOptions = [SemiStyleOption?];

/**
 * Enforce location of semicolons.
 *
 * @see [semi-style](https://eslint.org/docs/latest/rules/semi-style)
 */
export type SemiStyleRuleConfig = RuleConfig<SemiStyleOptions>;

/**
 * Enforce location of semicolons.
 *
 * @see [semi-style](https://eslint.org/docs/latest/rules/semi-style)
 */
export interface SemiStyleRule {
  /**
   * Enforce location of semicolons.
   *
   * @see [semi-style](https://eslint.org/docs/latest/rules/semi-style)
   */
  'semi-style': SemiStyleRuleConfig;
}
