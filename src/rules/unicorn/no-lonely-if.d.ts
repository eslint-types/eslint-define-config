import type { RuleConfig } from '../rule-config';

/**
 * Disallow `if` statements as the only statement in `if` blocks without `else`.
 *
 * @see [no-lonely-if](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-lonely-if.md)
 */
export type NoLonelyIfRuleConfig = RuleConfig<[]>;

/**
 * Disallow `if` statements as the only statement in `if` blocks without `else`.
 *
 * @see [no-lonely-if](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-lonely-if.md)
 */
export interface NoLonelyIfRule {
  /**
   * Disallow `if` statements as the only statement in `if` blocks without `else`.
   *
   * @see [no-lonely-if](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-lonely-if.md)
   */
  'unicorn/no-lonely-if': NoLonelyIfRuleConfig;
}
