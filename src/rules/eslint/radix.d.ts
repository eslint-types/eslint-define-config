import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RadixOption = 'always' | 'as-needed';

/**
 * Options.
 */
export type RadixOptions = [RadixOption?];

/**
 * Enforce the consistent use of the radix argument when using `parseInt()`.
 *
 * @see [radix](https://eslint.org/docs/latest/rules/radix)
 */
export type RadixRuleConfig = RuleConfig<RadixOptions>;

/**
 * Enforce the consistent use of the radix argument when using `parseInt()`.
 *
 * @see [radix](https://eslint.org/docs/latest/rules/radix)
 */
export interface RadixRule {
  /**
   * Enforce the consistent use of the radix argument when using `parseInt()`.
   *
   * @see [radix](https://eslint.org/docs/latest/rules/radix)
   */
  radix: RadixRuleConfig;
}
