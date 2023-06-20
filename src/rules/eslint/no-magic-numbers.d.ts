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
  ignoreClassFieldInitialValues?: boolean;
}

/**
 * Options.
 */
export type NoMagicNumbersOptions = [NoMagicNumbersOption?];

/**
 * Disallow magic numbers.
 *
 * @see [no-magic-numbers](https://eslint.org/docs/latest/rules/no-magic-numbers)
 */
export type NoMagicNumbersRuleConfig = RuleConfig<NoMagicNumbersOptions>;

/**
 * Disallow magic numbers.
 *
 * @see [no-magic-numbers](https://eslint.org/docs/latest/rules/no-magic-numbers)
 */
export interface NoMagicNumbersRule {
  /**
   * Disallow magic numbers.
   *
   * @see [no-magic-numbers](https://eslint.org/docs/latest/rules/no-magic-numbers)
   */
  'no-magic-numbers': NoMagicNumbersRuleConfig;
}
