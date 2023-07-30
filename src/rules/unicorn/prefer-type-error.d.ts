import type { RuleConfig } from '../rule-config';

/**
 * Enforce throwing `TypeError` in type checking conditions.
 *
 * @see [prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-type-error.md)
 */
export type PreferTypeErrorRuleConfig = RuleConfig<[]>;

/**
 * Enforce throwing `TypeError` in type checking conditions.
 *
 * @see [prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-type-error.md)
 */
export interface PreferTypeErrorRule {
  /**
   * Enforce throwing `TypeError` in type checking conditions.
   *
   * @see [prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-type-error.md)
   */
  'unicorn/prefer-type-error': PreferTypeErrorRuleConfig;
}
