import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxPascalCaseOption {
  allowAllCaps?: boolean;
  allowLeadingUnderscore?: boolean;
  allowNamespace?: boolean;
  /**
   * @minItems 0
   */
  ignore?: [] | [string];
}

/**
 * Options.
 */
export type JsxPascalCaseOptions = [JsxPascalCaseOption?];

/**
 * Enforce PascalCase for user-defined JSX components.
 *
 * @see [jsx-pascal-case](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md)
 */
export type JsxPascalCaseRuleConfig = RuleConfig<JsxPascalCaseOptions>;

/**
 * Enforce PascalCase for user-defined JSX components.
 *
 * @see [jsx-pascal-case](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md)
 */
export interface JsxPascalCaseRule {
  /**
   * Enforce PascalCase for user-defined JSX components.
   *
   * @see [jsx-pascal-case](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md)
   */
  'react/jsx-pascal-case': JsxPascalCaseRuleConfig;
}
