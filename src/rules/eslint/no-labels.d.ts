import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoLabelsOption {
  allowLoop?: boolean;
  allowSwitch?: boolean;
}

/**
 * Options.
 */
export type NoLabelsOptions = [NoLabelsOption?];

/**
 * Disallow labeled statements.
 *
 * @see [no-labels](https://eslint.org/docs/latest/rules/no-labels)
 */
export type NoLabelsRuleConfig = RuleConfig<NoLabelsOptions>;

/**
 * Disallow labeled statements.
 *
 * @see [no-labels](https://eslint.org/docs/latest/rules/no-labels)
 */
export interface NoLabelsRule {
  /**
   * Disallow labeled statements.
   *
   * @see [no-labels](https://eslint.org/docs/latest/rules/no-labels)
   */
  'no-labels': NoLabelsRuleConfig;
}
