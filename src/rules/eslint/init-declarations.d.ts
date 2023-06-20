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
 * @see [init-declarations](https://eslint.org/docs/latest/rules/init-declarations)
 */
export type InitDeclarationsRuleConfig = RuleConfig<InitDeclarationsOptions>;

/**
 * Require or disallow initialization in variable declarations.
 *
 * @see [init-declarations](https://eslint.org/docs/latest/rules/init-declarations)
 */
export interface InitDeclarationsRule {
  /**
   * Require or disallow initialization in variable declarations.
   *
   * @see [init-declarations](https://eslint.org/docs/latest/rules/init-declarations)
   */
  'init-declarations': InitDeclarationsRuleConfig;
}
