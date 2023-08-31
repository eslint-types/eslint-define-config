import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Forbid use of exported name as property of default export.
 *
 * @see [no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-named-as-default-member.md)
 */
export type NoNamedAsDefaultMemberRuleConfig = RuleConfig<[]>;

/**
 * Forbid use of exported name as property of default export.
 *
 * @see [no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-named-as-default-member.md)
 */
export interface NoNamedAsDefaultMemberRule {
  /**
   * Forbid use of exported name as property of default export.
   *
   * @see [no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-named-as-default-member.md)
   */
  'import/no-named-as-default-member': NoNamedAsDefaultMemberRuleConfig;
}
