import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoEmptyInterfaceOption {
  allowSingleExtends?: boolean;
}

/**
 * Options.
 */
export type NoEmptyInterfaceOptions = [NoEmptyInterfaceOption?];

/**
 * Disallow the declaration of empty interfaces.
 *
 * @see [no-empty-interface](https://typescript-eslint.io/rules/no-empty-interface)
 */
export type NoEmptyInterfaceRuleConfig = RuleConfig<NoEmptyInterfaceOptions>;

/**
 * Disallow the declaration of empty interfaces.
 *
 * @see [no-empty-interface](https://typescript-eslint.io/rules/no-empty-interface)
 */
export interface NoEmptyInterfaceRule {
  /**
   * Disallow the declaration of empty interfaces.
   *
   * @see [no-empty-interface](https://typescript-eslint.io/rules/no-empty-interface)
   */
  '@typescript-eslint/no-empty-interface': NoEmptyInterfaceRuleConfig;
}
