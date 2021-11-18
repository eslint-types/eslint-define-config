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
 * @see [no-extraneous-class](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-extraneous-class.md)
 */
export type NoExtraneousClassRuleConfig = RuleConfig<NoExtraneousClassOptions>;

/**
 * Forbids the use of classes as namespaces.
 *
 * @see [no-extraneous-class](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-extraneous-class.md)
 */
export interface NoExtraneousClassRule {
  /**
   * Forbids the use of classes as namespaces.
   *
   * @see [no-extraneous-class](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-extraneous-class.md)
   */
  '@typescript-eslint/no-extraneous-class': NoExtraneousClassRuleConfig;
}
