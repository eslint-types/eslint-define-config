import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoInferrableTypesOption = {
  /**
   * @default false
   *
   * @see [ignoreParameters](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md#ignoreparameters)
   */
  ignoreParameters?: boolean;
  /**
   * @default false
   *
   * @see [ignoreProperties](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md#ignoreproperties)
   */
  ignoreProperties?: boolean;
};

/**
 * Options.
 */
export type NoInferrableTypesOptions = [NoInferrableTypesOption?];

/**
 * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
 *
 * @see [no-inferrable-types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md)
 */
export type NoInferrableTypesRuleConfig = RuleConfig<NoInferrableTypesOptions>;

/**
 * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
 *
 * @see [no-inferrable-types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md)
 */
export interface NoInferrableTypesRule {
  /**
   * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
   *
   * @see [no-inferrable-types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md)
   */
  '@typescript-eslint/no-inferrable-types': NoInferrableTypesRuleConfig;
}
