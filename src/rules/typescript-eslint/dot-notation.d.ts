import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface DotNotationOption {
  allowKeywords?: boolean;
  allowPattern?: string;
  allowPrivateClassPropertyAccess?: boolean;
  allowProtectedClassPropertyAccess?: boolean;
  allowIndexSignaturePropertyAccess?: boolean;
}

/**
 * Options.
 */
export type DotNotationOptions = [DotNotationOption?];

/**
 * Enforce dot notation whenever possible.
 *
 * @see [dot-notation](https://typescript-eslint.io/rules/dot-notation)
 */
export type DotNotationRuleConfig = RuleConfig<DotNotationOptions>;

/**
 * Enforce dot notation whenever possible.
 *
 * @see [dot-notation](https://typescript-eslint.io/rules/dot-notation)
 */
export interface DotNotationRule {
  /**
   * Enforce dot notation whenever possible.
   *
   * @see [dot-notation](https://typescript-eslint.io/rules/dot-notation)
   */
  '@typescript-eslint/dot-notation': DotNotationRuleConfig;
}
