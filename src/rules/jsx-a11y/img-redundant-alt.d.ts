import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ImgRedundantAltOption {
  components?: string[];
  words?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type ImgRedundantAltOptions = [ImgRedundantAltOption?];

/**
 * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
 *
 * @see [img-redundant-alt](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/img-redundant-alt.md)
 */
export type ImgRedundantAltRuleConfig = RuleConfig<ImgRedundantAltOptions>;

/**
 * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
 *
 * @see [img-redundant-alt](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/img-redundant-alt.md)
 */
export interface ImgRedundantAltRule {
  /**
   * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
   *
   * @see [img-redundant-alt](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/img-redundant-alt.md)
   */
  'jsx-a11y/img-redundant-alt': ImgRedundantAltRuleConfig;
}
