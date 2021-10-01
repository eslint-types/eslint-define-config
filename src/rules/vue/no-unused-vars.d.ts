import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnusedVarsOption {
  ignorePattern?: string;
}

/**
 * Options.
 */
export type NoUnusedVarsOptions = [NoUnusedVarsOption?];

/**
 * Disallow unused variable definitions of v-for directives or scope attributes.
 *
 * @see [no-unused-vars](https://eslint.vuejs.org/rules/no-unused-vars.html)
 */
export type NoUnusedVarsRuleConfig = RuleConfig<NoUnusedVarsOptions>;

/**
 * Disallow unused variable definitions of v-for directives or scope attributes.
 *
 * @see [no-unused-vars](https://eslint.vuejs.org/rules/no-unused-vars.html)
 */
export interface NoUnusedVarsRule {
  /**
   * Disallow unused variable definitions of v-for directives or scope attributes.
   *
   * @see [no-unused-vars](https://eslint.vuejs.org/rules/no-unused-vars.html)
   */
  'vue/no-unused-vars': NoUnusedVarsRuleConfig;
}
