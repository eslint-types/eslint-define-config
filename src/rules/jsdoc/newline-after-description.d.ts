import type { RuleConfig } from '../rule-config';

/**
 * Enforces a consistent padding of the block description.
 *
 * @see [newline-after-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-newline-after-description)
 */
export type NewlineAfterDescriptionRuleConfig = RuleConfig<[]>;

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
