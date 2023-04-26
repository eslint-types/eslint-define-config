import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AnchorIsValidOption {
  components?: string[];
  specialLink?: string[];
  /**
   * @minItems 1
   */
  aspects?: [
    'noHref' | 'invalidHref' | 'preferButton',
    ...('noHref' | 'invalidHref' | 'preferButton')[],
  ];
  [k: string]: any;
}

/**
 * Options.
 */
export type AnchorIsValidOptions = [AnchorIsValidOption?];

/**
 * Enforce all anchors are valid, navigable elements.
 *
 * @see [anchor-is-valid](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-is-valid.md)
 */
export type AnchorIsValidRuleConfig = RuleConfig<AnchorIsValidOptions>;

/**
 * Enforce all anchors are valid, navigable elements.
 *
 * @see [anchor-is-valid](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-is-valid.md)
 */
export interface AnchorIsValidRule {
  /**
   * Enforce all anchors are valid, navigable elements.
   *
   * @see [anchor-is-valid](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-is-valid.md)
   */
  'jsx-a11y/anchor-is-valid': AnchorIsValidRuleConfig;
}
