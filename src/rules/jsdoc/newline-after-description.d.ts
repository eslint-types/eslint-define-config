import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NewlineAfterDescriptionOption = 'always' | 'never';

/**
 * Options.
 */
export type NewlineAfterDescriptionOptions = [NewlineAfterDescriptionOption?];

/**
 * Enforces a consistent padding of the block description.
 *
 * @see [newline-after-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-newline-after-description)
 */
export type NewlineAfterDescriptionRuleConfig =
  RuleConfig<NewlineAfterDescriptionOptions>;

/**
 * Enforces a consistent padding of the block description.
 *
 * @see [newline-after-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-newline-after-description)
 */
export interface NewlineAfterDescriptionRule {
  /**
   * Enforces a consistent padding of the block description.
   *
   * @see [newline-after-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-newline-after-description)
   */
  'jsdoc/newline-after-description': NewlineAfterDescriptionRuleConfig;
}
