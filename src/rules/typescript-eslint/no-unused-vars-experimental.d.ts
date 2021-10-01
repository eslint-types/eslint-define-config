import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnusedVarsExperimentalOption {
  ignoredNamesRegex?: string | false;
  ignoreArgsIfArgsAfterAreUsed?: boolean;
}

/**
 * Options.
 */
export type NoUnusedVarsExperimentalOptions = [NoUnusedVarsExperimentalOption?];

/**
 * Disallow unused variables and arguments.
 *
 * @see [no-unused-vars-experimental](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md)
 */
export type NoUnusedVarsExperimentalRuleConfig = RuleConfig<NoUnusedVarsExperimentalOptions>;

/**
 * Disallow unused variables and arguments.
 *
 * @see [no-unused-vars-experimental](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md)
 */
export interface NoUnusedVarsExperimentalRule {
  /**
   * Disallow unused variables and arguments.
   *
   * @see [no-unused-vars-experimental](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md)
   */
  '@typescript-eslint/no-unused-vars-experimental': NoUnusedVarsExperimentalRuleConfig;
}
