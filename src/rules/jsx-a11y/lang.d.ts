import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface LangOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type LangOptions = [LangOption?];

/**
 * Enforce lang attribute has a valid value.
 *
 * @see [lang](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/lang.md)
 */
export type LangRuleConfig = RuleConfig<LangOptions>;

/**
 * Enforce lang attribute has a valid value.
 *
 * @see [lang](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/lang.md)
 */
export interface LangRule {
  /**
   * Enforce lang attribute has a valid value.
   *
   * @see [lang](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/lang.md)
   */
  'jsx-a11y/lang': LangRuleConfig;
}
