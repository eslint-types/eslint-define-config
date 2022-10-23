import type { RuleConfig } from '../rule-config';

/**
 * Setting.
 */
export interface MaxLenSetting {
  code?: number;
  template?: number;
  comments?: number;
  tabWidth?: number;
  ignorePattern?: string;
  ignoreComments?: boolean;
  ignoreTrailingComments?: boolean;
  ignoreUrls?: boolean;
  ignoreStrings?: boolean;
  ignoreTemplateLiterals?: boolean;
  ignoreRegExpLiterals?: boolean;
  ignoreHTMLAttributeValues?: boolean;
  ignoreHTMLTextContents?: boolean;
}

/**
 * Config.
 */
export type MaxLenConfig =
  | {
      code?: number;
      template?: number;
      comments?: number;
      tabWidth?: number;
      ignorePattern?: string;
      ignoreComments?: boolean;
      ignoreTrailingComments?: boolean;
      ignoreUrls?: boolean;
      ignoreStrings?: boolean;
      ignoreTemplateLiterals?: boolean;
      ignoreRegExpLiterals?: boolean;
      ignoreHTMLAttributeValues?: boolean;
      ignoreHTMLTextContents?: boolean;
    }
  | number;

/**
 * Option.
 */
export type MaxLenOption =
  | {
      code?: number;
      template?: number;
      comments?: number;
      tabWidth?: number;
      ignorePattern?: string;
      ignoreComments?: boolean;
      ignoreTrailingComments?: boolean;
      ignoreUrls?: boolean;
      ignoreStrings?: boolean;
      ignoreTemplateLiterals?: boolean;
      ignoreRegExpLiterals?: boolean;
      ignoreHTMLAttributeValues?: boolean;
      ignoreHTMLTextContents?: boolean;
    }
  | number;

/**
 * Options.
 */
export type MaxLenOptions = [MaxLenOption?, MaxLenConfig?, MaxLenSetting?];

/**
 * Enforce a maximum line length in `.vue` files.
 *
 * @see [max-len](https://eslint.vuejs.org/rules/max-len.html)
 */
export type MaxLenRuleConfig = RuleConfig<MaxLenOptions>;

/**
 * Enforce a maximum line length in `.vue` files.
 *
 * @see [max-len](https://eslint.vuejs.org/rules/max-len.html)
 */
export interface MaxLenRule {
  /**
   * Enforce a maximum line length in `.vue` files.
   *
   * @see [max-len](https://eslint.vuejs.org/rules/max-len.html)
   */
  'vue/max-len': MaxLenRuleConfig;
}
