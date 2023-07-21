import type { RuleConfig } from '../rule-config';

/**
 * Disallow empty sequence entries.
 *
 * @see [no-empty-sequence-entry](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-sequence-entry.html)
 */
export type NoEmptySequenceEntryRuleConfig = RuleConfig<[]>;

/**
 * Disallow empty sequence entries.
 *
 * @see [no-empty-sequence-entry](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-sequence-entry.html)
 */
export interface NoEmptySequenceEntryRule {
  /**
   * Disallow empty sequence entries.
   *
   * @see [no-empty-sequence-entry](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-sequence-entry.html)
   */
  'yml/no-empty-sequence-entry': NoEmptySequenceEntryRuleConfig;
}
