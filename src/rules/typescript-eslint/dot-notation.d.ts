import { DotNotationOption as BaseDotNotationOption } from '../eslint/dot-notation';
import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type DotNotationOption = BaseDotNotationOption & {
  /**
   * @default false
   *
   * @see [allowPrivateClassPropertyAccess](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md#allowprivateclasspropertyaccess)
   */
  allowPrivateClassPropertyAccess?: boolean;
  /**
   * @default false
   *
   * @see [allowProtectedClassPropertyAccess](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md#allowprotectedclasspropertyaccess)
   */
  allowProtectedClassPropertyAccess?: boolean;
};

/**
 * Options.
 */
export type DotNotationOptions = [DotNotationOption?];

/**
 * Enforce dot notation whenever possible.
 *
 * @see [dot-notation](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md)
 */
export type DotNotationRuleConfig = RuleConfig<DotNotationOptions>;

/**
 * Enforce dot notation whenever possible.
 *
 * @see [dot-notation](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md)
 */
export interface DotNotationRule {
  /**
   * Enforce dot notation whenever possible.
   *
   * @see [dot-notation](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md)
   */
  '@typescript-eslint/dot-notation': DotNotationRuleConfig;
}
