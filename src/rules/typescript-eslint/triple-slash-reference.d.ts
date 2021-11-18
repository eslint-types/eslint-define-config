import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface TripleSlashReferenceOption {
  lib?: 'always' | 'never';
  path?: 'always' | 'never';
  types?: 'always' | 'never' | 'prefer-import';
}

/**
 * Options.
 */
export type TripleSlashReferenceOptions = [TripleSlashReferenceOption?];

/**
 * Sets preference level for triple slash directives versus ES6-style import declarations.
 *
 * @see [triple-slash-reference](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/triple-slash-reference.md)
 */
export type TripleSlashReferenceRuleConfig = RuleConfig<TripleSlashReferenceOptions>;

/**
 * Sets preference level for triple slash directives versus ES6-style import declarations.
 *
 * @see [triple-slash-reference](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/triple-slash-reference.md)
 */
export interface TripleSlashReferenceRule {
  /**
   * Sets preference level for triple slash directives versus ES6-style import declarations.
   *
   * @see [triple-slash-reference](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/triple-slash-reference.md)
   */
  '@typescript-eslint/triple-slash-reference': TripleSlashReferenceRuleConfig;
}
