import type { LiteralUnion } from '../../../utility-types';
import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface NoUnsupportedFeaturesEsSyntaxOption {
  /**
   * As mentioned above, this rule reads the [engines](https://docs.npmjs.com/cli/v7/configuring-npm/package-json) field of `package.json`. But, you can overwrite the version by `version` option.
   *
   * The `version` option accepts [the valid version range of `node-semver`](https://github.com/npm/node-semver#range-grammar).
   *
   * @see [version](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md#version)
   */
  version?: string;
  /**
   * If you are using transpilers, maybe you want to ignore the warnings about some features.
   *
   * @see [ignores](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md#ignores)
   */
  ignores?: LiteralUnion<
    | 'arrowFunctions'
    | 'binaryNumericLiterals'
    | 'blockScopedFunctions'
    | 'blockScopedVariables'
    | 'classes'
    | 'computedProperties'
    | 'defaultParameters'
    | 'destructuring'
    | 'forOfLoops'
    | 'generators'
    | 'modules'
    | 'new.target'
    | 'objectSuperProperties'
    | 'octalNumericLiterals'
    | 'propertyShorthands'
    | 'regexpU'
    | 'regexpY'
    | 'restParameters'
    | 'spreadElements'
    | 'templateLiterals'
    | 'unicodeCodePointEscapes'
    | 'exponentialOperators'
    | 'asyncFunctions'
    | 'trailingCommasInFunctions'
    | 'asyncIteration'
    | 'malformedTemplateLiterals'
    | 'regexpLookbehind'
    | 'regexpNamedCaptureGroups'
    | 'regexpS'
    | 'regexpUnicodeProperties'
    | 'restSpreadProperties'
    | 'jsonSuperset'
    | 'optionalCatchBinding'
    | 'bigint'
    | 'dynamicImport'
  >[];
}

/**
 * Options.
 */
export type NoUnsupportedFeaturesEsSyntaxOptions = [NoUnsupportedFeaturesEsSyntaxOption?];

/**
 * Disallow unsupported ECMAScript syntax on the specified version.
 *
 * @see [no-unsupported-features/es-syntax](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unsupported-features/es-syntax.md)
 */
export type NoUnsupportedFeaturesEsSyntaxRuleConfig = RuleConfig<NoUnsupportedFeaturesEsSyntaxOptions>;

/**
 * Disallow unsupported ECMAScript syntax on the specified version.
 *
 * @see [no-unsupported-features/es-syntax](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unsupported-features/es-syntax.md)
 */
export interface NoUnsupportedFeaturesEsSyntaxRule {
  /**
   * Disallow unsupported ECMAScript syntax on the specified version.
   *
   * @see [no-unsupported-features/es-syntax](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unsupported-features/es-syntax.md)
   */
  'node/no-unsupported-features/es-syntax': NoUnsupportedFeaturesEsSyntaxRuleConfig;
}
