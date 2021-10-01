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
 * Enforce consistent spacing before blocks.
 *
 * @see [space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)
 */
export type SpaceBeforeBlocksRuleConfig = RuleConfig<SpaceBeforeBlocksOptions>;

/**
 * Enforce consistent spacing before blocks.
 *
 * @see [space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)
 */
export interface SpaceBeforeBlocksRule {
  /**
   * Enforce consistent spacing before blocks.
   *
   * @see [space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)
   */
  'space-before-blocks': SpaceBeforeBlocksRuleConfig;
}
