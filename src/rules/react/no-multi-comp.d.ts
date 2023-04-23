import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMultiCompOption {
  ignoreStateless?: boolean;
}

/**
 * Options.
 */
export type NoMultiCompOptions = [NoMultiCompOption?];

/**
 * Disallow multiple component definition per file.
 *
 * @see [no-multi-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md)
 */
export type NoMultiCompRuleConfig = RuleConfig<NoMultiCompOptions>;

/**
 * Disallow multiple component definition per file.
 *
 * @see [no-multi-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md)
 */
export interface NoMultiCompRule {
  /**
   * Disallow multiple component definition per file.
   *
   * @see [no-multi-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md)
   */
  'react/no-multi-comp': NoMultiCompRuleConfig;
}
