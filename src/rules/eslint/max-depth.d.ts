import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MaxDepthOption =
  | number
  | {
      maximum?: number;
      max?: number;
    };

/**
 * Options.
 */
export type MaxDepthOptions = [MaxDepthOption?];

/**
 * Enforce a maximum depth that blocks can be nested.
 *
 * @see [max-depth](https://eslint.org/docs/latest/rules/max-depth)
 */
export type MaxDepthRuleConfig = RuleConfig<MaxDepthOptions>;

/**
 * Enforce a maximum depth that blocks can be nested.
 *
 * @see [max-depth](https://eslint.org/docs/latest/rules/max-depth)
 */
export interface MaxDepthRule {
  /**
   * Enforce a maximum depth that blocks can be nested.
   *
   * @see [max-depth](https://eslint.org/docs/latest/rules/max-depth)
   */
  'max-depth': MaxDepthRuleConfig;
}
