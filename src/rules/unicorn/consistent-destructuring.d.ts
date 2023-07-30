import type { RuleConfig } from '../rule-config';

/**
 * Use destructured variables over properties.
 *
 * @see [consistent-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/consistent-destructuring.md)
 */
export type ConsistentDestructuringRuleConfig = RuleConfig<[]>;

/**
 * Use destructured variables over properties.
 *
 * @see [consistent-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/consistent-destructuring.md)
 */
export interface ConsistentDestructuringRule {
  /**
   * Use destructured variables over properties.
   *
   * @see [consistent-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/consistent-destructuring.md)
   */
  'unicorn/consistent-destructuring': ConsistentDestructuringRuleConfig;
}
