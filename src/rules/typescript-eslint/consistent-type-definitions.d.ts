import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ConsistentTypeDefinitionsOption = 'interface' | 'type';

/**
 * Options.
 */
export type ConsistentTypeDefinitionsOptions = [ConsistentTypeDefinitionsOption?];

/**
 * Consistent with type definition either `interface` or `type`.
 *
 * @default 'interface'
 *
 * @see [consistent-type-definitions](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/consistent-type-definitions.md)
 */
export type ConsistentTypeDefinitionsRuleConfig = RuleConfig<ConsistentTypeDefinitionsOptions>;

/**
 * Consistent with type definition either `interface` or `type`.
 *
 * @default 'interface'
 *
 * @see [consistent-type-definitions](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/consistent-type-definitions.md)
 */
export interface ConsistentTypeDefinitionsRule {
  /**
   * Consistent with type definition either `interface` or `type`.
   *
   * @default 'interface'
   *
   * @see [consistent-type-definitions](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/consistent-type-definitions.md)
   */
  '@typescript-eslint/consistent-type-definitions': ConsistentTypeDefinitionsRuleConfig;
}
