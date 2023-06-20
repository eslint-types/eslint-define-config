import type { RuleConfig } from '../rule-config';

/**
 * Disallow `await` inside of loops.
 *
 * @see [no-await-in-loop](https://eslint.org/docs/latest/rules/no-await-in-loop)
 */
export type NoAwaitInLoopRuleConfig = RuleConfig<[]>;

/**
 * Disallow `await` inside of loops.
 *
 * @see [no-await-in-loop](https://eslint.org/docs/latest/rules/no-await-in-loop)
 */
export interface NoAwaitInLoopRule {
  /**
   * Disallow `await` inside of loops.
   *
   * @see [no-await-in-loop](https://eslint.org/docs/latest/rules/no-await-in-loop)
   */
  'no-await-in-loop': NoAwaitInLoopRuleConfig;
}
