import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoExtraneousClassOption {
  /**
   * Whether to allow extraneous classes that contain only a constructor.
   */
  allowConstructorOnly?: boolean;
  /**
   * Whether to allow extraneous classes that have no body (i.e. are empty).
   */
  allowEmpty?: boolean;
  /**
   * Whether to allow extraneous classes that only contain static members.
   */
  allowStaticOnly?: boolean;
  /**
   * Whether to allow extraneous classes that include a decorator.
   */
  allowWithDecorator?: boolean;
}

/**
 * Options.
 */
export type NoExtraneousClassOptions = [NoExtraneousClassOption?];

/**
 * Disallow classes used as namespaces.
 *
 * @see [no-extraneous-class](https://typescript-eslint.io/rules/no-extraneous-class)
 */
export type NoExtraneousClassRuleConfig = RuleConfig<NoExtraneousClassOptions>;

/**
 * Disallow classes used as namespaces.
 *
 * @see [no-extraneous-class](https://typescript-eslint.io/rules/no-extraneous-class)
 */
export interface NoExtraneousClassRule {
  /**
   * Disallow classes used as namespaces.
   *
   * @see [no-extraneous-class](https://typescript-eslint.io/rules/no-extraneous-class)
   */
  '@typescript-eslint/no-extraneous-class': NoExtraneousClassRuleConfig;
}
