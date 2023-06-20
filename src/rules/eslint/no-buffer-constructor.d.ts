import type { RuleConfig } from '../rule-config';

/**
 * Disallow use of the `Buffer()` constructor.
 *
 * @deprecated
 *
 * @see [no-buffer-constructor](https://eslint.org/docs/latest/rules/no-buffer-constructor)
 */
export type NoBufferConstructorRuleConfig = RuleConfig<[]>;

/**
 * Disallow use of the `Buffer()` constructor.
 *
 * @deprecated
 *
 * @see [no-buffer-constructor](https://eslint.org/docs/latest/rules/no-buffer-constructor)
 */
export interface NoBufferConstructorRule {
  /**
   * Disallow use of the `Buffer()` constructor.
   *
   * @deprecated
   *
   * @see [no-buffer-constructor](https://eslint.org/docs/latest/rules/no-buffer-constructor)
   */
  'no-buffer-constructor': NoBufferConstructorRuleConfig;
}
