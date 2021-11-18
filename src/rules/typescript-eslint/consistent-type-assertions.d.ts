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
 * Enforces consistent usage of type assertions.
 *
 * @see [consistent-type-assertions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/consistent-type-assertions.md)
 */
export type ConsistentTypeAssertionsRuleConfig = RuleConfig<ConsistentTypeAssertionsOptions>;

/**
 * Enforces consistent usage of type assertions.
 *
 * @see [consistent-type-assertions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/consistent-type-assertions.md)
 */
export interface ConsistentTypeAssertionsRule {
  /**
   * Enforces consistent usage of type assertions.
   *
   * @see [consistent-type-assertions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/consistent-type-assertions.md)
   */
  '@typescript-eslint/consistent-type-assertions': ConsistentTypeAssertionsRuleConfig;
}
