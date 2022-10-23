import type { RuleConfig } from '../rule-config';

/**
 * Option.
 *
 * @deprecated
 */
export interface PreferNodeProtocolOption {
  /**
   * @deprecated
   */
  checkRequire?: boolean;
}

/**
 * Options.
 *
 * @deprecated
 */
export type PreferNodeProtocolOptions = [PreferNodeProtocolOption?];

/**
 * Prefer using the `node:` protocol when importing Node.js builtin modules.
 *
 * @see [prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.2/docs/rules/prefer-node-protocol.md)
 */
export type PreferNodeProtocolRuleConfig =
  RuleConfig<PreferNodeProtocolOptions>;

/**
 * Prefer using the `node:` protocol when importing Node.js builtin modules.
 *
 * @see [prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.2/docs/rules/prefer-node-protocol.md)
 */
export interface PreferNodeProtocolRule {
  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   *
   * @see [prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.2/docs/rules/prefer-node-protocol.md)
   */
  'unicorn/prefer-node-protocol': PreferNodeProtocolRuleConfig;
}
