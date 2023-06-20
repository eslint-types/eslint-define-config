import type { RuleConfig } from '../rule-config';

/**
 * Detects and removes extra lines of a blank block description.
 *
 * @see [no-blank-block-descriptions](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md#repos-sticky-header)
 */
export type NoBlankBlockDescriptionsRuleConfig = RuleConfig<[]>;

/**
 * Detects and removes extra lines of a blank block description.
 *
 * @see [no-blank-block-descriptions](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md#repos-sticky-header)
 */
export interface NoBlankBlockDescriptionsRule {
  /**
   * Detects and removes extra lines of a blank block description.
   *
   * @see [no-blank-block-descriptions](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md#repos-sticky-header)
   */
  'jsdoc/no-blank-block-descriptions': NoBlankBlockDescriptionsRuleConfig;
}
