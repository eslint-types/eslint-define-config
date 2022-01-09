import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface NoUnsupportedFeaturesEsSyntaxOption {
  version?: string;
  ignores?: (
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
  )[];
}

/**
 * Options.
 */
export type NoUnsupportedFeaturesEsSyntaxOptions = [
  NoUnsupportedFeaturesEsSyntaxOption?,
];

/**
 * Disallow unsupported ECMAScript syntax on the specified version.
 *
 * @see [no-unsupported-features/es-syntax](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unsupported-features/es-syntax.md)
 */
export type NoUnsupportedFeaturesEsSyntaxRuleConfig =
  RuleConfig<NoUnsupportedFeaturesEsSyntaxOptions>;

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
