import type { RuleConfig } from '../rule-config';

/**
 * Disallow `if` statements as the only statement in `else` blocks.
 *
 * @see [no-lonely-if](https://eslint.org/docs/latest/rules/no-lonely-if)
 */
export type NoLonelyIfRuleConfig = RuleConfig<[]>;

/**
 * Disallow `if` statements as the only statement in `else` blocks.
 *
 * @see [no-lonely-if](https://eslint.org/docs/latest/rules/no-lonely-if)
 */
export interface NoLonelyIfRule {
  /**
   * Disallow `if` statements as the only statement in `else` blocks.
   *
   * @see [no-lonely-if](https://eslint.org/docs/latest/rules/no-lonely-if)
   */
  'no-lonely-if': NoLonelyIfRuleConfig;
}
