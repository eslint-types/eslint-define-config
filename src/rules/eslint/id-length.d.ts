import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface IdLengthOption {
  min?: number;
  max?: number;
  exceptions?: string[];
  exceptionPatterns?: string[];
  properties?: 'always' | 'never';
}

/**
 * Options.
 */
export type IdLengthOptions = [IdLengthOption?];

/**
 * Enforce minimum and maximum identifier lengths.
 *
 * @see [id-length](https://eslint.org/docs/latest/rules/id-length)
 */
export type IdLengthRuleConfig = RuleConfig<IdLengthOptions>;

/**
 * Enforce minimum and maximum identifier lengths.
 *
 * @see [id-length](https://eslint.org/docs/latest/rules/id-length)
 */
export interface IdLengthRule {
  /**
   * Enforce minimum and maximum identifier lengths.
   *
   * @see [id-length](https://eslint.org/docs/latest/rules/id-length)
   */
  'id-length': IdLengthRuleConfig;
}
