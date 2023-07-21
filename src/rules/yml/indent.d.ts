import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface IndentConfig {
  indentBlockSequences?: boolean;
  indicatorValueIndent?: number;
}

/**
 * Option.
 */
export type IndentOption = number;

/**
 * Options.
 */
export type IndentOptions = [IndentOption?, IndentConfig?];

/**
 * Enforce consistent indentation.
 *
 * @see [indent](https://ota-meshi.github.io/eslint-plugin-yml/rules/indent.html)
 */
export type IndentRuleConfig = RuleConfig<IndentOptions>;

/**
 * Enforce consistent indentation.
 *
 * @see [indent](https://ota-meshi.github.io/eslint-plugin-yml/rules/indent.html)
 */
export interface IndentRule {
  /**
   * Enforce consistent indentation.
   *
   * @see [indent](https://ota-meshi.github.io/eslint-plugin-yml/rules/indent.html)
   */
  'yml/indent': IndentRuleConfig;
}
