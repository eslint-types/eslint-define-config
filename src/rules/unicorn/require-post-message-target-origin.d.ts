import type { RuleConfig } from '../rule-config';

/**
 * Enforce using the `targetOrigin` argument with `window.postMessage()`.
 *
 * @see [require-post-message-target-origin](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/require-post-message-target-origin.md)
 */
export type RequirePostMessageTargetOriginRuleConfig = RuleConfig<[]>;

/**
 * Enforce using the `targetOrigin` argument with `window.postMessage()`.
 *
 * @see [require-post-message-target-origin](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/require-post-message-target-origin.md)
 */
export interface RequirePostMessageTargetOriginRule {
  /**
   * Enforce using the `targetOrigin` argument with `window.postMessage()`.
   *
   * @see [require-post-message-target-origin](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/require-post-message-target-origin.md)
   */
  'unicorn/require-post-message-target-origin': RequirePostMessageTargetOriginRuleConfig;
}
