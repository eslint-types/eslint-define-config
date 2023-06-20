import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUselessComputedKeyOption {
  enforceForClassMembers?: boolean;
}

/**
 * Options.
 */
export type NoUselessComputedKeyOptions = [NoUselessComputedKeyOption?];

/**
 * Disallow unnecessary computed property keys in objects and classes.
 *
 * @see [no-useless-computed-key](https://eslint.org/docs/latest/rules/no-useless-computed-key)
 */
export type NoUselessComputedKeyRuleConfig =
  RuleConfig<NoUselessComputedKeyOptions>;

/**
 * Disallow unnecessary computed property keys in objects and classes.
 *
 * @see [no-useless-computed-key](https://eslint.org/docs/latest/rules/no-useless-computed-key)
 */
export interface NoUselessComputedKeyRule {
  /**
   * Disallow unnecessary computed property keys in objects and classes.
   *
   * @see [no-useless-computed-key](https://eslint.org/docs/latest/rules/no-useless-computed-key)
   */
  'no-useless-computed-key': NoUselessComputedKeyRuleConfig;
}
