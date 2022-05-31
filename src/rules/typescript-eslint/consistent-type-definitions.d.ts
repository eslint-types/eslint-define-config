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
 * Enforce type definitions to consistently use either `interface` or `type`.
 *
 * @see [consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)
 */
export type ConsistentTypeDefinitionsRuleConfig =
  RuleConfig<ConsistentTypeDefinitionsOptions>;

/**
 * Enforce type definitions to consistently use either `interface` or `type`.
 *
 * @see [consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)
 */
export interface ConsistentTypeDefinitionsRule {
  /**
   * Enforce type definitions to consistently use either `interface` or `type`.
   *
   * @see [consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)
   */
  '@typescript-eslint/consistent-type-definitions': ConsistentTypeDefinitionsRuleConfig;
}
