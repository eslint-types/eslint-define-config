import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface LabelHasForOption {
  components?: string[];
  required?:
    | ('nesting' | 'id')
    | {
        /**
         * @minItems 0
         */
        some: ('nesting' | 'id')[];
        [k: string]: any;
      }
    | {
        /**
         * @minItems 0
         */
        every: ('nesting' | 'id')[];
        [k: string]: any;
      };
  allowChildren?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type LabelHasForOptions = [LabelHasForOption?];

/**
 * Enforce that `<label>` elements have the `htmlFor` prop.
 *
 * @deprecated
 *
 * @see [label-has-for](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/label-has-for.md)
 */
export type LabelHasForRuleConfig = RuleConfig<LabelHasForOptions>;

/**
 * Enforce that `<label>` elements have the `htmlFor` prop.
 *
 * @deprecated
 *
 * @see [label-has-for](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/label-has-for.md)
 */
export interface LabelHasForRule {
  /**
   * Enforce that `<label>` elements have the `htmlFor` prop.
   *
   * @deprecated
   *
   * @see [label-has-for](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/label-has-for.md)
   */
  'jsx-a11y/label-has-for': LabelHasForRuleConfig;
}
