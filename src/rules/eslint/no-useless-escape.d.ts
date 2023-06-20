import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary escape characters.
 *
 * @see [no-useless-escape](https://eslint.org/docs/latest/rules/no-useless-escape)
 */
export type NoUselessEscapeRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary escape characters.
 *
 * @see [no-useless-escape](https://eslint.org/docs/latest/rules/no-useless-escape)
 */
export interface NoUselessEscapeRule {
  /**
   * Disallow unnecessary escape characters.
   *
   * @see [no-useless-escape](https://eslint.org/docs/latest/rules/no-useless-escape)
   */
  'no-useless-escape': NoUselessEscapeRuleConfig;
}
