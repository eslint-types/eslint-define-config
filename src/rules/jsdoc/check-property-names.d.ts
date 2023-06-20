import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CheckPropertyNamesOption {
  enableFixer?: boolean;
}

/**
 * Options.
 */
export type CheckPropertyNamesOptions = [CheckPropertyNamesOption?];

/**
 * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
 *
 * @see [check-property-names](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md#repos-sticky-header)
 */
export type CheckPropertyNamesRuleConfig =
  RuleConfig<CheckPropertyNamesOptions>;

/**
 * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
 *
 * @see [check-property-names](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md#repos-sticky-header)
 */
export interface CheckPropertyNamesRule {
  /**
   * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
   *
   * @see [check-property-names](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md#repos-sticky-header)
   */
  'jsdoc/check-property-names': CheckPropertyNamesRuleConfig;
}
