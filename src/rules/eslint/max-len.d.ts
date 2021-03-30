import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MaxLenOption = {
  /**
   * Enforces a maximum line length.
   *
   * @default 80
   *
   * @see [code](https://eslint.org/docs/rules/max-len#code)
   */
  code?: number;
  /**
   * Specifies the character width for tab characters.
   *
   * @default 4
   *
   * @see [tabWidth](https://eslint.org/docs/rules/max-len#tabwidth)
   */
  tabWidth?: number;
  /**
   * Enforces a maximum line length for comments.
   *
   * @default - to value of code.
   *
   * @see [comments](https://eslint.org/docs/rules/max-len#comments)
   */
  comments?: number;
  /**
   * Ignores lines matching a regular expression
   *
   * Can only match a single line and need to be double escaped when written in YAML or JSON.
   *
   * @see [ignorePattern](https://eslint.org/docs/rules/max-len#ignorepattern)
   */
  ignorePattern?: string;
  /**
   * Ignores all trailing comments and comments on their own line.
   *
   * @default true
   *
   * @see [ignoreComments](https://eslint.org/docs/rules/max-len#ignorecomments)
   */
  ignoreComments?: boolean;
  /**
   * Ignores only trailing comments.
   *
   * @default true
   *
   * @see [ignoreTrailingComments](https://eslint.org/docs/rules/max-len#ignoretrailingcomments)
   */
  ignoreTrailingComments?: boolean;
  /**
   * Ignores lines that contain a URL.
   *
   * @default true
   *
   * @see [ignoreUrls](https://eslint.org/docs/rules/max-len#ignoreurls)
   */
  ignoreUrls?: boolean;
  /**
   * Ignores lines that contain a double-quoted or single-quoted string.
   *
   * @default true
   *
   * @see [ignoreStrings](https://eslint.org/docs/rules/max-len#ignorestrings)
   */
  ignoreStrings?: boolean;
  /**
   * Ignores lines that contain a template literal.
   *
   * @default true
   *
   * @see [ignoreTemplateLiterals](https://eslint.org/docs/rules/max-len#ignoretemplateliterals)
   */
  ignoreTemplateLiterals?: boolean;
  /**
   * Ignores lines that contain a RegExp literal.
   *
   * @default true
   *
   * @see [ignoreRegExpLiterals](https://eslint.org/docs/rules/max-len#ignoreregexpliterals)
   */
  ignoreRegExpLiterals?: boolean;
};

/**
 * Options.
 */
export type MaxLenOptions = [MaxLenOption?];

/**
 * Enforce a maximum line length.
 *
 * @see [max-len](https://eslint.org/docs/rules/max-len)
 */
export type MaxLenRuleConfig = RuleConfig<MaxLenOptions>;

/**
 * Enforce a maximum line length.
 *
 * @see [max-len](https://eslint.org/docs/rules/max-len)
 */
export interface MaxLenRule {
  /**
   * Enforce a maximum line length.
   *
   * @see [max-len](https://eslint.org/docs/rules/max-len)
   */
  'max-len': MaxLenRuleConfig;
}
