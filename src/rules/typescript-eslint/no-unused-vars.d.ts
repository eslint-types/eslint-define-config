import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUnusedVarsOption =
  | ('all' | 'local')
  | {
      vars?: 'all' | 'local';
      varsIgnorePattern?: string;
      args?: 'all' | 'after-used' | 'none';
      ignoreRestSiblings?: boolean;
      argsIgnorePattern?: string;
      caughtErrors?: 'all' | 'none';
      caughtErrorsIgnorePattern?: string;
    };

/**
 * Options.
 */
export type NoUnusedVarsOptions = [NoUnusedVarsOption?];

/**
 * Disallow unused variables.
 *
 * @see [no-unused-vars](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unused-vars.md)
 */
export type NoUnusedVarsRuleConfig = RuleConfig<NoUnusedVarsOptions>;

/**
 * Disallow unused variables.
 *
 * @see [no-unused-vars](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unused-vars.md)
 */
export interface NoUnusedVarsRule {
  /**
   * Disallow unused variables.
   *
   * @see [no-unused-vars](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unused-vars.md)
   */
  '@typescript-eslint/no-unused-vars': NoUnusedVarsRuleConfig;
}
