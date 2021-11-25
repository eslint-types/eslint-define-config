import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnusedKeysOption {
  src?: string;
  extensions?: string[];
  enableFix?: boolean;
}

/**
 * Options.
 */
export type NoUnusedKeysOptions = [NoUnusedKeysOption?];

/**
 * Disallow unused localization keys.
 *
 *
 */
export type NoUnusedKeysRuleConfig = RuleConfig<NoUnusedKeysOptions>;

/**
 * Disallow unused localization keys.
 *
 *
 */
export interface NoUnusedKeysRule {
  /**
   * Disallow unused localization keys.
   *
   *
   */
  '@intlify/vue-i18n/no-unused-keys': NoUnusedKeysRuleConfig;
}
