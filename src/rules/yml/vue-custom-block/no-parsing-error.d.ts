import type { RuleConfig } from '../../rule-config';

/**
 * Disallow parsing errors in Vue custom blocks.
 *
 * @see [vue-custom-block/no-parsing-error](https://ota-meshi.github.io/eslint-plugin-yml/rules/vue-custom-block/no-parsing-error.html)
 */
export type VueCustomBlockNoParsingErrorRuleConfig = RuleConfig<[]>;

/**
 * Disallow parsing errors in Vue custom blocks.
 *
 * @see [vue-custom-block/no-parsing-error](https://ota-meshi.github.io/eslint-plugin-yml/rules/vue-custom-block/no-parsing-error.html)
 */
export interface VueCustomBlockNoParsingErrorRule {
  /**
   * Disallow parsing errors in Vue custom blocks.
   *
   * @see [vue-custom-block/no-parsing-error](https://ota-meshi.github.io/eslint-plugin-yml/rules/vue-custom-block/no-parsing-error.html)
   */
  'yml/vue-custom-block/no-parsing-error': VueCustomBlockNoParsingErrorRuleConfig;
}
