import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDeprecatedApiOption {
  version?: string;
  ignoreModuleItems?: (
    | '_linklist'
    | '_stream_wrap'
    | 'async_hooks.currentId'
    | 'async_hooks.triggerId'
    | 'buffer.Buffer()'
    | 'new buffer.Buffer()'
    | 'buffer.SlowBuffer'
    | 'constants'
    | 'crypto._toBuf'
    | 'crypto.Credentials'
    | 'crypto.DEFAULT_ENCODING'
    | 'crypto.createCipher'
    | 'crypto.createCredentials'
    | 'crypto.createDecipher'
    | 'crypto.fips'
    | 'crypto.prng'
    | 'crypto.pseudoRandomBytes'
    | 'crypto.rng'
    | 'domain'
    | 'events.EventEmitter.listenerCount'
    | 'events.listenerCount'
    | 'freelist'
    | 'fs.SyncWriteStream'
    | 'fs.exists'
    | 'fs.lchmod'
    | 'fs.lchmodSync'
    | 'http.createClient'
    | 'module.Module.createRequireFromPath'
    | 'module.Module.requireRepl'
    | 'module.Module._debug'
    | 'module.createRequireFromPath'
    | 'module.requireRepl'
    | 'module._debug'
    | 'net._setSimultaneousAccepts'
    | 'os.getNetworkInterfaces'
    | 'os.tmpDir'
    | 'path._makeLong'
    | 'process.EventEmitter'
    | 'process.assert'
    | 'process.binding'
    | 'process.env.NODE_REPL_HISTORY_FILE'
    | 'process.report.triggerReport'
    | 'punycode'
    | 'readline.codePointAt'
    | 'readline.getStringWidth'
    | 'readline.isFullWidthCodePoint'
    | 'readline.stripVTControlCharacters'
    | 'safe-buffer.Buffer()'
    | 'new safe-buffer.Buffer()'
    | 'safe-buffer.SlowBuffer'
    | 'sys'
    | 'timers.enroll'
    | 'timers.unenroll'
    | 'tls.CleartextStream'
    | 'tls.CryptoStream'
    | 'tls.SecurePair'
    | 'tls.convertNPNProtocols'
    | 'tls.createSecurePair'
    | 'tls.parseCertString'
    | 'tty.setRawMode'
    | 'url.parse'
    | 'url.resolve'
    | 'util.debug'
    | 'util.error'
    | 'util.isArray'
    | 'util.isBoolean'
    | 'util.isBuffer'
    | 'util.isDate'
    | 'util.isError'
    | 'util.isFunction'
    | 'util.isNull'
    | 'util.isNullOrUndefined'
    | 'util.isNumber'
    | 'util.isObject'
    | 'util.isPrimitive'
    | 'util.isRegExp'
    | 'util.isString'
    | 'util.isSymbol'
    | 'util.isUndefined'
    | 'util.log'
    | 'util.print'
    | 'util.pump'
    | 'util.puts'
    | 'util._extend'
    | 'vm.runInDebugContext'
  )[];
  ignoreGlobalItems?: (
    | 'Buffer()'
    | 'new Buffer()'
    | 'COUNTER_NET_SERVER_CONNECTION'
    | 'COUNTER_NET_SERVER_CONNECTION_CLOSE'
    | 'COUNTER_HTTP_SERVER_REQUEST'
    | 'COUNTER_HTTP_SERVER_RESPONSE'
    | 'COUNTER_HTTP_CLIENT_REQUEST'
    | 'COUNTER_HTTP_CLIENT_RESPONSE'
    | 'GLOBAL'
    | 'Intl.v8BreakIterator'
    | 'require.extensions'
    | 'root'
    | 'process.EventEmitter'
    | 'process.assert'
    | 'process.binding'
    | 'process.env.NODE_REPL_HISTORY_FILE'
    | 'process.report.triggerReport'
  )[];
  ignoreIndirectDependencies?: boolean;
}

/**
 * Options.
 */
export type NoDeprecatedApiOptions = [NoDeprecatedApiOption?];

/**
 * Disallow deprecated APIs.
 *
 * @see [no-deprecated-api](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-deprecated-api.md)
 */
export type NoDeprecatedApiRuleConfig = RuleConfig<NoDeprecatedApiOptions>;

/**
 * Disallow deprecated APIs.
 *
 * @see [no-deprecated-api](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-deprecated-api.md)
 */
export interface NoDeprecatedApiRule {
  /**
   * Disallow deprecated APIs.
   *
   * @see [no-deprecated-api](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-deprecated-api.md)
   */
  'n/no-deprecated-api': NoDeprecatedApiRuleConfig;
}
