import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ConsistentTypeAssertionsOption =
  | {
      assertionStyle: 'never';
    }
  | {
      assertionStyle: 'as' | 'angle-bracket';
      objectLiteralTypeAssertions?: 'allow' | 'allow-as-parameter' | 'never';
    };

/**
 * Options.
 */
export type ConsistentTypeAssertionsOptions = [ConsistentTypeAssertionsOption?];

/**
 * Enforce consistent usage of type assertions.
 *
 * @see [consistent-type-assertions](https://typescript-eslint.io/rules/consistent-type-assertions)
 */
export type ConsistentTypeAssertionsRuleConfig =
  RuleConfig<ConsistentTypeAssertionsOptions>;

/**
 * Enforce consistent usage of type assertions.
 *
 * @see [consistent-type-assertions](https://typescript-eslint.io/rules/consistent-type-assertions)
 */
export interface ConsistentTypeAssertionsRule {
  /**
   * Enforce consistent usage of type assertions.
   *
   * @see [consistent-type-assertions](https://typescript-eslint.io/rules/consistent-type-assertions)
   */
  '@typescript-eslint/consistent-type-assertions': ConsistentTypeAssertionsRuleConfig;
}
