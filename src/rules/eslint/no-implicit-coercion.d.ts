import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoImplicitCoercionOption {
  boolean?: boolean;
  number?: boolean;
  string?: boolean;
  disallowTemplateShorthand?: boolean;
  allow?: ('~' | '!!' | '+' | '*')[];
}

/**
 * Options.
 */
export type NoImplicitCoercionOptions = [NoImplicitCoercionOption?];

/**
 * Disallow shorthand type conversions.
 *
 * @see [no-implicit-coercion](https://eslint.org/docs/latest/rules/no-implicit-coercion)
 */
export type NoImplicitCoercionRuleConfig =
  RuleConfig<NoImplicitCoercionOptions>;

/**
 * Disallow shorthand type conversions.
 *
 * @see [no-implicit-coercion](https://eslint.org/docs/latest/rules/no-implicit-coercion)
 */
export interface NoImplicitCoercionRule {
  /**
   * Disallow shorthand type conversions.
   *
   * @see [no-implicit-coercion](https://eslint.org/docs/latest/rules/no-implicit-coercion)
   */
  'no-implicit-coercion': NoImplicitCoercionRuleConfig;
}
