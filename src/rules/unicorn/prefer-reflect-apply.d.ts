import type { RuleConfig } from '../rule-config';

/**
 * Prefer `Reflect.apply()` over `Function#apply()`.
 *
 * @see [prefer-reflect-apply](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-reflect-apply.md)
 */
export type PreferReflectApplyRuleConfig = RuleConfig<[]>;

/**
 * Prefer `Reflect.apply()` over `Function#apply()`.
 *
 * @see [prefer-reflect-apply](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-reflect-apply.md)
 */
export interface PreferReflectApplyRule {
  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   *
   * @see [prefer-reflect-apply](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-reflect-apply.md)
   */
  'unicorn/prefer-reflect-apply': PreferReflectApplyRuleConfig;
}
