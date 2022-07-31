import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ConsistentGenericConstructorsOption =
  | 'type-annotation'
  | 'constructor';

/**
 * Options.
 */
export type ConsistentGenericConstructorsOptions = [
  ConsistentGenericConstructorsOption?,
];

/**
 * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
 *
 * @see [consistent-generic-constructors](https://typescript-eslint.io/rules/consistent-generic-constructors)
 */
export type ConsistentGenericConstructorsRuleConfig =
  RuleConfig<ConsistentGenericConstructorsOptions>;

/**
 * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
 *
 * @see [consistent-generic-constructors](https://typescript-eslint.io/rules/consistent-generic-constructors)
 */
export interface ConsistentGenericConstructorsRule {
  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
   *
   * @see [consistent-generic-constructors](https://typescript-eslint.io/rules/consistent-generic-constructors)
   */
  '@typescript-eslint/consistent-generic-constructors': ConsistentGenericConstructorsRuleConfig;
}
