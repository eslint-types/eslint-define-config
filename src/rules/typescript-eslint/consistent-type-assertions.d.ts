import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ConsistentTypeAssertionsOption =
  | {
      /**
       * This option defines the expected assertion style.
       *
       * @see [assertionStyle](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md#assertionstyle)
       */
      assertionStyle: 'never';
    }
  | {
      /**
       * This option defines the expected assertion style.
       *
       * @default 'as'
       *
       * @see [assertionStyle](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md#assertionstyle)
       */
      assertionStyle: 'as' | 'angle-bracket';
      /**
       * Always prefer `const x: T = { ... };` to `const x = { ... } as T;` (or similar with angle brackets).
       *
       * The type assertion in the latter case is either unnecessary or will probably hide an error.
       *
       * @default 'allow'
       *
       * @see [objectLiteralTypeAssertions](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md#objectliteraltypeassertions)
       */
      objectLiteralTypeAssertions?: 'allow' | 'allow-as-parameter' | 'never';
    };

/**
 * Options.
 */
export type ConsistentTypeAssertionsOptions = [ConsistentTypeAssertionsOption?];

/**
 * Enforces consistent usage of type assertions.
 *
 * @see [consistent-type-assertions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.0.0/packages/eslint-plugin/docs/rules/consistent-type-assertions.md)
 */
export type ConsistentTypeAssertionsRuleConfig = RuleConfig<ConsistentTypeAssertionsOptions>;

/**
 * Enforces consistent usage of type assertions.
 *
 * @see [consistent-type-assertions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.0.0/packages/eslint-plugin/docs/rules/consistent-type-assertions.md)
 */
export interface ConsistentTypeAssertionsRule {
  /**
   * Enforces consistent usage of type assertions.
   *
   * @see [consistent-type-assertions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.0.0/packages/eslint-plugin/docs/rules/consistent-type-assertions.md)
   */
  '@typescript-eslint/consistent-type-assertions': ConsistentTypeAssertionsRuleConfig;
}
