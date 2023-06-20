import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type GeneratorStarSpacingOption =
  | ('before' | 'after' | 'both' | 'neither')
  | {
      before?: boolean;
      after?: boolean;
      named?:
        | ('before' | 'after' | 'both' | 'neither')
        | {
            before?: boolean;
            after?: boolean;
          };
      anonymous?:
        | ('before' | 'after' | 'both' | 'neither')
        | {
            before?: boolean;
            after?: boolean;
          };
      method?:
        | ('before' | 'after' | 'both' | 'neither')
        | {
            before?: boolean;
            after?: boolean;
          };
    };

/**
 * Options.
 */
export type GeneratorStarSpacingOptions = [GeneratorStarSpacingOption?];

/**
 * Enforce consistent spacing around `*` operators in generator functions.
 *
 * @see [generator-star-spacing](https://eslint.org/docs/latest/rules/generator-star-spacing)
 */
export type GeneratorStarSpacingRuleConfig =
  RuleConfig<GeneratorStarSpacingOptions>;

/**
 * Enforce consistent spacing around `*` operators in generator functions.
 *
 * @see [generator-star-spacing](https://eslint.org/docs/latest/rules/generator-star-spacing)
 */
export interface GeneratorStarSpacingRule {
  /**
   * Enforce consistent spacing around `*` operators in generator functions.
   *
   * @see [generator-star-spacing](https://eslint.org/docs/latest/rules/generator-star-spacing)
   */
  'generator-star-spacing': GeneratorStarSpacingRuleConfig;
}
