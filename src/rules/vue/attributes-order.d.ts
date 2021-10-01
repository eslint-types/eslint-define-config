import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AttributesOrderOption {
  order?: (
    | (
        | 'DEFINITION'
        | 'LIST_RENDERING'
        | 'CONDITIONALS'
        | 'RENDER_MODIFIERS'
        | 'GLOBAL'
        | 'UNIQUE'
        | 'SLOT'
        | 'TWO_WAY_BINDING'
        | 'OTHER_DIRECTIVES'
        | 'OTHER_ATTR'
        | 'EVENTS'
        | 'CONTENT'
      )
    | (
        | 'DEFINITION'
        | 'LIST_RENDERING'
        | 'CONDITIONALS'
        | 'RENDER_MODIFIERS'
        | 'GLOBAL'
        | 'UNIQUE'
        | 'SLOT'
        | 'TWO_WAY_BINDING'
        | 'OTHER_DIRECTIVES'
        | 'OTHER_ATTR'
        | 'EVENTS'
        | 'CONTENT'
      )[]
  )[];
  alphabetical?: boolean;
}

/**
 * Options.
 */
export type AttributesOrderOptions = [AttributesOrderOption?];

/**
 * Enforce order of attributes.
 *
 * @see [attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)
 */
export type AttributesOrderRuleConfig = RuleConfig<AttributesOrderOptions>;

/**
 * Enforce order of attributes.
 *
 * @see [attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)
 */
export interface AttributesOrderRule {
  /**
   * Enforce order of attributes.
   *
   * @see [attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)
   */
  'vue/attributes-order': AttributesOrderRuleConfig;
}
