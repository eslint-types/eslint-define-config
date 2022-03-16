import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUselessPathSegmentsOption {
  commonjs?: boolean;
  noUselessIndex?: boolean;
}

/**
 * Options.
 */
export type NoUselessPathSegmentsOptions = [NoUselessPathSegmentsOption?];

/**
 *
 *
 * @see [no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-useless-path-segments.md)
 */
export type NoUselessPathSegmentsRuleConfig =
  RuleConfig<NoUselessPathSegmentsOptions>;

/**
 *
 *
 * @see [no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-useless-path-segments.md)
 */
export interface NoUselessPathSegmentsRule {
  /**
   *
   *
   * @see [no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-useless-path-segments.md)
   */
  'import/no-useless-path-segments': NoUselessPathSegmentsRuleConfig;
}
