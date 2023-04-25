import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface HeadingHasContentOption {
  components?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type HeadingHasContentOptions = [HeadingHasContentOption?];

/**
 * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
 *
 * @see [heading-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/heading-has-content.md)
 */
export type HeadingHasContentRuleConfig = RuleConfig<HeadingHasContentOptions>;

/**
 * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
 *
 * @see [heading-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/heading-has-content.md)
 */
export interface HeadingHasContentRule {
  /**
   * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
   *
   * @see [heading-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/heading-has-content.md)
   */
  'jsx-a11y/heading-has-content': HeadingHasContentRuleConfig;
}
