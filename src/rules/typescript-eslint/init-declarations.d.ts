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
      },
    ];

/**
 * Options.
 */
export type InitDeclarationsOptions = InitDeclarationsOption;

/**
 * Require or disallow initialization in variable declarations.
 *
 * @see [init-declarations](https://typescript-eslint.io/rules/init-declarations)
 */
export type InitDeclarationsRuleConfig = RuleConfig<InitDeclarationsOptions>;

/**
 * Require or disallow initialization in variable declarations.
 *
 * @see [init-declarations](https://typescript-eslint.io/rules/init-declarations)
 */
export interface InitDeclarationsRule {
  /**
   * Require or disallow initialization in variable declarations.
   *
   * @see [init-declarations](https://typescript-eslint.io/rules/init-declarations)
   */
  '@typescript-eslint/init-declarations': InitDeclarationsRuleConfig;
}
