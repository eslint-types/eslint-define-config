import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ForbidElementsOption {
  forbid?: (
    | string
    | {
        element: string;
        message?: string;
      }
  )[];
}

/**
 * Options.
 */
export type ForbidElementsOptions = [ForbidElementsOption?];

/**
 * Disallow certain elements.
 *
 * @see [forbid-elements](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md)
 */
export type ForbidElementsRuleConfig = RuleConfig<ForbidElementsOptions>;

/**
 * Disallow certain elements.
 *
 * @see [forbid-elements](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md)
 */
export interface ForbidElementsRule {
  /**
   * Disallow certain elements.
   *
   * @see [forbid-elements](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md)
   */
  'react/forbid-elements': ForbidElementsRuleConfig;
}
