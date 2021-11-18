import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary constructors.
 *
 * @see [no-useless-constructor](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-useless-constructor.md)
 */
export type NoUselessConstructorRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary constructors.
 *
 * @see [no-useless-constructor](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-useless-constructor.md)
 */
export interface NoUselessConstructorRule {
  /**
   * Disallow unnecessary constructors.
   *
   * @see [no-useless-constructor](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-useless-constructor.md)
   */
  '@typescript-eslint/no-useless-constructor': NoUselessConstructorRuleConfig;
}
