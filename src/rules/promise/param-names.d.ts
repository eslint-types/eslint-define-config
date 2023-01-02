import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ParamNamesOption {
  resolvePattern?: string;
  rejectPattern?: string;
}

/**
 * Options.
 */
export type ParamNamesOptions = [ParamNamesOption?];

/**
 *
 * @see [param-names](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/param-names.md)
 */
export type ParamNamesRuleConfig = RuleConfig<ParamNamesOptions>;

/**
 *
 * @see [param-names](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/param-names.md)
 */
export interface ParamNamesRule {
  /**
   *
   * @see [param-names](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/param-names.md)
   */
  'promise/param-names': ParamNamesRuleConfig;
}
