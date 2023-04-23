import type { RuleConfig } from '../rule-config';

/**
 * Disallow usage of isMounted.
 *
 * @see [no-is-mounted](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md)
 */
export type NoIsMountedRuleConfig = RuleConfig<[]>;

/**
 * Disallow usage of isMounted.
 *
 * @see [no-is-mounted](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md)
 */
export interface NoIsMountedRule {
  /**
   * Disallow usage of isMounted.
   *
   * @see [no-is-mounted](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md)
   */
  'react/no-is-mounted': NoIsMountedRuleConfig;
}
