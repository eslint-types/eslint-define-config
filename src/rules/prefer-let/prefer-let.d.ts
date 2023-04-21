import type { RuleConfig } from '../rule-config';

/**
 * Encourage semantic of usage of `let` and `const`.
 *
 * @see [prefer-let](https://github.com/thefrontside/javascript/blob/v3/packages/eslint-plugin-prefer-let/README.md)
 */
export type PreferLetRuleConfig = RuleConfig<[]>;

/**
 * Encourage semantic of usage of `let` and `const`.
 *
 * @see [prefer-let](https://github.com/thefrontside/javascript/blob/v3/packages/eslint-plugin-prefer-let/README.md)
 */
export interface PreferLetRule {
  /**
   * Encourage semantic of usage of `let` and `const`.
   *
   * @see [prefer-let](https://github.com/thefrontside/javascript/blob/v3/packages/eslint-plugin-prefer-let/README.md)
   */
  'prefer-let/prefer-let': PreferLetRuleConfig;
}
