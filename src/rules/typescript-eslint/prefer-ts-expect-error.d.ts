import type { RuleConfig } from '../rule-config';

/**
 * Enforce using `@ts-expect-error` over `@ts-ignore`.
 *
 * @see [prefer-ts-expect-error](https://typescript-eslint.io/rules/prefer-ts-expect-error)
 */
export type PreferTsExpectErrorRuleConfig = RuleConfig<[]>;

/**
 * Enforce using `@ts-expect-error` over `@ts-ignore`.
 *
 * @see [prefer-ts-expect-error](https://typescript-eslint.io/rules/prefer-ts-expect-error)
 */
export interface PreferTsExpectErrorRule {
  /**
   * Enforce using `@ts-expect-error` over `@ts-ignore`.
   *
   * @see [prefer-ts-expect-error](https://typescript-eslint.io/rules/prefer-ts-expect-error)
   */
  '@typescript-eslint/prefer-ts-expect-error': PreferTsExpectErrorRuleConfig;
}
