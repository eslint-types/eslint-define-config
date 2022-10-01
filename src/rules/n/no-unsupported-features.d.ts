import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUnsupportedFeaturesOption =
  | (0.1 | 0.12 | 4 | 5 | 6 | 6.5 | 7 | 7.6 | 8 | 8.3 | 9 | 10)
  | string
  | {
      version?:
        | (0.1 | 0.12 | 4 | 5 | 6 | 6.5 | 7 | 7.6 | 8 | 8.3 | 9 | 10)
        | string;
      ignores?: (
        | 'syntax'
        | 'defaultParameters'
        | 'restParameters'
        | 'spreadOperators'
        | 'objectLiteralExtensions'
        | 'objectPropertyShorthandOfGetSet'
        | 'forOf'
        | 'binaryNumberLiterals'
        | 'octalNumberLiterals'
        | 'templateStrings'
        | 'regexpY'
        | 'regexpU'
        | 'destructuring'
        | 'unicodeCodePointEscapes'
        | 'new.target'
        | 'const'
        | 'let'
        | 'blockScopedFunctions'
        | 'arrowFunctions'
        | 'generatorFunctions'
        | 'classes'
        | 'modules'
        | 'exponentialOperators'
        | 'asyncAwait'
        | 'trailingCommasInFunctions'
        | 'templateLiteralRevision'
        | 'regexpS'
        | 'regexpNamedCaptureGroups'
        | 'regexpLookbehind'
        | 'regexpUnicodeProperties'
        | 'restProperties'
        | 'spreadProperties'
        | 'asyncGenerators'
        | 'forAwaitOf'
        | 'runtime'
        | 'globalObjects'
        | 'typedArrays'
        | 'Int8Array'
        | 'Uint8Array'
        | 'Uint8ClampedArray'
        | 'Int16Array'
        | 'Uint16Array'
        | 'Int32Array'
        | 'Uint32Array'
        | 'Float32Array'
        | 'Float64Array'
        | 'DataView'
        | 'Map'
        | 'Set'
        | 'WeakMap'
        | 'WeakSet'
        | 'Proxy'
        | 'Reflect'
        | 'Promise'
        | 'Symbol'
        | 'SharedArrayBuffer'
        | 'Atomics'
        | 'staticMethods'
        | 'Object.*'
        | 'Object.assign'
        | 'Object.is'
        | 'Object.getOwnPropertySymbols'
        | 'Object.setPrototypeOf'
        | 'Object.values'
        | 'Object.entries'
        | 'Object.getOwnPropertyDescriptors'
        | 'String.*'
        | 'String.raw'
        | 'String.fromCodePoint'
        | 'Array.*'
        | 'Array.from'
        | 'Array.of'
        | 'Number.*'
        | 'Number.isFinite'
        | 'Number.isInteger'
        | 'Number.isSafeInteger'
        | 'Number.isNaN'
        | 'Number.EPSILON'
        | 'Number.MIN_SAFE_INTEGER'
        | 'Number.MAX_SAFE_INTEGER'
        | 'Math.*'
        | 'Math.clz32'
        | 'Math.imul'
        | 'Math.sign'
        | 'Math.log10'
        | 'Math.log2'
        | 'Math.log1p'
        | 'Math.expm1'
        | 'Math.cosh'
        | 'Math.sinh'
        | 'Math.tanh'
        | 'Math.acosh'
        | 'Math.asinh'
        | 'Math.atanh'
        | 'Math.trunc'
        | 'Math.fround'
        | 'Math.cbrt'
        | 'Math.hypot'
        | 'Symbol.*'
        | 'Symbol.hasInstance'
        | 'Symbol.isConcatSpreadablec'
        | 'Symbol.iterator'
        | 'Symbol.species'
        | 'Symbol.replace'
        | 'Symbol.search'
        | 'Symbol.split'
        | 'Symbol.match'
        | 'Symbol.toPrimitive'
        | 'Symbol.toStringTag'
        | 'Symbol.unscopables'
        | 'Atomics.*'
        | 'Atomics.add'
        | 'Atomics.and'
        | 'Atomics.compareExchange'
        | 'Atomics.exchange'
        | 'Atomics.wait'
        | 'Atomics.wake'
        | 'Atomics.isLockFree'
        | 'Atomics.load'
        | 'Atomics.or'
        | 'Atomics.store'
        | 'Atomics.sub'
        | 'Atomics.xor'
        | 'extends'
        | 'extendsArray'
        | 'extendsRegExp'
        | 'extendsFunction'
        | 'extendsPromise'
        | 'extendsBoolean'
        | 'extendsNumber'
        | 'extendsString'
        | 'extendsMap'
        | 'extendsSet'
        | 'extendsNull'
      )[];
    };

/**
 * Options.
 */
export type NoUnsupportedFeaturesOptions = [NoUnsupportedFeaturesOption?];

/**
 * Disallow unsupported ECMAScript features on the specified version.
 *
 * @deprecated
 *
 * @see [no-unsupported-features](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-unsupported-features.md)
 */
export type NoUnsupportedFeaturesRuleConfig =
  RuleConfig<NoUnsupportedFeaturesOptions>;

/**
 * Disallow unsupported ECMAScript features on the specified version.
 *
 * @deprecated
 *
 * @see [no-unsupported-features](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-unsupported-features.md)
 */
export interface NoUnsupportedFeaturesRule {
  /**
   * Disallow unsupported ECMAScript features on the specified version.
   *
   * @deprecated
   *
   * @see [no-unsupported-features](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-unsupported-features.md)
   */
  'n/no-unsupported-features': NoUnsupportedFeaturesRuleConfig;
}
