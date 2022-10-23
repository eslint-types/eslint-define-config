import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-as-default-member.md)
 */
export type NoNamedAsDefaultMemberRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-as-default-member.md)
 */
export interface NoNamedAsDefaultMemberRule {
  /**
   *
   * @see [no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-as-default-member.md)
   */
  'import/no-named-as-default-member': NoNamedAsDefaultMemberRuleConfig;
}
