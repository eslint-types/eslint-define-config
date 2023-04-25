import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AnchorHasContentOption {
  components?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type AnchorHasContentOptions = [AnchorHasContentOption?];

/**
 * Enforce all anchors to contain accessible content.
 *
 * @see [anchor-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-has-content.md)
 */
export type AnchorHasContentRuleConfig = RuleConfig<AnchorHasContentOptions>;

/**
 * Enforce all anchors to contain accessible content.
 *
 * @see [anchor-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-has-content.md)
 */
export interface AnchorHasContentRule {
  /**
   * Enforce all anchors to contain accessible content.
   *
   * @see [anchor-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-has-content.md)
   */
  'jsx-a11y/anchor-has-content': AnchorHasContentRuleConfig;
}
