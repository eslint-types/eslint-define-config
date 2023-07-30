import type { RuleConfig } from '../rule-config';

/**
 * Do not use leading/trailing space between `console.log` parameters.
 *
 * @see [no-console-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-console-spaces.md)
 */
export type NoConsoleSpacesRuleConfig = RuleConfig<[]>;

/**
 * Do not use leading/trailing space between `console.log` parameters.
 *
 * @see [no-console-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-console-spaces.md)
 */
export interface NoConsoleSpacesRule {
  /**
   * Do not use leading/trailing space between `console.log` parameters.
   *
   * @see [no-console-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-console-spaces.md)
   */
  'unicorn/no-console-spaces': NoConsoleSpacesRuleConfig;
}
