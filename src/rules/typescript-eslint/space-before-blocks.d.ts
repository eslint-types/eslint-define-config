import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SpaceBeforeBlocksOption =
  | ('always' | 'never')
  | {
      keywords?: 'always' | 'never' | 'off';
      functions?: 'always' | 'never' | 'off';
      classes?: 'always' | 'never' | 'off';
    };

/**
 * Options.
 */
export type SpaceBeforeBlocksOptions = [SpaceBeforeBlocksOption?];

/**
 * Enforces consistent spacing before blocks.
 *
 * @see [space-before-blocks](https://typescript-eslint.io/rules/space-before-blocks)
 */
export type SpaceBeforeBlocksRuleConfig = RuleConfig<SpaceBeforeBlocksOptions>;

/**
 * Enforces consistent spacing before blocks.
 *
 * @see [space-before-blocks](https://typescript-eslint.io/rules/space-before-blocks)
 */
export interface SpaceBeforeBlocksRule {
  /**
   * Enforces consistent spacing before blocks.
   *
   * @see [space-before-blocks](https://typescript-eslint.io/rules/space-before-blocks)
   */
  '@typescript-eslint/space-before-blocks': SpaceBeforeBlocksRuleConfig;
}
