import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUselessUndefinedOption {
  checkArguments?: boolean;
}

/**
 * Options.
 */
export type NoUselessUndefinedOptions = [NoUselessUndefinedOption?];

/**
 * Disallow useless `undefined`.
 *
 * @see [no-useless-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-useless-undefined.md)
 */
export type NoUselessUndefinedRuleConfig =
  RuleConfig<NoUselessUndefinedOptions>;

/**
 * Disallow useless `undefined`.
 *
 * @see [no-useless-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-useless-undefined.md)
 */
export interface NoUselessUndefinedRule {
  /**
   * Disallow useless `undefined`.
   *
   * @see [no-useless-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-useless-undefined.md)
   */
  'unicorn/no-useless-undefined': NoUselessUndefinedRuleConfig;
}
