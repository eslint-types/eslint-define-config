import type { SemiOptions } from '../eslint/semi';
import type { RuleConfig } from '../rule-config';

/**
 * Require or disallow semicolons instead of ASI.
 *
 * @see [semi](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/semi.md)
 */
export type SemiRuleConfig = RuleConfig<SemiOptions>;

/**
 * Require or disallow semicolons instead of ASI.
 *
 * @see [semi](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/semi.md)
 */
export interface SemiRule {
  /**
   * Require or disallow semicolons instead of ASI.
   *
   * @see [semi](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/semi.md)
   */
  '@typescript-eslint/semi': SemiRuleConfig;
}
