import type { RuleConfig } from '../rule-config';

/** Signature. */
export type Signature = 'signature';
/** Visibility. */
export type Visibility = 'public' | 'protected' | 'private';
/** Static. */
export type Static = 'static';
/** Decorated. */
export type Decorated = 'decorated';
/** Instance. */
export type Instance = 'instance';
/** Abstract. */
export type Abstract = 'abstract';
/** Field. */
export type Field = 'field';
/** Constructor. */
export type Constructor = 'constructor';
/** Method. */
export type Method = 'method';

/**
 * @see [Member types (granular form)](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md#member-types-granular-form)
 */
export type MemberTypes =
  // Index signature
  | Signature

  // Fields
  | `${Visibility}-${Static}-${Field}`
  | `${Visibility}-${Decorated}-${Field}`
  | `${Visibility}-${Instance}-${Field}`
  | `${Visibility}-${Abstract}-${Field}`
  | `${Visibility}-${Field}`
  | `${Static}-${Field}`
  | `${Instance}-${Field}`
  | `${Decorated}-${Field}`
  | `${Abstract}-${Field}`
  | Field

  // Constructors
  | `${Visibility}-${Constructor}`
  | Constructor

  // Methods
  | `${Visibility}-${Static}-${Method}`
  | `${Visibility}-${Decorated}-${Method}`
  | `${Visibility}-${Instance}-${Method}`
  | `${Visibility}-${Abstract}-${Method}`
  | `${Visibility}-${Method}`
  | `${Static}-${Method}`
  | `${Decorated}-${Method}`
  | `${Instance}-${Method}`
  | `${Abstract}-${Method}`
  | Method;

/**
 * @see [TypeOptions](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md#options)
 */
export type TypeOptions<T extends MemberTypes> =
  | MemberTypes[]
  | { memberTypes: Array<T> | 'never'; order?: 'alphabetically' | 'as-written' }
  | { order: 'alphabetically' };

/**
 * Option.
 */
export type MemberOrderingOption = {
  default?: TypeOptions<MemberTypes>;

  classes?: TypeOptions<MemberTypes>;
  classExpressions?: TypeOptions<MemberTypes>;

  interfaces?: TypeOptions<Signature | Field | Method | Constructor>;
  typeLiterals?: TypeOptions<Signature | Field | Method | Constructor>;
};

/**
 * Options.
 */
export type MemberOrderingOptions = [MemberOrderingOption?];

/**
 * Require a consistent member declaration order.
 *
 * @see [member-ordering](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md)
 */
export type MemberOrderingRuleConfig = RuleConfig<MemberOrderingOptions>;

/**
 * Require a consistent member declaration order.
 *
 * @see [member-ordering](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md)
 */
export interface MemberOrderingRule {
  /**
   * Require a consistent member declaration order.
   *
   * @see [member-ordering](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md)
   */
  '@typescript-eslint/member-ordering': MemberOrderingRuleConfig;
}
