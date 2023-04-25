import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AutocompleteValidOption {
  inputComponents?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type AutocompleteValidOptions = [AutocompleteValidOption?];

/**
 * Enforce that autocomplete attributes are used correctly.
 *
 * @see [autocomplete-valid](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/autocomplete-valid.md)
 */
export type AutocompleteValidRuleConfig = RuleConfig<AutocompleteValidOptions>;

/**
 * Enforce that autocomplete attributes are used correctly.
 *
 * @see [autocomplete-valid](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/autocomplete-valid.md)
 */
export interface AutocompleteValidRule {
  /**
   * Enforce that autocomplete attributes are used correctly.
   *
   * @see [autocomplete-valid](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/autocomplete-valid.md)
   */
  'jsx-a11y/autocomplete-valid': AutocompleteValidRuleConfig;
}
