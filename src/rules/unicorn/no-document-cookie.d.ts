import type { RuleConfig } from '../rule-config';

/**
 * Do not use `document.cookie` directly.
 *
 * @see [no-document-cookie](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-document-cookie.md)
 */
export type NoDocumentCookieRuleConfig = RuleConfig<[]>;

/**
 * Do not use `document.cookie` directly.
 *
 * @see [no-document-cookie](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-document-cookie.md)
 */
export interface NoDocumentCookieRule {
  /**
   * Do not use `document.cookie` directly.
   *
   * @see [no-document-cookie](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-document-cookie.md)
   */
  'unicorn/no-document-cookie': NoDocumentCookieRuleConfig;
}
