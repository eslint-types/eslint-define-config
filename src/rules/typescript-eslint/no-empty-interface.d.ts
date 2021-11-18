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
 * @see [no-empty-interface](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-empty-interface.md)
 */
export type NoEmptyInterfaceRuleConfig = RuleConfig<NoEmptyInterfaceOptions>;

/**
 * Disallow the declaration of empty interfaces.
 *
 * @see [no-empty-interface](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-empty-interface.md)
 */
export interface NoEmptyInterfaceRule {
  /**
   * Disallow the declaration of empty interfaces.
   *
   * @see [no-empty-interface](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-empty-interface.md)
   */
  '@typescript-eslint/no-empty-interface': NoEmptyInterfaceRuleConfig;
}
