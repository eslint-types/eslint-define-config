import type { RuleConfig } from '../rule-config';

/**
 * Disallow localization dynamic keys at localization methods.
 *
 *
 */
export type NoDynamicKeysRuleConfig = RuleConfig<[]>;

/**
 * Disallow localization dynamic keys at localization methods.
 *
 *
 */
export interface NoDynamicKeysRule {
  /**
   * Disallow localization dynamic keys at localization methods.
   *
   *
   */
  '@intlify/vue-i18n/no-dynamic-keys': NoDynamicKeysRuleConfig;
}
