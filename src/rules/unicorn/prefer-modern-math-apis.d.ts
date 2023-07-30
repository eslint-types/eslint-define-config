import type { RuleConfig } from '../rule-config';

/**
 * Prefer modern `Math` APIs over legacy patterns.
 *
 * @see [prefer-modern-math-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-modern-math-apis.md)
 */
export type PreferModernMathApisRuleConfig = RuleConfig<[]>;

/**
 * Prefer modern `Math` APIs over legacy patterns.
 *
 * @see [prefer-modern-math-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-modern-math-apis.md)
 */
export interface PreferModernMathApisRule {
  /**
   * Prefer modern `Math` APIs over legacy patterns.
   *
   * @see [prefer-modern-math-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-modern-math-apis.md)
   */
  'unicorn/prefer-modern-math-apis': PreferModernMathApisRuleConfig;
}
