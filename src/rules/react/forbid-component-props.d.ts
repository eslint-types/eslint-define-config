import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ForbidComponentPropsOption {
  forbid?: (
    | string
    | {
        propName?: string;
        allowedFor?: string[];
        message?: string;
      }
    | {
        propName?: string;
        /**
         * @minItems 1
         */
        disallowedFor: [string, ...string[]];
        message?: string;
      }
  )[];
  [k: string]: any;
}

/**
 * Options.
 */
export type ForbidComponentPropsOptions = [ForbidComponentPropsOption?];

/**
 * Disallow certain props on components.
 *
 * @see [forbid-component-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md)
 */
export type ForbidComponentPropsRuleConfig =
  RuleConfig<ForbidComponentPropsOptions>;

/**
 * Disallow certain props on components.
 *
 * @see [forbid-component-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md)
 */
export interface ForbidComponentPropsRule {
  /**
   * Disallow certain props on components.
   *
   * @see [forbid-component-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md)
   */
  'react/forbid-component-props': ForbidComponentPropsRuleConfig;
}
