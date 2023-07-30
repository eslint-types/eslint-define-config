import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface StringContentOption {
  patterns?: {
    [k: string]:
      | string
      | {
          suggest: string;
          fix?: boolean;
          message?: string;
        };
  };
}

/**
 * Options.
 */
export type StringContentOptions = [StringContentOption?];

/**
 * Enforce better string content.
 *
 * @see [string-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/string-content.md)
 */
export type StringContentRuleConfig = RuleConfig<StringContentOptions>;

/**
 * Enforce better string content.
 *
 * @see [string-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/string-content.md)
 */
export interface StringContentRule {
  /**
   * Enforce better string content.
   *
   * @see [string-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/string-content.md)
   */
  'unicorn/string-content': StringContentRuleConfig;
}
