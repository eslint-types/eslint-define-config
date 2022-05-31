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
 * Disallow certain triple slash directives in favor of ES6-style import declarations.
 *
 * @see [triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)
 */
export type TripleSlashReferenceRuleConfig =
  RuleConfig<TripleSlashReferenceOptions>;

/**
 * Disallow certain triple slash directives in favor of ES6-style import declarations.
 *
 * @see [triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)
 */
export interface TripleSlashReferenceRule {
  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations.
   *
   * @see [triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)
   */
  '@typescript-eslint/triple-slash-reference': TripleSlashReferenceRuleConfig;
}
