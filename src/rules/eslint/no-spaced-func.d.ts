import type { RuleConfig } from '../rule-config';

/**
 * Disallow spacing between function identifiers and their applications (deprecated).
 *
 * @deprecated
 *
 * @see [no-spaced-func](https://eslint.org/docs/latest/rules/no-spaced-func)
 */
export type NoSpacedFuncRuleConfig = RuleConfig<[]>;

/**
 * Disallow spacing between function identifiers and their applications (deprecated).
 *
 * @deprecated
 *
 * @see [no-spaced-func](https://eslint.org/docs/latest/rules/no-spaced-func)
 */
export interface NoSpacedFuncRule {
  /**
   * Disallow spacing between function identifiers and their applications (deprecated).
   *
   * @deprecated
   *
   * @see [no-spaced-func](https://eslint.org/docs/latest/rules/no-spaced-func)
   */
  'no-spaced-func': NoSpacedFuncRuleConfig;
}
