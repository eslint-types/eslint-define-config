import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedGlobalsOption = (
  | string
  | {
      name: string;
      message?: string;
    }
)[];

/**
 * Options.
 */
export type NoRestrictedGlobalsOptions = NoRestrictedGlobalsOption;

/**
 * Disallow specified global variables.
 *
 * @see [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)
 */
export type NoRestrictedGlobalsRuleConfig = RuleConfig<NoRestrictedGlobalsOptions>;

/**
 * Disallow specified global variables.
 *
 * @see [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)
 */
export interface NoRestrictedGlobalsRule {
  /**
   * Disallow specified global variables.
   *
   * @see [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)
   */
  'no-restricted-globals': NoRestrictedGlobalsRuleConfig;
}
