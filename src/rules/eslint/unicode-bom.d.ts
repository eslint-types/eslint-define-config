import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type UnicodeBomOption = 'always' | 'never';

/**
 * Options.
 */
export type UnicodeBomOptions = [UnicodeBomOption?];

/**
 * Require or disallow Unicode byte order mark (BOM).
 *
 * @see [unicode-bom](https://eslint.org/docs/latest/rules/unicode-bom)
 */
export type UnicodeBomRuleConfig = RuleConfig<UnicodeBomOptions>;

/**
 * Require or disallow Unicode byte order mark (BOM).
 *
 * @see [unicode-bom](https://eslint.org/docs/latest/rules/unicode-bom)
 */
export interface UnicodeBomRule {
  /**
   * Require or disallow Unicode byte order mark (BOM).
   *
   * @see [unicode-bom](https://eslint.org/docs/latest/rules/unicode-bom)
   */
  'unicode-bom': UnicodeBomRuleConfig;
}
