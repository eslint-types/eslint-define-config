import type { RuleConfig } from '../rule-config';

/**
 * Disallow escape sequences in identifiers.
 *
 * @see [no-escape-sequence-in-identifier](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-escape-sequence-in-identifier.html)
 */
export type NoEscapeSequenceInIdentifierRuleConfig = RuleConfig<[]>;

/**
 * Disallow escape sequences in identifiers.
 *
 * @see [no-escape-sequence-in-identifier](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-escape-sequence-in-identifier.html)
 */
export interface NoEscapeSequenceInIdentifierRule {
  /**
   * Disallow escape sequences in identifiers.
   *
   * @see [no-escape-sequence-in-identifier](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-escape-sequence-in-identifier.html)
   */
  'jsonc/no-escape-sequence-in-identifier': NoEscapeSequenceInIdentifierRuleConfig;
}
