import type { RuleConfig } from '../rule-config';

/**
 * Enforce sandbox attribute on iframe elements.
 *
 * @see [iframe-missing-sandbox](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/iframe-missing-sandbox.md)
 */
export type IframeMissingSandboxRuleConfig = RuleConfig<[]>;

/**
 * Enforce sandbox attribute on iframe elements.
 *
 * @see [iframe-missing-sandbox](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/iframe-missing-sandbox.md)
 */
export interface IframeMissingSandboxRule {
  /**
   * Enforce sandbox attribute on iframe elements.
   *
   * @see [iframe-missing-sandbox](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/iframe-missing-sandbox.md)
   */
  'react/iframe-missing-sandbox': IframeMissingSandboxRuleConfig;
}
