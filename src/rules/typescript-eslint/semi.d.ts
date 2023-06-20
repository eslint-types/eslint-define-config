import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SemiOption =
  | []
  | ['never']
  | [
      'never',
      {
        beforeStatementContinuationChars?: 'always' | 'any' | 'never';
      },
    ]
  | []
  | ['always']
  | [
      'always',
      {
        omitLastInOneLineBlock?: boolean;
        omitLastInOneLineClassBody?: boolean;
      },
    ];

/**
 * Options.
 */
export type SemiOptions = SemiOption;

/**
 * Require or disallow semicolons instead of ASI.
 *
 * @see [semi](https://typescript-eslint.io/rules/semi)
 */
export type SemiRuleConfig = RuleConfig<SemiOptions>;

/**
 * Require or disallow semicolons instead of ASI.
 *
 * @see [semi](https://typescript-eslint.io/rules/semi)
 */
export interface SemiRule {
  /**
   * Require or disallow semicolons instead of ASI.
   *
   * @see [semi](https://typescript-eslint.io/rules/semi)
   */
  '@typescript-eslint/semi': SemiRuleConfig;
}
