import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ForbidDomPropsOption {
  forbid?: (
    | string
    | {
        propName?: string;
        disallowedFor?: string[];
        message?: string;
        [k: string]: any;
      }
  )[];
}

/**
 * Options.
 */
export type ForbidDomPropsOptions = [ForbidDomPropsOption?];

/**
 * Disallow certain props on DOM Nodes.
 *
 * @see [forbid-dom-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md)
 */
export type ForbidDomPropsRuleConfig = RuleConfig<ForbidDomPropsOptions>;

/**
 * Disallow certain props on DOM Nodes.
 *
 * @see [forbid-dom-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md)
 */
export interface ForbidDomPropsRule {
  /**
   * Disallow certain props on DOM Nodes.
   *
   * @see [forbid-dom-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md)
   */
  'react/forbid-dom-props': ForbidDomPropsRuleConfig;
}
