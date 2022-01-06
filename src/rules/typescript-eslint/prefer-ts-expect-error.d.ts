import type { RuleConfig } from '../rule-config';

/**
 * Recommends using `@ts-expect-error` over `@ts-ignore`.
 *
 * @see [prefer-ts-expect-error](https://typescript-eslint.io/rules/prefer-ts-expect-error)
 */
export type PreferTsExpectErrorRuleConfig = RuleConfig<[]>;

/**
 * Recommends using `@ts-expect-error` over `@ts-ignore`.
 *
 * @see [prefer-ts-expect-error](https://typescript-eslint.io/rules/prefer-ts-expect-error)
 */
export interface PreferTsExpectErrorRule {
  /**
   * Recommends using `@ts-expect-error` over `@ts-ignore`.
   *
   * @see [prefer-ts-expect-error](https://typescript-eslint.io/rules/prefer-ts-expect-error)
   */
  '@typescript-eslint/prefer-ts-expect-error': PreferTsExpectErrorRuleConfig;
}
