import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type InitDeclarationsOption =
  | []
  | ['always']
  | []
  | ['never']
  | [
      'never',
      {
        ignoreForLoopInit?: boolean;
      }
    ];

/**
 * Options.
 */
export type InitDeclarationsOptions = InitDeclarationsOption;

/**
 * Require or disallow initialization in variable declarations.
 *
 * @see [init-declarations](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/init-declarations.md)
 */
export type InitDeclarationsRuleConfig = RuleConfig<InitDeclarationsOptions>;

/**
 * Require or disallow initialization in variable declarations.
 *
 * @see [init-declarations](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/init-declarations.md)
 */
export interface InitDeclarationsRule {
  /**
   * Require or disallow initialization in variable declarations.
   *
   * @see [init-declarations](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/init-declarations.md)
   */
  '@typescript-eslint/init-declarations': InitDeclarationsRuleConfig;
}
