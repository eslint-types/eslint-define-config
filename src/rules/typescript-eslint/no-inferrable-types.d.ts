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
 * @see [no-inferrable-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-inferrable-types.md)
 */
export type NoInferrableTypesRuleConfig = RuleConfig<NoInferrableTypesOptions>;

/**
 * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
 *
 * @see [no-inferrable-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-inferrable-types.md)
 */
export interface NoInferrableTypesRule {
  /**
   * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
   *
   * @see [no-inferrable-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-inferrable-types.md)
   */
  '@typescript-eslint/no-inferrable-types': NoInferrableTypesRuleConfig;
}
