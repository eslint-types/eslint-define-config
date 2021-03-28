import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MatchDescriptionOption = {
  /**
   * If you wish to override the main function description without changing the default `match-description`, you may use `mainDescription`.
   *
   * @see [mainDescription](https://github.com/gajus/eslint-plugin-jsdoc#maindescription)
   */
  mainDescription?: string;
  /**
   * You can supply your own expression to override the default, passing a `matchDescription` string on the options object.
   *
   * @see [matchDescription](https://github.com/gajus/eslint-plugin-jsdoc#matchdescription)
   */
  matchDescription?: string;
  /**
   * Set this to an array of strings representing the AST context where you wish the rule to be applied (e.g., `ClassDeclaration` for ES6 classes).
   *
   * Set to `"any"` if you want the rule to apply to any jsdoc block throughout your files.
   *
   * @see [contexts](https://github.com/gajus/eslint-plugin-jsdoc#contexts-1)
   */
  contexts?: string[];
  /**
   * If you want different regular expressions to apply to tags, you may use the `tags` option object.
   *
   * @see [tags](https://github.com/gajus/eslint-plugin-jsdoc#tags-2)
   */
  tags?: Record<string, boolean>;
};

/**
 * Options.
 */
export type MatchDescriptionOptions = [MatchDescriptionOption?];

/**
 * Enforces a regular expression pattern on descriptions.
 *
 * @see [match-description](https://github.com/gajus/eslint-plugin-jsdoc#match-description)
 */
export type MatchDescriptionRuleConfig = RuleConfig<MatchDescriptionOptions>;

/**
 * Enforces a regular expression pattern on descriptions.
 *
 * @see [match-description](https://github.com/gajus/eslint-plugin-jsdoc#match-description)
 */
export interface MatchDescriptionRule {
  /**
   * Enforces a regular expression pattern on descriptions.
   *
   * @see [match-description](https://github.com/gajus/eslint-plugin-jsdoc#match-description)
   */
  'jsdoc/match-description': MatchDescriptionRuleConfig;
}
