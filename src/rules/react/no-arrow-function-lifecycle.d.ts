import type { RuleConfig } from '../rule-config';

/**
 * Lifecycle methods should be methods on the prototype, not class fields.
 *
 * @see [no-arrow-function-lifecycle](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-arrow-function-lifecycle.md)
 */
export type NoArrowFunctionLifecycleRuleConfig = RuleConfig<[]>;

/**
 * Lifecycle methods should be methods on the prototype, not class fields.
 *
 * @see [no-arrow-function-lifecycle](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-arrow-function-lifecycle.md)
 */
export interface NoArrowFunctionLifecycleRule {
  /**
   * Lifecycle methods should be methods on the prototype, not class fields.
   *
   * @see [no-arrow-function-lifecycle](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-arrow-function-lifecycle.md)
   */
  'react/no-arrow-function-lifecycle': NoArrowFunctionLifecycleRuleConfig;
}
