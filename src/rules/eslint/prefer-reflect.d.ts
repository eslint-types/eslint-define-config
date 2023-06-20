import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferReflectOption {
  exceptions?: (
    | 'apply'
    | 'call'
    | 'delete'
    | 'defineProperty'
    | 'getOwnPropertyDescriptor'
    | 'getPrototypeOf'
    | 'setPrototypeOf'
    | 'isExtensible'
    | 'getOwnPropertyNames'
    | 'preventExtensions'
  )[];
}

/**
 * Options.
 */
export type PreferReflectOptions = [PreferReflectOption?];

/**
 * Require `Reflect` methods where applicable.
 *
 * @deprecated
 *
 * @see [prefer-reflect](https://eslint.org/docs/latest/rules/prefer-reflect)
 */
export type PreferReflectRuleConfig = RuleConfig<PreferReflectOptions>;

/**
 * Require `Reflect` methods where applicable.
 *
 * @deprecated
 *
 * @see [prefer-reflect](https://eslint.org/docs/latest/rules/prefer-reflect)
 */
export interface PreferReflectRule {
  /**
   * Require `Reflect` methods where applicable.
   *
   * @deprecated
   *
   * @see [prefer-reflect](https://eslint.org/docs/latest/rules/prefer-reflect)
   */
  'prefer-reflect': PreferReflectRuleConfig;
}
