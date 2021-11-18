import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMagicNumbersOption {
  detectObjects?: boolean;
  enforceConst?: boolean;
  ignore?: (number | string)[];
  ignoreArrayIndexes?: boolean;
  ignoreDefaultValues?: boolean;
  ignoreNumericLiteralTypes?: boolean;
  ignoreEnums?: boolean;
  ignoreReadonlyClassProperties?: boolean;
}

/**
 * Options.
 */
export type NoMagicNumbersOptions = [NoMagicNumbersOption?];

/**
 * Disallow magic numbers.
 *
 * @see [no-magic-numbers](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-magic-numbers.md)
 */
export type NoMagicNumbersRuleConfig = RuleConfig<NoMagicNumbersOptions>;

/**
 * Disallow magic numbers.
 *
 * @see [no-magic-numbers](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-magic-numbers.md)
 */
export interface NoMagicNumbersRule {
  /**
   * Disallow magic numbers.
   *
   * @see [no-magic-numbers](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-magic-numbers.md)
   */
  '@typescript-eslint/no-magic-numbers': NoMagicNumbersRuleConfig;
}
