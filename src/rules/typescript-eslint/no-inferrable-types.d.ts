import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoInferrableTypesOption {
  ignoreParameters?: boolean;
  ignoreProperties?: boolean;
}

/**
 * Options.
 */
export type NoInferrableTypesOptions = [NoInferrableTypesOption?];

/**
 * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
 *
 * @see [no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)
 */
export type NoInferrableTypesRuleConfig = RuleConfig<NoInferrableTypesOptions>;

/**
 * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
 *
 * @see [no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)
 */
export interface NoInferrableTypesRule {
  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
   *
   * @see [no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)
   */
  '@typescript-eslint/no-inferrable-types': NoInferrableTypesRuleConfig;
}
