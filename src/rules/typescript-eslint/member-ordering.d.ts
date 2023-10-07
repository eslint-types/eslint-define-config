import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type BaseConfig =
  | 'never'
  | (AllItems | AllItems[])[]
  | {
      memberTypes?: (AllItems | AllItems[])[] | 'never';
      order?: OrderOptions;
      optionalityOrder?: OptionalityOrderOptions;
    };
export type AllItems =
  | 'readonly-signature'
  | 'signature'
  | 'readonly-field'
  | 'public-readonly-field'
  | 'public-decorated-readonly-field'
  | 'decorated-readonly-field'
  | 'static-readonly-field'
  | 'public-static-readonly-field'
  | 'instance-readonly-field'
  | 'public-instance-readonly-field'
  | 'abstract-readonly-field'
  | 'public-abstract-readonly-field'
  | 'protected-readonly-field'
  | 'protected-decorated-readonly-field'
  | 'protected-static-readonly-field'
  | 'protected-instance-readonly-field'
  | 'protected-abstract-readonly-field'
  | 'private-readonly-field'
  | 'private-decorated-readonly-field'
  | 'private-static-readonly-field'
  | 'private-instance-readonly-field'
  | '#private-readonly-field'
  | '#private-static-readonly-field'
  | '#private-instance-readonly-field'
  | 'field'
  | 'public-field'
  | 'public-decorated-field'
  | 'decorated-field'
  | 'static-field'
  | 'public-static-field'
  | 'instance-field'
  | 'public-instance-field'
  | 'abstract-field'
  | 'public-abstract-field'
  | 'protected-field'
  | 'protected-decorated-field'
  | 'protected-static-field'
  | 'protected-instance-field'
  | 'protected-abstract-field'
  | 'private-field'
  | 'private-decorated-field'
  | 'private-static-field'
  | 'private-instance-field'
  | '#private-field'
  | '#private-static-field'
  | '#private-instance-field'
  | 'method'
  | 'public-method'
  | 'public-decorated-method'
  | 'decorated-method'
  | 'static-method'
  | 'public-static-method'
  | 'instance-method'
  | 'public-instance-method'
  | 'abstract-method'
  | 'public-abstract-method'
  | 'protected-method'
  | 'protected-decorated-method'
  | 'protected-static-method'
  | 'protected-instance-method'
  | 'protected-abstract-method'
  | 'private-method'
  | 'private-decorated-method'
  | 'private-static-method'
  | 'private-instance-method'
  | '#private-method'
  | '#private-static-method'
  | '#private-instance-method'
  | 'call-signature'
  | 'constructor'
  | 'public-constructor'
  | 'protected-constructor'
  | 'private-constructor'
  | 'get'
  | 'public-get'
  | 'public-decorated-get'
  | 'decorated-get'
  | 'static-get'
  | 'public-static-get'
  | 'instance-get'
  | 'public-instance-get'
  | 'abstract-get'
  | 'public-abstract-get'
  | 'protected-get'
  | 'protected-decorated-get'
  | 'protected-static-get'
  | 'protected-instance-get'
  | 'protected-abstract-get'
  | 'private-get'
  | 'private-decorated-get'
  | 'private-static-get'
  | 'private-instance-get'
  | '#private-get'
  | '#private-static-get'
  | '#private-instance-get'
  | 'set'
  | 'public-set'
  | 'public-decorated-set'
  | 'decorated-set'
  | 'static-set'
  | 'public-static-set'
  | 'instance-set'
  | 'public-instance-set'
  | 'abstract-set'
  | 'public-abstract-set'
  | 'protected-set'
  | 'protected-decorated-set'
  | 'protected-static-set'
  | 'protected-instance-set'
  | 'protected-abstract-set'
  | 'private-set'
  | 'private-decorated-set'
  | 'private-static-set'
  | 'private-instance-set'
  | '#private-set'
  | '#private-static-set'
  | '#private-instance-set'
  | 'static-initialization'
  | 'static-static-initialization'
  | 'public-static-static-initialization'
  | 'instance-static-initialization'
  | 'public-instance-static-initialization'
  | 'abstract-static-initialization'
  | 'public-abstract-static-initialization'
  | 'protected-static-static-initialization'
  | 'protected-instance-static-initialization'
  | 'protected-abstract-static-initialization'
  | 'private-static-static-initialization'
  | 'private-instance-static-initialization'
  | '#private-static-static-initialization'
  | '#private-instance-static-initialization';
export type OrderOptions =
  | 'alphabetically'
  | 'alphabetically-case-insensitive'
  | 'as-written'
  | 'natural'
  | 'natural-case-insensitive';
export type OptionalityOrderOptions = 'optional-first' | 'required-first';
export type TypesConfig =
  | 'never'
  | (TypeItems | TypeItems[])[]
  | {
      memberTypes?: (TypeItems | TypeItems[])[] | 'never';
      order?: OrderOptions;
      optionalityOrder?: OptionalityOrderOptions;
    };
export type TypeItems =
  | 'readonly-signature'
  | 'signature'
  | 'readonly-field'
  | 'field'
  | 'method'
  | 'constructor';

export interface MemberOrderingOption {
  default?: BaseConfig;
  classes?: BaseConfig;
  classExpressions?: BaseConfig;
  interfaces?: TypesConfig;
  typeLiterals?: TypesConfig;
}

/**
 * Options.
 */
export type MemberOrderingOptions = [MemberOrderingOption?];

/**
 * Require a consistent member declaration order.
 *
 * @see [member-ordering](https://typescript-eslint.io/rules/member-ordering)
 */
export type MemberOrderingRuleConfig = RuleConfig<MemberOrderingOptions>;

/**
 * Require a consistent member declaration order.
 *
 * @see [member-ordering](https://typescript-eslint.io/rules/member-ordering)
 */
export interface MemberOrderingRule {
  /**
   * Require a consistent member declaration order.
   *
   * @see [member-ordering](https://typescript-eslint.io/rules/member-ordering)
   */
  '@typescript-eslint/member-ordering': MemberOrderingRuleConfig;
}
