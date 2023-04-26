import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AriaPropsOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type AriaPropsOptions = [AriaPropsOption?];

/**
 * Enforce all `aria-*` props are valid.
 *
 * @see [aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-props.md)
 */
export type AriaPropsRuleConfig = RuleConfig<AriaPropsOptions>;

/**
 * Enforce all `aria-*` props are valid.
 *
 * @see [aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-props.md)
 */
export interface AriaPropsRule {
  /**
   * Enforce all `aria-*` props are valid.
   *
   * @see [aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-props.md)
   */
  'jsx-a11y/aria-props': AriaPropsRuleConfig;
}
