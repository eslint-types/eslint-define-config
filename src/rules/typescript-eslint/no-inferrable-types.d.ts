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
 * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
 *
 * @see [no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)
 */
export type NoInferrableTypesRuleConfig = RuleConfig<NoInferrableTypesOptions>;

/**
 * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
 *
 * @see [no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)
 */
export interface NoInferrableTypesRule {
  /**
   * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
   *
   * @see [no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)
   */
  '@typescript-eslint/no-inferrable-types': NoInferrableTypesRuleConfig;
}
