import type { RuleConfig } from '../rule-config';

/**
 * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
 *
 * @see [no-import-type-side-effects](https://typescript-eslint.io/rules/no-import-type-side-effects)
 */
export type NoImportTypeSideEffectsRuleConfig = RuleConfig<[]>;

/**
 * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
 *
 * @see [no-import-type-side-effects](https://typescript-eslint.io/rules/no-import-type-side-effects)
 */
export interface NoImportTypeSideEffectsRule {
  /**
   * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
   *
   * @see [no-import-type-side-effects](https://typescript-eslint.io/rules/no-import-type-side-effects)
   */
  '@typescript-eslint/no-import-type-side-effects': NoImportTypeSideEffectsRuleConfig;
}
