import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoHideCoreModulesOption {
  allow?: (
    | 'assert'
    | 'buffer'
    | 'child_process'
    | 'cluster'
    | 'console'
    | 'constants'
    | 'crypto'
    | 'dgram'
    | 'dns'
    | 'events'
    | 'fs'
    | 'http'
    | 'https'
    | 'module'
    | 'net'
    | 'os'
    | 'path'
    | 'querystring'
    | 'readline'
    | 'repl'
    | 'stream'
    | 'string_decoder'
    | 'timers'
    | 'tls'
    | 'tty'
    | 'url'
    | 'util'
    | 'vm'
    | 'zlib'
  )[];
  ignoreDirectDependencies?: boolean;
  ignoreIndirectDependencies?: boolean;
}

/**
 * Options.
 */
export type NoHideCoreModulesOptions = [NoHideCoreModulesOption?];

/**
 * Disallow third-party modules which are hiding core modules.
 *
 * @deprecated
 *
 * @see [no-hide-core-modules](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-hide-core-modules.md)
 */
export type NoHideCoreModulesRuleConfig = RuleConfig<NoHideCoreModulesOptions>;

/**
 * Disallow third-party modules which are hiding core modules.
 *
 * @deprecated
 *
 * @see [no-hide-core-modules](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-hide-core-modules.md)
 */
export interface NoHideCoreModulesRule {
  /**
   * Disallow third-party modules which are hiding core modules.
   *
   * @deprecated
   *
   * @see [no-hide-core-modules](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-hide-core-modules.md)
   */
  'node/no-hide-core-modules': NoHideCoreModulesRuleConfig;
}
