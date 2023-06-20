import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MaxClassesPerFileOption =
  | number
  | {
      ignoreExpressions?: boolean;
      max?: number;
    };

/**
 * Options.
 */
export type MaxClassesPerFileOptions = [MaxClassesPerFileOption?];

/**
 * Enforce a maximum number of classes per file.
 *
 * @see [max-classes-per-file](https://eslint.org/docs/latest/rules/max-classes-per-file)
 */
export type MaxClassesPerFileRuleConfig = RuleConfig<MaxClassesPerFileOptions>;

/**
 * Enforce a maximum number of classes per file.
 *
 * @see [max-classes-per-file](https://eslint.org/docs/latest/rules/max-classes-per-file)
 */
export interface MaxClassesPerFileRule {
  /**
   * Enforce a maximum number of classes per file.
   *
   * @see [max-classes-per-file](https://eslint.org/docs/latest/rules/max-classes-per-file)
   */
  'max-classes-per-file': MaxClassesPerFileRuleConfig;
}
