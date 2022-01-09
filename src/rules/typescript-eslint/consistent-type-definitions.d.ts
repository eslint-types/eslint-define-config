import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ConsistentTypeDefinitionsOption = 'interface' | 'type';

/**
 * Options.
 */
export type ConsistentTypeDefinitionsOptions = [
  ConsistentTypeDefinitionsOption?,
];

/**
 * Consistent with type definition either `interface` or `type`.
 *
 * @see [consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)
 */
export type ConsistentTypeDefinitionsRuleConfig =
  RuleConfig<ConsistentTypeDefinitionsOptions>;

/**
 * Consistent with type definition either `interface` or `type`.
 *
 * @see [consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)
 */
export interface ConsistentTypeDefinitionsRule {
  /**
   * Consistent with type definition either `interface` or `type`.
   *
   * @see [consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)
   */
  '@typescript-eslint/consistent-type-definitions': ConsistentTypeDefinitionsRuleConfig;
}
