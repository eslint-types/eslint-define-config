import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary constructors.
 *
 * @see [no-useless-constructor](https://typescript-eslint.io/rules/no-useless-constructor)
 */
export type NoUselessConstructorRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary constructors.
 *
 * @see [no-useless-constructor](https://typescript-eslint.io/rules/no-useless-constructor)
 */
export interface NoUselessConstructorRule {
  /**
   * Disallow unnecessary constructors.
   *
   * @see [no-useless-constructor](https://typescript-eslint.io/rules/no-useless-constructor)
   */
  '@typescript-eslint/no-useless-constructor': NoUselessConstructorRuleConfig;
}
