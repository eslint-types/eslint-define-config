import type { RuleConfig } from '../rule-config';

/**
 * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
 *
 * @see [no-new-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-new-buffer.md)
 */
export type NoNewBufferRuleConfig = RuleConfig<[]>;

/**
 * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
 *
 * @see [no-new-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-new-buffer.md)
 */
export interface NoNewBufferRule {
  /**
   * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
   *
   * @see [no-new-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-new-buffer.md)
   */
  'unicorn/no-new-buffer': NoNewBufferRuleConfig;
}
