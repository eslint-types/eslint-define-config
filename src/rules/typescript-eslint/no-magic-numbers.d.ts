import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMagicNumbersOption {
  ignoreNumericLiteralTypes?: boolean;
  ignoreEnums?: boolean;
  ignoreReadonlyClassProperties?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type NoMagicNumbersOptions = [NoMagicNumbersOption?];

/**
 * Disallow magic numbers.
 *
 * @see [no-magic-numbers](https://typescript-eslint.io/rules/no-magic-numbers)
 */
export type NoMagicNumbersRuleConfig = RuleConfig<NoMagicNumbersOptions>;

/**
 * Disallow magic numbers.
 *
 * @see [no-magic-numbers](https://typescript-eslint.io/rules/no-magic-numbers)
 */
export interface NoMagicNumbersRule {
  /**
   * Disallow magic numbers.
   *
   * @see [no-magic-numbers](https://typescript-eslint.io/rules/no-magic-numbers)
   */
  '@typescript-eslint/no-magic-numbers': NoMagicNumbersRuleConfig;
}
