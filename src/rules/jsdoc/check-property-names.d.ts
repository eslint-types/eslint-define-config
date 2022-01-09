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
 * @see [check-property-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-property-names)
 */
export type CheckPropertyNamesRuleConfig =
  RuleConfig<CheckPropertyNamesOptions>;

/**
 * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
 *
 * @see [check-property-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-property-names)
 */
export interface CheckPropertyNamesRule {
  /**
   * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
   *
   * @see [check-property-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-property-names)
   */
  'jsdoc/check-property-names': CheckPropertyNamesRuleConfig;
}
