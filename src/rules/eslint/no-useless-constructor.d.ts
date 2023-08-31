import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Disallow unnecessary constructors.
 *
 * @see [no-useless-constructor](https://eslint.org/docs/latest/rules/no-useless-constructor)
 */
export type NoUselessConstructorRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary constructors.
 *
 * @see [no-useless-constructor](https://eslint.org/docs/latest/rules/no-useless-constructor)
 */
export interface NoUselessConstructorRule {
  /**
   * Disallow unnecessary constructors.
   *
   * @see [no-useless-constructor](https://eslint.org/docs/latest/rules/no-useless-constructor)
   */
  'no-useless-constructor': NoUselessConstructorRuleConfig;
}
