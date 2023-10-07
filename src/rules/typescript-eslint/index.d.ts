import type { AdjacentOverloadSignaturesRule } from './adjacent-overload-signatures';
import type { ArrayTypeRule } from './array-type';
import type { AwaitThenableRule } from './await-thenable';
import type { BanTsCommentRule } from './ban-ts-comment';
import type { BanTslintCommentRule } from './ban-tslint-comment';
import type { BanTypesRule } from './ban-types';
import type { BlockSpacingRule } from './block-spacing';
import type { BraceStyleRule } from './brace-style';
import type { ClassLiteralPropertyStyleRule } from './class-literal-property-style';
import type { ClassMethodsUseThisRule } from './class-methods-use-this';
import type { CommaDangleRule } from './comma-dangle';
import type { CommaSpacingRule } from './comma-spacing';
import type { ConsistentGenericConstructorsRule } from './consistent-generic-constructors';
import type { ConsistentIndexedObjectStyleRule } from './consistent-indexed-object-style';
import type { ConsistentTypeAssertionsRule } from './consistent-type-assertions';
import type { ConsistentTypeDefinitionsRule } from './consistent-type-definitions';
import type { ConsistentTypeExportsRule } from './consistent-type-exports';
import type { ConsistentTypeImportsRule } from './consistent-type-imports';
import type { DefaultParamLastRule } from './default-param-last';
import type { DotNotationRule } from './dot-notation';
import type { ExplicitFunctionReturnTypeRule } from './explicit-function-return-type';
import type { ExplicitMemberAccessibilityRule } from './explicit-member-accessibility';
import type { ExplicitModuleBoundaryTypesRule } from './explicit-module-boundary-types';
import type { FuncCallSpacingRule } from './func-call-spacing';
import type { IndentRule } from './indent';
import type { InitDeclarationsRule } from './init-declarations';
import type { KeySpacingRule } from './key-spacing';
import type { KeywordSpacingRule } from './keyword-spacing';
import type { LinesAroundCommentRule } from './lines-around-comment';
import type { LinesBetweenClassMembersRule } from './lines-between-class-members';
import type { MemberDelimiterStyleRule } from './member-delimiter-style';
import type { MemberOrderingRule } from './member-ordering';
import type { MethodSignatureStyleRule } from './method-signature-style';
import type { NamingConventionRule } from './naming-convention';
import type { NoArrayConstructorRule } from './no-array-constructor';
import type { NoBaseToStringRule } from './no-base-to-string';
import type { NoConfusingNonNullAssertionRule } from './no-confusing-non-null-assertion';
import type { NoConfusingVoidExpressionRule } from './no-confusing-void-expression';
import type { NoDupeClassMembersRule } from './no-dupe-class-members';
import type { NoDuplicateEnumValuesRule } from './no-duplicate-enum-values';
import type { NoDuplicateTypeConstituentsRule } from './no-duplicate-type-constituents';
import type { NoDynamicDeleteRule } from './no-dynamic-delete';
import type { NoEmptyFunctionRule } from './no-empty-function';
import type { NoEmptyInterfaceRule } from './no-empty-interface';
import type { NoExplicitAnyRule } from './no-explicit-any';
import type { NoExtraNonNullAssertionRule } from './no-extra-non-null-assertion';
import type { NoExtraParensRule } from './no-extra-parens';
import type { NoExtraSemiRule } from './no-extra-semi';
import type { NoExtraneousClassRule } from './no-extraneous-class';
import type { NoFloatingPromisesRule } from './no-floating-promises';
import type { NoForInArrayRule } from './no-for-in-array';
import type { NoImpliedEvalRule } from './no-implied-eval';
import type { NoImportTypeSideEffectsRule } from './no-import-type-side-effects';
import type { NoInferrableTypesRule } from './no-inferrable-types';
import type { NoInvalidThisRule } from './no-invalid-this';
import type { NoInvalidVoidTypeRule } from './no-invalid-void-type';
import type { NoLoopFuncRule } from './no-loop-func';
import type { NoLossOfPrecisionRule } from './no-loss-of-precision';
import type { NoMagicNumbersRule } from './no-magic-numbers';
import type { NoMeaninglessVoidOperatorRule } from './no-meaningless-void-operator';
import type { NoMisusedNewRule } from './no-misused-new';
import type { NoMisusedPromisesRule } from './no-misused-promises';
import type { NoMixedEnumsRule } from './no-mixed-enums';
import type { NoNamespaceRule } from './no-namespace';
import type { NoNonNullAssertedNullishCoalescingRule } from './no-non-null-asserted-nullish-coalescing';
import type { NoNonNullAssertedOptionalChainRule } from './no-non-null-asserted-optional-chain';
import type { NoNonNullAssertionRule } from './no-non-null-assertion';
import type { NoRedeclareRule } from './no-redeclare';
import type { NoRedundantTypeConstituentsRule } from './no-redundant-type-constituents';
import type { NoRequireImportsRule } from './no-require-imports';
import type { NoRestrictedImportsRule } from './no-restricted-imports';
import type { NoShadowRule } from './no-shadow';
import type { NoThisAliasRule } from './no-this-alias';
import type { NoThrowLiteralRule } from './no-throw-literal';
import type { NoTypeAliasRule } from './no-type-alias';
import type { NoUnnecessaryBooleanLiteralCompareRule } from './no-unnecessary-boolean-literal-compare';
import type { NoUnnecessaryConditionRule } from './no-unnecessary-condition';
import type { NoUnnecessaryQualifierRule } from './no-unnecessary-qualifier';
import type { NoUnnecessaryTypeArgumentsRule } from './no-unnecessary-type-arguments';
import type { NoUnnecessaryTypeAssertionRule } from './no-unnecessary-type-assertion';
import type { NoUnnecessaryTypeConstraintRule } from './no-unnecessary-type-constraint';
import type { NoUnsafeArgumentRule } from './no-unsafe-argument';
import type { NoUnsafeAssignmentRule } from './no-unsafe-assignment';
import type { NoUnsafeCallRule } from './no-unsafe-call';
import type { NoUnsafeDeclarationMergingRule } from './no-unsafe-declaration-merging';
import type { NoUnsafeEnumComparisonRule } from './no-unsafe-enum-comparison';
import type { NoUnsafeMemberAccessRule } from './no-unsafe-member-access';
import type { NoUnsafeReturnRule } from './no-unsafe-return';
import type { NoUnusedExpressionsRule } from './no-unused-expressions';
import type { NoUnusedVarsRule } from './no-unused-vars';
import type { NoUseBeforeDefineRule } from './no-use-before-define';
import type { NoUselessConstructorRule } from './no-useless-constructor';
import type { NoUselessEmptyExportRule } from './no-useless-empty-export';
import type { NoVarRequiresRule } from './no-var-requires';
import type { NonNullableTypeAssertionStyleRule } from './non-nullable-type-assertion-style';
import type { ObjectCurlySpacingRule } from './object-curly-spacing';
import type { PaddingLineBetweenStatementsRule } from './padding-line-between-statements';
import type { ParameterPropertiesRule } from './parameter-properties';
import type { PreferAsConstRule } from './prefer-as-const';
import type { PreferEnumInitializersRule } from './prefer-enum-initializers';
import type { PreferForOfRule } from './prefer-for-of';
import type { PreferFunctionTypeRule } from './prefer-function-type';
import type { PreferIncludesRule } from './prefer-includes';
import type { PreferLiteralEnumMemberRule } from './prefer-literal-enum-member';
import type { PreferNamespaceKeywordRule } from './prefer-namespace-keyword';
import type { PreferNullishCoalescingRule } from './prefer-nullish-coalescing';
import type { PreferOptionalChainRule } from './prefer-optional-chain';
import type { PreferReadonlyRule } from './prefer-readonly';
import type { PreferReadonlyParameterTypesRule } from './prefer-readonly-parameter-types';
import type { PreferReduceTypeParameterRule } from './prefer-reduce-type-parameter';
import type { PreferRegexpExecRule } from './prefer-regexp-exec';
import type { PreferReturnThisTypeRule } from './prefer-return-this-type';
import type { PreferStringStartsEndsWithRule } from './prefer-string-starts-ends-with';
import type { PreferTsExpectErrorRule } from './prefer-ts-expect-error';
import type { PromiseFunctionAsyncRule } from './promise-function-async';
import type { QuotesRule } from './quotes';
import type { RequireArraySortCompareRule } from './require-array-sort-compare';
import type { RequireAwaitRule } from './require-await';
import type { RestrictPlusOperandsRule } from './restrict-plus-operands';
import type { RestrictTemplateExpressionsRule } from './restrict-template-expressions';
import type { ReturnAwaitRule } from './return-await';
import type { SemiRule } from './semi';
import type { SortTypeConstituentsRule } from './sort-type-constituents';
import type { SpaceBeforeBlocksRule } from './space-before-blocks';
import type { SpaceBeforeFunctionParenRule } from './space-before-function-paren';
import type { SpaceInfixOpsRule } from './space-infix-ops';
import type { StrictBooleanExpressionsRule } from './strict-boolean-expressions';
import type { SwitchExhaustivenessCheckRule } from './switch-exhaustiveness-check';
import type { TripleSlashReferenceRule } from './triple-slash-reference';
import type { TypeAnnotationSpacingRule } from './type-annotation-spacing';
import type { TypedefRule } from './typedef';
import type { UnboundMethodRule } from './unbound-method';
import type { UnifiedSignaturesRule } from './unified-signatures';

/**
 * All TypeScript rules.
 */
export type TypeScriptRules = AdjacentOverloadSignaturesRule &
  ArrayTypeRule &
  AwaitThenableRule &
  BanTsCommentRule &
  BanTslintCommentRule &
  BanTypesRule &
  BlockSpacingRule &
  BraceStyleRule &
  ClassLiteralPropertyStyleRule &
  ClassMethodsUseThisRule &
  CommaDangleRule &
  CommaSpacingRule &
  ConsistentGenericConstructorsRule &
  ConsistentIndexedObjectStyleRule &
  ConsistentTypeAssertionsRule &
  ConsistentTypeDefinitionsRule &
  ConsistentTypeExportsRule &
  ConsistentTypeImportsRule &
  DefaultParamLastRule &
  DotNotationRule &
  ExplicitFunctionReturnTypeRule &
  ExplicitMemberAccessibilityRule &
  ExplicitModuleBoundaryTypesRule &
  FuncCallSpacingRule &
  IndentRule &
  InitDeclarationsRule &
  KeySpacingRule &
  KeywordSpacingRule &
  LinesAroundCommentRule &
  LinesBetweenClassMembersRule &
  MemberDelimiterStyleRule &
  MemberOrderingRule &
  MethodSignatureStyleRule &
  NamingConventionRule &
  NoArrayConstructorRule &
  NoBaseToStringRule &
  NoConfusingNonNullAssertionRule &
  NoConfusingVoidExpressionRule &
  NoDupeClassMembersRule &
  NoDuplicateEnumValuesRule &
  NoDuplicateTypeConstituentsRule &
  NoDynamicDeleteRule &
  NoEmptyFunctionRule &
  NoEmptyInterfaceRule &
  NoExplicitAnyRule &
  NoExtraNonNullAssertionRule &
  NoExtraParensRule &
  NoExtraSemiRule &
  NoExtraneousClassRule &
  NoFloatingPromisesRule &
  NoForInArrayRule &
  NoImpliedEvalRule &
  NoImportTypeSideEffectsRule &
  NoInferrableTypesRule &
  NoInvalidThisRule &
  NoInvalidVoidTypeRule &
  NoLoopFuncRule &
  NoLossOfPrecisionRule &
  NoMagicNumbersRule &
  NoMeaninglessVoidOperatorRule &
  NoMisusedNewRule &
  NoMisusedPromisesRule &
  NoMixedEnumsRule &
  NoNamespaceRule &
  NoNonNullAssertedNullishCoalescingRule &
  NoNonNullAssertedOptionalChainRule &
  NoNonNullAssertionRule &
  NoRedeclareRule &
  NoRedundantTypeConstituentsRule &
  NoRequireImportsRule &
  NoRestrictedImportsRule &
  NoShadowRule &
  NoThisAliasRule &
  NoThrowLiteralRule &
  NoTypeAliasRule &
  NoUnnecessaryBooleanLiteralCompareRule &
  NoUnnecessaryConditionRule &
  NoUnnecessaryQualifierRule &
  NoUnnecessaryTypeArgumentsRule &
  NoUnnecessaryTypeAssertionRule &
  NoUnnecessaryTypeConstraintRule &
  NoUnsafeArgumentRule &
  NoUnsafeAssignmentRule &
  NoUnsafeCallRule &
  NoUnsafeDeclarationMergingRule &
  NoUnsafeEnumComparisonRule &
  NoUnsafeMemberAccessRule &
  NoUnsafeReturnRule &
  NoUnusedExpressionsRule &
  NoUnusedVarsRule &
  NoUseBeforeDefineRule &
  NoUselessConstructorRule &
  NoUselessEmptyExportRule &
  NoVarRequiresRule &
  NonNullableTypeAssertionStyleRule &
  ObjectCurlySpacingRule &
  PaddingLineBetweenStatementsRule &
  ParameterPropertiesRule &
  PreferAsConstRule &
  PreferEnumInitializersRule &
  PreferForOfRule &
  PreferFunctionTypeRule &
  PreferIncludesRule &
  PreferLiteralEnumMemberRule &
  PreferNamespaceKeywordRule &
  PreferNullishCoalescingRule &
  PreferOptionalChainRule &
  PreferReadonlyRule &
  PreferReadonlyParameterTypesRule &
  PreferReduceTypeParameterRule &
  PreferRegexpExecRule &
  PreferReturnThisTypeRule &
  PreferStringStartsEndsWithRule &
  PreferTsExpectErrorRule &
  PromiseFunctionAsyncRule &
  QuotesRule &
  RequireArraySortCompareRule &
  RequireAwaitRule &
  RestrictPlusOperandsRule &
  RestrictTemplateExpressionsRule &
  ReturnAwaitRule &
  SemiRule &
  SortTypeConstituentsRule &
  SpaceBeforeBlocksRule &
  SpaceBeforeFunctionParenRule &
  SpaceInfixOpsRule &
  StrictBooleanExpressionsRule &
  SwitchExhaustivenessCheckRule &
  TripleSlashReferenceRule &
  TypeAnnotationSpacingRule &
  TypedefRule &
  UnboundMethodRule &
  UnifiedSignaturesRule;
