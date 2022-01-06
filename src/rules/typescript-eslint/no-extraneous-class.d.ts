import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoExtraneousClassOption {
  allowConstructorOnly?: boolean;
  allowEmpty?: boolean;
  allowStaticOnly?: boolean;
  allowWithDecorator?: boolean;
}

/**
 * Options.
 */
export type NoExtraneousClassOptions = [NoExtraneousClassOption?];

/**
 * Forbids the use of classes as namespaces.
 *
 * @see [no-extraneous-class](https://typescript-eslint.io/rules/no-extraneous-class)
 */
export type NoExtraneousClassRuleConfig = RuleConfig<NoExtraneousClassOptions>;

/**
 * Forbids the use of classes as namespaces.
 *
 * @see [no-extraneous-class](https://typescript-eslint.io/rules/no-extraneous-class)
 */
export interface NoExtraneousClassRule {
  /**
   * Forbids the use of classes as namespaces.
   *
   * @see [no-extraneous-class](https://typescript-eslint.io/rules/no-extraneous-class)
   */
  '@typescript-eslint/no-extraneous-class': NoExtraneousClassRuleConfig;
}
