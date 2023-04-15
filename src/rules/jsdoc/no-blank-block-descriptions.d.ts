import type { RuleConfig } from '../rule-config';

/**
 * Detects and removes extra lines of a blank block description.
 *
 * @see [no-blank-block-descriptions](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-blank-block-descriptions)
 */
export type NoBlankBlockDescriptionsRuleConfig = RuleConfig<[]>;

/**
 * Detects and removes extra lines of a blank block description.
 *
 * @see [no-blank-block-descriptions](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-blank-block-descriptions)
 */
export interface NoBlankBlockDescriptionsRule {
  /**
   * Detects and removes extra lines of a blank block description.
   *
   * @see [no-blank-block-descriptions](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-blank-block-descriptions)
   */
  'jsdoc/no-blank-block-descriptions': NoBlankBlockDescriptionsRuleConfig;
}
