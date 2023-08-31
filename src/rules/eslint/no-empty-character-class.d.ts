import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Disallow empty character classes in regular expressions.
 *
 * @see [no-empty-character-class](https://eslint.org/docs/latest/rules/no-empty-character-class)
 */
export type NoEmptyCharacterClassRuleConfig = RuleConfig<[]>;

/**
 * Disallow empty character classes in regular expressions.
 *
 * @see [no-empty-character-class](https://eslint.org/docs/latest/rules/no-empty-character-class)
 */
export interface NoEmptyCharacterClassRule {
  /**
   * Disallow empty character classes in regular expressions.
   *
   * @see [no-empty-character-class](https://eslint.org/docs/latest/rules/no-empty-character-class)
   */
  'no-empty-character-class': NoEmptyCharacterClassRuleConfig;
}
