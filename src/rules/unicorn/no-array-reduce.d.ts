import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoArrayReduceOption {
  allowSimpleOperations?: boolean;
}

/**
 * Options.
 */
export type NoArrayReduceOptions = [NoArrayReduceOption?];

/**
 * Disallow `Array#reduce()` and `Array#reduceRight()`.
 *
 * @see [no-array-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-array-reduce.md)
 */
export type NoArrayReduceRuleConfig = RuleConfig<NoArrayReduceOptions>;

/**
 * Disallow `Array#reduce()` and `Array#reduceRight()`.
 *
 * @see [no-array-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-array-reduce.md)
 */
export interface NoArrayReduceRule {
  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   *
   * @see [no-array-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-array-reduce.md)
   */
  'unicorn/no-array-reduce': NoArrayReduceRuleConfig;
}
