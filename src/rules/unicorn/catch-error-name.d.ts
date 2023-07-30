import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CatchErrorNameOption {
  name?: string;
  ignore?: any[];
}

/**
 * Options.
 */
export type CatchErrorNameOptions = [CatchErrorNameOption?];

/**
 * Enforce a specific parameter name in catch clauses.
 *
 * @see [catch-error-name](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/catch-error-name.md)
 */
export type CatchErrorNameRuleConfig = RuleConfig<CatchErrorNameOptions>;

/**
 * Enforce a specific parameter name in catch clauses.
 *
 * @see [catch-error-name](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/catch-error-name.md)
 */
export interface CatchErrorNameRule {
  /**
   * Enforce a specific parameter name in catch clauses.
   *
   * @see [catch-error-name](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/catch-error-name.md)
   */
  'unicorn/catch-error-name': CatchErrorNameRuleConfig;
}
