import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ArrowBodyStyleOption =
  | []
  | ['always' | 'never']
  | []
  | ['as-needed']
  | [
      'as-needed',
      {
        requireReturnForObjectLiteral?: boolean;
      },
    ];

/**
 * Options.
 */
export type ArrowBodyStyleOptions = ArrowBodyStyleOption;

/**
 * Require braces around arrow function bodies.
 *
 * @see [arrow-body-style](https://eslint.org/docs/latest/rules/arrow-body-style)
 */
export type ArrowBodyStyleRuleConfig = RuleConfig<ArrowBodyStyleOptions>;

/**
 * Require braces around arrow function bodies.
 *
 * @see [arrow-body-style](https://eslint.org/docs/latest/rules/arrow-body-style)
 */
export interface ArrowBodyStyleRule {
  /**
   * Require braces around arrow function bodies.
   *
   * @see [arrow-body-style](https://eslint.org/docs/latest/rules/arrow-body-style)
   */
  'arrow-body-style': ArrowBodyStyleRuleConfig;
}
