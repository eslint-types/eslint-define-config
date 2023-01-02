import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SpellCheckerOption {
  comments?: boolean;
  strings?: boolean;
  identifiers?: boolean;
  ignoreRequire?: boolean;
  enableUpperCaseUnderscoreCheck?: boolean;
  templates?: boolean;
  lang?: string;
  langDir?: string;
  skipWords?: any[];
  skipIfMatch?: any[];
  skipWordIfMatch?: any[];
  minLength?: number;
}

/**
 * Options.
 */
export type SpellCheckerOptions = [SpellCheckerOption?];

/**
 * Spell check.
 *
 */
export type SpellCheckerRuleConfig = RuleConfig<SpellCheckerOptions>;

/**
 * Spell check.
 *
 */
export interface SpellCheckerRule {
  /**
   * Spell check.
   *
   */
  'spellcheck/spell-checker': SpellCheckerRuleConfig;
}
