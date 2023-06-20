import type { RuleConfig } from '../rule-config';

/**
 * Disallow duplicate arguments in `function` definitions.
 *
 * @see [no-dupe-args](https://eslint.org/docs/latest/rules/no-dupe-args)
 */
export type NoDupeArgsRuleConfig = RuleConfig<[]>;

/**
 * Disallow duplicate arguments in `function` definitions.
 *
 * @see [no-dupe-args](https://eslint.org/docs/latest/rules/no-dupe-args)
 */
export interface NoDupeArgsRule {
  /**
   * Disallow duplicate arguments in `function` definitions.
   *
   * @see [no-dupe-args](https://eslint.org/docs/latest/rules/no-dupe-args)
   */
  'no-dupe-args': NoDupeArgsRuleConfig;
}
