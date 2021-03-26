import { LiteralUnion } from '../../utility-types';
import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SpellCheckerOption = {
  /** Check Spelling inside comments. */
  comments?: boolean;
  /** Check Spelling inside strings. */
  strings?: boolean;
  /** Check Spelling inside identifiers. */
  identifiers?: boolean;
  /** Exclude `require()` imports from spell-checking. Useful for excluding NPM package name false-positives. */
  ignoreRequire?: boolean;
  /**
   * Check Spelling inside ES6 templates you should enable parser options for ES6 features for this to work.
   *
   * @see [specifying-parser-options](http://eslint.org/docs/user-guide/configuring#specifying-parser-options)
   */
  templates?: boolean;
  /**
   * Choose the language you want to use.
   *
   * Options are: "en_US", "en_CA", "en_AU", and "en_GB".
   */
  lang?: LiteralUnion<'en_US' | 'en_CA' | 'en_AU' | 'en_GB'>;
  /** Array of words that will not be checked. */
  skipWords?: string[];
  /** Array of Regular Expressions the plugin will try to match the js node element value (identifier, comment, string, string template, etc) and will not check the entire node content if matched, be careful in comments because if a part of the comment is matched the entire comment will not be checked, same for strings.
i.e: `"^[-\\w]+\/[-\\w\\.]+$"` will ignore MIME types. */
  skipIfMatch?: string[];
  /** Array of Regular Expressions the plugin will try to match every single word that is found in the nodes (identifier, comment, string, string template, etc) and will not check the single word if matched.
i.e: `"^[-\\w]+\/[-\\w\\.]+$"` will ignore MIME types. */
  skipWordIfMatch?: string[];
  /** Words with a character-amount of less than the minLength will not be spell-checked. */
  minLength?: number;
};

/**
 * Options.
 */
export type SpellCheckerOptions = [SpellCheckerOption?];

/**
 * Spell check words on identifiers, Strings and comments.
 *
 * @see [spell-checker](https://github.com/aotaduy/eslint-plugin-spellcheck)
 */
export type SpellCheckerRuleConfig = RuleConfig<SpellCheckerOptions>;

/**
 * Spell check words on identifiers, Strings and comments.
 *
 * @see [spell-checker](https://github.com/aotaduy/eslint-plugin-spellcheck)
 */
export interface SpellCheckerRule {
  /**
   * Spell check words on identifiers, Strings and comments.
   *
   * @see [spell-checker](https://github.com/aotaduy/eslint-plugin-spellcheck)
   */
  'spellcheck/spell-checker': SpellCheckerRuleConfig;
}
