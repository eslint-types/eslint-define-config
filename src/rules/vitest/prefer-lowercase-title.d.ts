import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferLowercaseTitleOption {
  ignore?: ('describe' | 'test' | 'it')[];
  allowedPrefixes?: string[];
  ignoreTopLevelDescribe?: boolean;
  lowercaseFirstCharacterOnly?: boolean;
}

/**
 * Options.
 */
export type PreferLowercaseTitleOptions = [PreferLowercaseTitleOption?];

/**
 * Enforce lowercase titles.
 *
 * @see [prefer-lowercase-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md)
 */
export type PreferLowercaseTitleRuleConfig =
  RuleConfig<PreferLowercaseTitleOptions>;

/**
 * Enforce lowercase titles.
 *
 * @see [prefer-lowercase-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md)
 */
export interface PreferLowercaseTitleRule {
  /**
   * Enforce lowercase titles.
   *
   * @see [prefer-lowercase-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md)
   */
  'vitest/prefer-lowercase-title': PreferLowercaseTitleRuleConfig;
}
