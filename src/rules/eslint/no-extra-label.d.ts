import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary labels.
 *
 * @see [no-extra-label](https://eslint.org/docs/latest/rules/no-extra-label)
 */
export type NoExtraLabelRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary labels.
 *
 * @see [no-extra-label](https://eslint.org/docs/latest/rules/no-extra-label)
 */
export interface NoExtraLabelRule {
  /**
   * Disallow unnecessary labels.
   *
   * @see [no-extra-label](https://eslint.org/docs/latest/rules/no-extra-label)
   */
  'no-extra-label': NoExtraLabelRuleConfig;
}
