import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRedundantRolesOption {
  [k: string]: string[];
}

/**
 * Options.
 */
export type NoRedundantRolesOptions = [NoRedundantRolesOption?];

/**
 * Enforce explicit role property is not the same as implicit/default role property on element.
 *
 * @see [no-redundant-roles](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-redundant-roles.md)
 */
export type NoRedundantRolesRuleConfig = RuleConfig<NoRedundantRolesOptions>;

/**
 * Enforce explicit role property is not the same as implicit/default role property on element.
 *
 * @see [no-redundant-roles](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-redundant-roles.md)
 */
export interface NoRedundantRolesRule {
  /**
   * Enforce explicit role property is not the same as implicit/default role property on element.
   *
   * @see [no-redundant-roles](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-redundant-roles.md)
   */
  'jsx-a11y/no-redundant-roles': NoRedundantRolesRuleConfig;
}
