import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUnusedVarsOption = {
  /**
   * @see [vars](https://eslint.org/docs/rules/no-unused-vars#vars)
   */
  vars?: 'all' | 'local';
  /**
   * @see [varsIgnorePattern](https://eslint.org/docs/rules/no-unused-vars#varsignorepattern)
   */
  varsIgnorePattern?: string;
  /**
   * @see [ignoreRestSiblings](https://eslint.org/docs/rules/no-unused-vars#ignorerestsiblings)
   */
  ignoreRestSiblings?: boolean;
  /**
   * @see [args](https://eslint.org/docs/rules/no-unused-vars#args)
   */
  args?: 'after-used' | 'all' | 'none';
  /**
   * @see [argsIgnorePattern](https://eslint.org/docs/rules/no-unused-vars#argsignorepattern)
   */
  argsIgnorePattern?: string;
  /**
   * @see [caughtErrors](https://eslint.org/docs/rules/no-unused-vars#caughterrors)
   */
  caughtErrors?: 'all' | 'none';
  /**
   * @see [caughtErrorsIgnorePattern](https://eslint.org/docs/rules/no-unused-vars#caughterrorsignorepattern)
   */
  caughtErrorsIgnorePattern?: string;
};

/**
 * Options.
 */
export type NoUnusedVarsOptions = [NoUnusedVarsOption?];

/**
 * Disallow unused variables.
 *
 * @see [no-unused-vars](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md)
 */
export type NoUnusedVarsRuleConfig = RuleConfig<NoUnusedVarsOptions>;

/**
 * Disallow unused variables.
 *
 * @see [no-unused-vars](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md)
 */
export interface NoUnusedVarsRule {
  /**
   * Disallow unused variables.
   *
   * @see [no-unused-vars](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md)
   */
  '@typescript-eslint/no-unused-vars': NoUnusedVarsRuleConfig;
}
