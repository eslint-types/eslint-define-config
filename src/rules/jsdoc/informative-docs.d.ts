import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface InformativeDocsOption {
  aliases?: {
    /**
     */
    [k: string]: string[];
  };
  excludedTags?: string[];
  uselessWords?: string[];
}

/**
 * Options.
 */
export type InformativeDocsOptions = [InformativeDocsOption?];

/**
 * This rule reports doc comments that only restate their attached name.
 *
 * @see [informative-docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md#repos-sticky-header)
 */
export type InformativeDocsRuleConfig = RuleConfig<InformativeDocsOptions>;

/**
 * This rule reports doc comments that only restate their attached name.
 *
 * @see [informative-docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md#repos-sticky-header)
 */
export interface InformativeDocsRule {
  /**
   * This rule reports doc comments that only restate their attached name.
   *
   * @see [informative-docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md#repos-sticky-header)
   */
  'jsdoc/informative-docs': InformativeDocsRuleConfig;
}
