import type { RuleConfig } from '../rule-config';

/**
 * Forbid use of exported name as property of default export.
 *
 * @see [no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-named-as-default-member.md)
 */
export type NoNamedAsDefaultMemberRuleConfig = RuleConfig<[]>;

/**
 * Forbid use of exported name as property of default export.
 *
 * @see [no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-named-as-default-member.md)
 */
export interface NoNamedAsDefaultMemberRule {
  /**
   * Forbid use of exported name as property of default export.
   *
   * @see [no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-named-as-default-member.md)
   */
  'import/no-named-as-default-member': NoNamedAsDefaultMemberRuleConfig;
}
