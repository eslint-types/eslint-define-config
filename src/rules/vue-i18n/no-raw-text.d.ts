import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRawTextOption {
  attributes?: {
    /**
     */
    [k: string]: string[];
  };
  ignoreNodes?: any[];
  ignorePattern?: string;
  ignoreText?: any[];
  [k: string]: any;
}

/**
 * Options.
 */
export type NoRawTextOptions = [NoRawTextOption?];

/**
 * Disallow to string literal in template or JSX.
 *
 * @see [no-raw-text](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-raw-text.html)
 */
export type NoRawTextRuleConfig = RuleConfig<NoRawTextOptions>;

/**
 * Disallow to string literal in template or JSX.
 *
 * @see [no-raw-text](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-raw-text.html)
 */
export interface NoRawTextRule {
  /**
   * Disallow to string literal in template or JSX.
   *
   * @see [no-raw-text](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-raw-text.html)
   */
  '@intlify/vue-i18n/no-raw-text': NoRawTextRuleConfig;
}
