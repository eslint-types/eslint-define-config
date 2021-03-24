import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type SemiRuleConfig = RuleConfig<['always' | 'never' /* ... */]>;

/**
 *
 */
export interface SemiRule {
  /**
   * Require or disallow semicolons instead of ASI.
   *
   * @see [semi](https://eslint.org/docs/rules/semi)
   */
  semi: SemiRuleConfig;
}
