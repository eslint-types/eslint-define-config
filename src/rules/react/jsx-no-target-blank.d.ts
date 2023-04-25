import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxNoTargetBlankOption {
  allowReferrer?: boolean;
  enforceDynamicLinks?: 'always' | 'never';
  warnOnSpreadAttributes?: boolean;
  links?: boolean;
  forms?: boolean;
}

/**
 * Options.
 */
export type JsxNoTargetBlankOptions = [JsxNoTargetBlankOption?];

/**
 * Disallow `target="_blank"` attribute without `rel="noreferrer"`.
 *
 * @see [jsx-no-target-blank](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md)
 */
export type JsxNoTargetBlankRuleConfig = RuleConfig<JsxNoTargetBlankOptions>;

/**
 * Disallow `target="_blank"` attribute without `rel="noreferrer"`.
 *
 * @see [jsx-no-target-blank](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md)
 */
export interface JsxNoTargetBlankRule {
  /**
   * Disallow `target="_blank"` attribute without `rel="noreferrer"`.
   *
   * @see [jsx-no-target-blank](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md)
   */
  'react/jsx-no-target-blank': JsxNoTargetBlankRuleConfig;
}
