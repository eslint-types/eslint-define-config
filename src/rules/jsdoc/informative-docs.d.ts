import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface InformativeDocsOption {
  aliases?: string[];
  uselessWords?: string[];
}

/**
 * Options.
 */
export type InformativeDocsOptions = [InformativeDocsOption?];

/**
 * This rule reports doc comments that only restate their attached name.
 *
 * @see [informative-docs](https://github.com/gajus/eslint-plugin-jsdoc#informative-docs)
 */
export type InformativeDocsRuleConfig = RuleConfig<InformativeDocsOptions>;

/**
 * This rule reports doc comments that only restate their attached name.
 *
 * @see [informative-docs](https://github.com/gajus/eslint-plugin-jsdoc#informative-docs)
 */
export interface InformativeDocsRule {
  /**
   * This rule reports doc comments that only restate their attached name.
   *
   * @see [informative-docs](https://github.com/gajus/eslint-plugin-jsdoc#informative-docs)
   */
  'jsdoc/informative-docs': InformativeDocsRuleConfig;
}
