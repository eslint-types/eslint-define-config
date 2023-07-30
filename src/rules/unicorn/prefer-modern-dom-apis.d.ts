import type { RuleConfig } from '../rule-config';

/**
 * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.
 *
 * @see [prefer-modern-dom-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-modern-dom-apis.md)
 */
export type PreferModernDomApisRuleConfig = RuleConfig<[]>;

/**
 * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.
 *
 * @see [prefer-modern-dom-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-modern-dom-apis.md)
 */
export interface PreferModernDomApisRule {
  /**
   * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.
   *
   * @see [prefer-modern-dom-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-modern-dom-apis.md)
   */
  'unicorn/prefer-modern-dom-apis': PreferModernDomApisRuleConfig;
}
