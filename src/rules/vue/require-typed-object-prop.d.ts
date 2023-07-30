import type { RuleConfig } from '../rule-config';

/**
 * Enforce adding type declarations to object props.
 *
 * @see [require-typed-object-prop](https://eslint.vuejs.org/rules/require-typed-object-prop.html)
 */
export type RequireTypedObjectPropRuleConfig = RuleConfig<[]>;

/**
 * Enforce adding type declarations to object props.
 *
 * @see [require-typed-object-prop](https://eslint.vuejs.org/rules/require-typed-object-prop.html)
 */
export interface RequireTypedObjectPropRule {
  /**
   * Enforce adding type declarations to object props.
   *
   * @see [require-typed-object-prop](https://eslint.vuejs.org/rules/require-typed-object-prop.html)
   */
  'vue/require-typed-object-prop': RequireTypedObjectPropRuleConfig;
}
