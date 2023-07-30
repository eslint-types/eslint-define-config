import type { RuleConfig } from '../rule-config';

/**
 *
 * @deprecated
 *
 * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#import-index)
 */
export type ImportIndexRuleConfig = RuleConfig<[]>;

/**
 *
 * @deprecated
 *
 * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#import-index)
 */
export interface ImportIndexRule {
  /**
   *
   * @deprecated
   *
   * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#import-index)
   */
  'unicorn/import-index': ImportIndexRuleConfig;
}
