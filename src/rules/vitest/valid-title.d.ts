import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ValidTitleOption {
  ignoreTypeOfDescribeName?: boolean;
  allowArguments?: boolean;
  disallowedWords?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type ValidTitleOptions = [ValidTitleOption?];

/**
 * Enforce valid titles.
 *
 * @see [valid-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md)
 */
export type ValidTitleRuleConfig = RuleConfig<ValidTitleOptions>;

/**
 * Enforce valid titles.
 *
 * @see [valid-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md)
 */
export interface ValidTitleRule {
  /**
   * Enforce valid titles.
   *
   * @see [valid-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md)
   */
  'vitest/valid-title': ValidTitleRuleConfig;
}
