import type { RuleConfig } from '../rule-config';

/**
 * Disallow empty files.
 *
 * @see [no-empty-file](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-empty-file.md)
 */
export type NoEmptyFileRuleConfig = RuleConfig<[]>;

/**
 * Disallow empty files.
 *
 * @see [no-empty-file](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-empty-file.md)
 */
export interface NoEmptyFileRule {
  /**
   * Disallow empty files.
   *
   * @see [no-empty-file](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-empty-file.md)
   */
  'unicorn/no-empty-file': NoEmptyFileRuleConfig;
}
