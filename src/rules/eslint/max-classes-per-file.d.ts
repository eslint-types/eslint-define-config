import type { RuleConfig } from '../rule-config';

/**
 * Options.
 */
export type MaxClassesPerFileOptions = [number?];

/**
 * Enforce a maximum number of classes per file.
 *
 * @see [max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file)
 */
export type MaxClassesPerFileRuleConfig = RuleConfig<MaxClassesPerFileOptions>;

/**
 * Enforce a maximum number of classes per file.
 *
 * @see [max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file)
 */
export interface MaxClassesPerFileRule {
  /**
   * Enforce a maximum number of classes per file.
   *
   * @see [max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file)
   */
  'max-classes-per-file': MaxClassesPerFileRuleConfig;
}
