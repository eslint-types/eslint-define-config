import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CatchOrReturnOption {
  allowFinally?: boolean;
  allowThen?: boolean;
  terminationMethod?: string | string[];
}

/**
 * Options.
 */
export type CatchOrReturnOptions = [CatchOrReturnOption?];

/**
 *
 * @see [catch-or-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md)
 */
export type CatchOrReturnRuleConfig = RuleConfig<CatchOrReturnOptions>;

/**
 *
 * @see [catch-or-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md)
 */
export interface CatchOrReturnRule {
  /**
   *
   * @see [catch-or-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md)
   */
  'promise/catch-or-return': CatchOrReturnRuleConfig;
}
