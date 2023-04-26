import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AltTextOption {
  elements?: string[];
  img?: string[];
  object?: string[];
  area?: string[];
  'input[type="image"]'?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type AltTextOptions = [AltTextOption?];

/**
 * Enforce all elements that require alternative text have meaningful information to relay back to end user.
 *
 * @see [alt-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/alt-text.md)
 */
export type AltTextRuleConfig = RuleConfig<AltTextOptions>;

/**
 * Enforce all elements that require alternative text have meaningful information to relay back to end user.
 *
 * @see [alt-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/alt-text.md)
 */
export interface AltTextRule {
  /**
   * Enforce all elements that require alternative text have meaningful information to relay back to end user.
   *
   * @see [alt-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/alt-text.md)
   */
  'jsx-a11y/alt-text': AltTextRuleConfig;
}
