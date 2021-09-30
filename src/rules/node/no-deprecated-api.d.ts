import { LiteralUnion } from '../../utility-types';
import type { RuleConfig } from '../rule-config';

/** NoDeprecatedApiModuleItem. */
export type NoDeprecatedApiModuleItem =
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
  | 'module.createRequireFromPath'
  | 'module.Module.requireRepl'
  | 'module.requireRepl'
  | 'module.Module._debug'
  | 'module._debug'
  | 'net._setSimultaneousAccepts'
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
  | 'vm.runInDebugContext';

/** NoDeprecatedApiGlobalItem. */
export type NoDeprecatedApiGlobalItem =
  | 'Buffer()'
  | 'new Buffer()'
  | 'COUNTER_NET_SERVER_CONNECTION'
  | 'COUNTER_NET_SERVER_CONNECTION_CLOSE'
  | 'COUNTER_HTTP_SERVER_REQUEST'
  | 'COUNTER_HTTP_SERVER_RESPONSE'
  | 'COUNTER_HTTP_CLIENT_REQUEST'
  | 'COUNTER_HTTP_CLIENT_RESPONSE'
  | 'Intl.v8BreakIterator'
  | 'require.extensions'
  | 'process.EventEmitter'
  | 'process.assert'
  | 'process.binding'
  | 'process.env.NODE_REPL_HISTORY_FILE';

/**
 * Option.
 */
export type NoDeprecatedApiOption = {
  /**
   * As mentioned above, this rule reads the [engines] field of `package.json`. But, you can overwrite the version by `version` option.
   *
   * The `version` option accepts [the valid version range of `node-semver`](https://github.com/npm/node-semver#range-grammar).
   *
   * @see [version](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md#version)
   */
  version?: string;
  /**
   * This is the array of module names and module's member names.
   *
   * @default []
   *
   * @see [ignoreModuleItems](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md#ignoremoduleitems)
   */
  ignoreModuleItems?: Array<LiteralUnion<NoDeprecatedApiModuleItem>>;
  /**
   * This is the array of global variable names and global variable's member names.
   *
   * @default []
   *
   * @see [ignoreGlobalItems](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md#ignoreglobalitems)
   */
  ignoreGlobalItems?: Array<LiteralUnion<NoDeprecatedApiGlobalItem>>;
};

/**
 * Options.
 */
export type NoDeprecatedApiOptions = [NoDeprecatedApiOption?];

/**
 * Node has many deprecated API. The community is going to remove those API from Node in future, so we should not use those.
 *
 * @see [no-deprecated-api](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md)
 */
export type NoDeprecatedApiRuleConfig = RuleConfig<NoDeprecatedApiOptions>;

/**
 * Node has many deprecated API. The community is going to remove those API from Node in future, so we should not use those.
 *
 * @see [no-deprecated-api](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md)
 */
export interface NoDeprecatedApiRule {
  /**
   * Node has many deprecated API. The community is going to remove those API from Node in future, so we should not use those.
   *
   * @see [no-deprecated-api](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md)
   */
  'node/no-deprecated-api': NoDeprecatedApiRuleConfig;
}
