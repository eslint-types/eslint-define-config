import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface NoUnsupportedFeaturesNodeBuiltinsOption {
  version?: string;
  ignores?: (
    | 'queueMicrotask'
    | 'require.resolve.paths'
    | 'Buffer.alloc'
    | 'Buffer.allocUnsafe'
    | 'Buffer.allocUnsafeSlow'
    | 'Buffer.from'
    | 'TextDecoder'
    | 'TextEncoder'
    | 'URL'
    | 'URLSearchParams'
    | 'console.clear'
    | 'console.count'
    | 'console.countReset'
    | 'console.debug'
    | 'console.dirxml'
    | 'console.group'
    | 'console.groupCollapsed'
    | 'console.groupEnd'
    | 'console.table'
    | 'console.markTimeline'
    | 'console.profile'
    | 'console.profileEnd'
    | 'console.timeLog'
    | 'console.timeStamp'
    | 'console.timeline'
    | 'console.timelineEnd'
    | 'process.allowedNodeEnvironmentFlags'
    | 'process.argv0'
    | 'process.channel'
    | 'process.cpuUsage'
    | 'process.emitWarning'
    | 'process.getegid'
    | 'process.geteuid'
    | 'process.hasUncaughtExceptionCaptureCallback'
    | 'process.hrtime.bigint'
    | 'process.ppid'
    | 'process.release'
    | 'process.report'
    | 'process.resourceUsage'
    | 'process.setegid'
    | 'process.seteuid'
    | 'process.setUncaughtExceptionCaptureCallback'
    | 'process.stdout.getColorDepth'
    | 'process.stdout.hasColor'
    | 'process.stderr.getColorDepth'
    | 'process.stderr.hasColor'
    | 'assert.strict'
    | 'assert.strict.doesNotReject'
    | 'assert.strict.rejects'
    | 'assert.deepStrictEqual'
    | 'assert.doesNotReject'
    | 'assert.notDeepStrictEqual'
    | 'assert.rejects'
    | 'async_hooks'
    | 'async_hooks.createHook'
    | 'buffer.Buffer.alloc'
    | 'buffer.Buffer.allocUnsafe'
    | 'buffer.Buffer.allocUnsafeSlow'
    | 'buffer.Buffer.from'
    | 'buffer.kMaxLength'
    | 'buffer.transcode'
    | 'buffer.constants'
    | 'child_process.ChildProcess'
    | 'crypto.Certificate.exportChallenge'
    | 'crypto.Certificate.exportPublicKey'
    | 'crypto.Certificate.verifySpkac'
    | 'crypto.ECDH'
    | 'crypto.KeyObject'
    | 'crypto.createPrivateKey'
    | 'crypto.createPublicKey'
    | 'crypto.createSecretKey'
    | 'crypto.constants'
    | 'crypto.fips'
    | 'crypto.generateKeyPair'
    | 'crypto.generateKeyPairSync'
    | 'crypto.getCurves'
    | 'crypto.getFips'
    | 'crypto.privateEncrypt'
    | 'crypto.publicDecrypt'
    | 'crypto.randomFillSync'
    | 'crypto.randomFill'
    | 'crypto.scrypt'
    | 'crypto.scryptSync'
    | 'crypto.setFips'
    | 'crypto.sign'
    | 'crypto.timingSafeEqual'
    | 'crypto.verify'
    | 'dns.Resolver'
    | 'dns.resolvePtr'
    | 'dns.promises'
    | 'events.EventEmitter.once'
    | 'events.once'
    | 'fs.Dirent'
    | 'fs.copyFile'
    | 'fs.copyFileSync'
    | 'fs.mkdtemp'
    | 'fs.mkdtempSync'
    | 'fs.realpath.native'
    | 'fs.realpathSync.native'
    | 'fs.promises'
    | 'fs.writev'
    | 'fs.writevSync'
    | 'http2'
    | 'inspector'
    | 'module.Module.builtinModules'
    | 'module.Module.createRequireFromPath'
    | 'module.Module.createRequire'
    | 'module.Module.syncBuiltinESMExports'
    | 'module.builtinModules'
    | 'module.createRequireFromPath'
    | 'module.createRequire'
    | 'module.syncBuiltinESMExports'
    | 'os.constants'
    | 'os.constants.priority'
    | 'os.getPriority'
    | 'os.homedir'
    | 'os.setPriority'
    | 'os.userInfo'
    | 'path.toNamespacedPath'
    | 'perf_hooks'
    | 'perf_hooks.monitorEventLoopDelay'
    | 'stream.Readable.from'
    | 'stream.finished'
    | 'stream.pipeline'
    | 'trace_events'
    | 'url.URL'
    | 'url.URLSearchParams'
    | 'url.domainToASCII'
    | 'url.domainToUnicode'
    | 'util.callbackify'
    | 'util.formatWithOptions'
    | 'util.getSystemErrorName'
    | 'util.inspect.custom'
    | 'util.inspect.defaultOptions'
    | 'util.inspect.replDefaults'
    | 'util.isDeepStrictEqual'
    | 'util.promisify'
    | 'util.TextDecoder'
    | 'util.TextEncoder'
    | 'util.types'
    | 'util.types.isBoxedPrimitive'
    | 'v8'
    | 'v8.DefaultDeserializer'
    | 'v8.DefaultSerializer'
    | 'v8.Deserializer'
    | 'v8.Serializer'
    | 'v8.cachedDataVersionTag'
    | 'v8.deserialize'
    | 'v8.getHeapCodeStatistics'
    | 'v8.getHeapSnapshot'
    | 'v8.getHeapSpaceStatistics'
    | 'v8.serialize'
    | 'v8.writeHeapSnapshot'
    | 'vm.Module'
    | 'vm.compileFunction'
    | 'worker_threads'
  )[];
}

/**
 * Options.
 */
export type NoUnsupportedFeaturesNodeBuiltinsOptions = [
  NoUnsupportedFeaturesNodeBuiltinsOption?,
];

/**
 * Disallow unsupported Node.js built-in APIs on the specified version.
 *
 * @see [no-unsupported-features/node-builtins](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unsupported-features/node-builtins.md)
 */
export type NoUnsupportedFeaturesNodeBuiltinsRuleConfig =
  RuleConfig<NoUnsupportedFeaturesNodeBuiltinsOptions>;

/**
 * Disallow unsupported Node.js built-in APIs on the specified version.
 *
 * @see [no-unsupported-features/node-builtins](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unsupported-features/node-builtins.md)
 */
export interface NoUnsupportedFeaturesNodeBuiltinsRule {
  /**
   * Disallow unsupported Node.js built-in APIs on the specified version.
   *
   * @see [no-unsupported-features/node-builtins](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unsupported-features/node-builtins.md)
   */
  'node/no-unsupported-features/node-builtins': NoUnsupportedFeaturesNodeBuiltinsRuleConfig;
}
