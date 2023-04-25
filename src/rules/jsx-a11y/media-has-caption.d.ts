import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MediaHasCaptionOption {
  audio?: string[];
  video?: string[];
  track?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type MediaHasCaptionOptions = [MediaHasCaptionOption?];

/**
 * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
 *
 * @see [media-has-caption](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/media-has-caption.md)
 */
export type MediaHasCaptionRuleConfig = RuleConfig<MediaHasCaptionOptions>;

/**
 * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
 *
 * @see [media-has-caption](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/media-has-caption.md)
 */
export interface MediaHasCaptionRule {
  /**
   * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
   *
   * @see [media-has-caption](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/media-has-caption.md)
   */
  'jsx-a11y/media-has-caption': MediaHasCaptionRuleConfig;
}
