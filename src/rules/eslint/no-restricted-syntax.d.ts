import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 0
 */
export type NoRestrictedSyntaxOption = (
  | string
  | {
      selector: string;
      message?: string;
    }
)[];

/**
 * Options.
 */
export type NoRestrictedSyntaxOptions = NoRestrictedSyntaxOption;

/**
 * Disallow specified syntax.
 *
 * @see [no-restricted-syntax](https://eslint.org/docs/latest/rules/no-restricted-syntax)
 */
export type NoRestrictedSyntaxRuleConfig =
  RuleConfig<NoRestrictedSyntaxOptions>;

/**
 * Disallow specified syntax.
 *
 * @see [no-restricted-syntax](https://eslint.org/docs/latest/rules/no-restricted-syntax)
 */
export interface NoRestrictedSyntaxRule {
  /**
   * Disallow specified syntax.
   *
   * @see [no-restricted-syntax](https://eslint.org/docs/latest/rules/no-restricted-syntax)
   */
  'no-restricted-syntax': NoRestrictedSyntaxRuleConfig;
}
