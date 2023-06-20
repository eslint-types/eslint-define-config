import type { RuleConfig } from '../rule-config';

/**
 * Setting.
 */
export interface MaxLenSetting {
  code?: number;
  comments?: number;
  tabWidth?: number;
  ignorePattern?: string;
  ignoreComments?: boolean;
  ignoreStrings?: boolean;
  ignoreUrls?: boolean;
  ignoreTemplateLiterals?: boolean;
  ignoreRegExpLiterals?: boolean;
  ignoreTrailingComments?: boolean;
}

/**
 * Config.
 */
export type MaxLenConfig =
  | {
      code?: number;
      comments?: number;
      tabWidth?: number;
      ignorePattern?: string;
      ignoreComments?: boolean;
      ignoreStrings?: boolean;
      ignoreUrls?: boolean;
      ignoreTemplateLiterals?: boolean;
      ignoreRegExpLiterals?: boolean;
      ignoreTrailingComments?: boolean;
    }
  | number;

/**
 * Option.
 */
export type MaxLenOption =
  | {
      code?: number;
      comments?: number;
      tabWidth?: number;
      ignorePattern?: string;
      ignoreComments?: boolean;
      ignoreStrings?: boolean;
      ignoreUrls?: boolean;
      ignoreTemplateLiterals?: boolean;
      ignoreRegExpLiterals?: boolean;
      ignoreTrailingComments?: boolean;
    }
  | number;

/**
 * Options.
 */
export type MaxLenOptions = [MaxLenOption?, MaxLenConfig?, MaxLenSetting?];

/**
 * Enforce a maximum line length.
 *
 * @see [max-len](https://eslint.org/docs/latest/rules/max-len)
 */
export type MaxLenRuleConfig = RuleConfig<MaxLenOptions>;

/**
 * Enforce a maximum line length.
 *
 * @see [max-len](https://eslint.org/docs/latest/rules/max-len)
 */
export interface MaxLenRule {
  /**
   * Enforce a maximum line length.
   *
   * @see [max-len](https://eslint.org/docs/latest/rules/max-len)
   */
  'max-len': MaxLenRuleConfig;
}
