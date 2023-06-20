import type { RuleConfig } from '../rule-config';

/**
 * Disallow characters which are made with multiple code points in character class syntax.
 *
 * @see [no-misleading-character-class](https://eslint.org/docs/latest/rules/no-misleading-character-class)
 */
export type NoMisleadingCharacterClassRuleConfig = RuleConfig<[]>;

/**
 * Disallow characters which are made with multiple code points in character class syntax.
 *
 * @see [no-misleading-character-class](https://eslint.org/docs/latest/rules/no-misleading-character-class)
 */
export interface NoMisleadingCharacterClassRule {
  /**
   * Disallow characters which are made with multiple code points in character class syntax.
   *
   * @see [no-misleading-character-class](https://eslint.org/docs/latest/rules/no-misleading-character-class)
   */
  'no-misleading-character-class': NoMisleadingCharacterClassRuleConfig;
}
