import type { RuleConfig } from '../rule-config';

/**
 * Recommends using `@ts-expect-error` over `@ts-ignore`.
 *
 * @see [prefer-ts-expect-error](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md)
 */
export type PreferTsExpectErrorRuleConfig = RuleConfig<[]>;

/**
 * Recommends using `@ts-expect-error` over `@ts-ignore`.
 *
 * @see [prefer-ts-expect-error](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md)
 */
export interface PreferTsExpectErrorRule {
  /**
   * Recommends using `@ts-expect-error` over `@ts-ignore`.
   *
   * @see [prefer-ts-expect-error](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md)
   */
  '@typescript-eslint/prefer-ts-expect-error': PreferTsExpectErrorRuleConfig;
}
