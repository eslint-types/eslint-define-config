import type { LiteralUnion } from '../../../utility-types';
import type { RuleConfig } from '../../rule-config';

/** IgnoreValue. */
export type IgnoreValue =
  // ES2020:
  | 'bigint'
  | 'dynamicImport'
  // ES2019:
  | 'jsonSuperset'
  | 'optionalCatchBinding'
  // ES2018:
  | 'asyncIteration'
  | 'malformedTemplateLiterals'
  | 'regexpLookbehind'
  | 'regexpNamedCaptureGroups'
  | 'regexpS'
  | 'regexpUnicodeProperties'
  | 'restSpreadProperties'
  // ES2017:
  | 'asyncFunctions'
  | 'trailingCommasInFunctions'
  // ES2016:
  | 'exponentialOperators'
  // ES2015:
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
  | 'unicodeCodePointEscapes';

/**
 * Option.
 */
export type NoUnsupportedFeaturesEsSyntaxRuleOption = {
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
  ignores?: Array<LiteralUnion<IgnoreValue>>;
};

/**
 * Options.
 */
export type NoUnsupportedFeaturesEsSyntaxRuleOptions = [NoUnsupportedFeaturesEsSyntaxRuleOption?];

/**
 * @see [node/no-unsupported-features/es-syntax](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md)
 */
export type NoUnsupportedFeaturesEsSyntaxRuleConfig = RuleConfig<NoUnsupportedFeaturesEsSyntaxRuleOptions>;

/**
 * @see [node/no-unsupported-features/es-syntax](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md)
 */
export interface NoUnsupportedFeaturesEsSyntaxRule {
  /**
   * @see [node/no-unsupported-features/es-syntax](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md)
   */
  'node/no-unsupported-features/es-syntax': NoUnsupportedFeaturesEsSyntaxRuleConfig;
}
