import type { RuleConfig } from '../rule-config';

/**
 * Disallow empty mapping values.
 *
 * @see [no-empty-mapping-value](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-mapping-value.html)
 */
export type NoEmptyMappingValueRuleConfig = RuleConfig<[]>;

/**
 * Disallow empty mapping values.
 *
 * @see [no-empty-mapping-value](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-mapping-value.html)
 */
export interface NoEmptyMappingValueRule {
  /**
   * Disallow empty mapping values.
   *
   * @see [no-empty-mapping-value](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-mapping-value.html)
   */
  'yml/no-empty-mapping-value': NoEmptyMappingValueRuleConfig;
}
