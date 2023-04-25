import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface LabelHasAssociatedControlOption {
  labelComponents?: string[];
  labelAttributes?: string[];
  controlComponents?: string[];
  /**
   * Assert that the label has htmlFor, a nested label, both or either
   */
  assert?: 'htmlFor' | 'nesting' | 'both' | 'either';
  /**
   * JSX tree depth limit to check for accessible label
   */
  depth?: number;
  [k: string]: any;
}

/**
 * Options.
 */
export type LabelHasAssociatedControlOptions = [
  LabelHasAssociatedControlOption?,
];

/**
 * Enforce that a `label` tag has a text label and an associated control.
 *
 * @see [label-has-associated-control](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md)
 */
export type LabelHasAssociatedControlRuleConfig =
  RuleConfig<LabelHasAssociatedControlOptions>;

/**
 * Enforce that a `label` tag has a text label and an associated control.
 *
 * @see [label-has-associated-control](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md)
 */
export interface LabelHasAssociatedControlRule {
  /**
   * Enforce that a `label` tag has a text label and an associated control.
   *
   * @see [label-has-associated-control](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md)
   */
  'jsx-a11y/label-has-associated-control': LabelHasAssociatedControlRuleConfig;
}
