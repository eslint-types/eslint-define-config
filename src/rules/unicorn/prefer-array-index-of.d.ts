import type { RuleConfig } from '../rule-config';

/**
 * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
 *
 * @see [prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-array-index-of.md)
 */
export type PreferArrayIndexOfRuleConfig = RuleConfig<[]>;

/**
 * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
 *
 * @see [prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-array-index-of.md)
 */
export interface PreferArrayIndexOfRule {
  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   *
   * @see [prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-array-index-of.md)
   */
  'unicorn/prefer-array-index-of': PreferArrayIndexOfRuleConfig;
}
