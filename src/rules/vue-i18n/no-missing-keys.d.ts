import type { RuleConfig } from '../rule-config';

/**
 * Disallow missing locale message key at localization methods.
 *
 *
 */
export type NoMissingKeysRuleConfig = RuleConfig<[]>;

/**
 * Disallow missing locale message key at localization methods.
 *
 *
 */
export interface NoMissingKeysRule {
  /**
   * Disallow missing locale message key at localization methods.
   *
   *
   */
  '@intlify/vue-i18n/no-missing-keys': NoMissingKeysRuleConfig;
}
