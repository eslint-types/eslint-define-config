import type { AccessorPairsRule } from './accessor-pairs';
import type { ArrayBracketNewlineRule } from './array-bracket-newline';
import type { ArrayBracketSpacingRule } from './array-bracket-spacing';
import type { ArrayCallbackReturnRule } from './array-callback-return';
import type { ArrayElementNewlineRule } from './array-element-newline';
import type { ArrowBodyStyleRule } from './arrow-body-style';
import type { ArrowParensRule } from './arrow-parens';
import type { ArrowSpacingRule } from './arrow-spacing';
import type { BlockScopedVarRule } from './block-scoped-var';
import type { BlockSpacingRule } from './block-spacing';
import type { BraceStyleRule } from './brace-style';
import type { CallbackReturnRule } from './callback-return';
import type { CamelcaseRule } from './camelcase';
import type { CapitalizedCommentsRule } from './capitalized-comments';
import type { ClassMethodsUseThisRule } from './class-methods-use-this';
import type { CommaDangleRule } from './comma-dangle';
import type { CommaSpacingRule } from './comma-spacing';
import type { CommaStyleRule } from './comma-style';
import type { ComplexityRule } from './complexity';
import type { ComputedPropertySpacingRule } from './computed-property-spacing';
import type { ConsistentReturnRule } from './consistent-return';
import type { ConsistentThisRule } from './consistent-this';
import type { ConstructorSuperRule } from './constructor-super';
import type { CurlyRule } from './curly';
import type { DefaultCaseRule } from './default-case';
import type { DefaultCaseLastRule } from './default-case-last';
import type { DefaultParamLastRule } from './default-param-last';
import type { DotLocationRule } from './dot-location';
import type { DotNotationRule } from './dot-notation';
import type { EolLastRule } from './eol-last';
import type { EqeqeqRule } from './eqeqeq';
import type { ForDirectionRule } from './for-direction';
import type { FuncCallSpacingRule } from './func-call-spacing';
import type { FuncNameMatchingRule } from './func-name-matching';
import type { FuncNamesRule } from './func-names';
import type { FuncStyleRule } from './func-style';
import type { FunctionCallArgumentNewlineRule } from './function-call-argument-newline';
import type { FunctionParenNewlineRule } from './function-paren-newline';
import type { GeneratorStarSpacingRule } from './generator-star-spacing';
import type { GetterReturnRule } from './getter-return';
import type { GlobalRequireRule } from './global-require';
import type { GroupedAccessorPairsRule } from './grouped-accessor-pairs';
import type { GuardForInRule } from './guard-for-in';
import type { HandleCallbackErrRule } from './handle-callback-err';
import type { IdBlacklistRule } from './id-blacklist';
import type { IdDenylistRule } from './id-denylist';
import type { IdLengthRule } from './id-length';
import type { IdMatchRule } from './id-match';
import type { ImplicitArrowLinebreakRule } from './implicit-arrow-linebreak';
import type { IndentRule } from './indent';
import type { IndentLegacyRule } from './indent-legacy';
import type { InitDeclarationsRule } from './init-declarations';
import type { JsxQuotesRule } from './jsx-quotes';
import type { KeySpacingRule } from './key-spacing';
import type { KeywordSpacingRule } from './keyword-spacing';
import type { LineCommentPositionRule } from './line-comment-position';
import type { LinebreakStyleRule } from './linebreak-style';
import type { LinesAroundCommentRule } from './lines-around-comment';
import type { LinesAroundDirectiveRule } from './lines-around-directive';
import type { LinesBetweenClassMembersRule } from './lines-between-class-members';
import type { LogicalAssignmentOperatorsRule } from './logical-assignment-operators';
import type { MaxClassesPerFileRule } from './max-classes-per-file';
import type { MaxDepthRule } from './max-depth';
import type { MaxLenRule } from './max-len';
import type { MaxLinesRule } from './max-lines';
import type { MaxLinesPerFunctionRule } from './max-lines-per-function';
import type { MaxNestedCallbacksRule } from './max-nested-callbacks';
import type { MaxParamsRule } from './max-params';
import type { MaxStatementsRule } from './max-statements';
import type { MaxStatementsPerLineRule } from './max-statements-per-line';
import type { MultilineCommentStyleRule } from './multiline-comment-style';
import type { MultilineTernaryRule } from './multiline-ternary';
import type { NewCapRule } from './new-cap';
import type { NewParensRule } from './new-parens';
import type { NewlineAfterVarRule } from './newline-after-var';
import type { NewlineBeforeReturnRule } from './newline-before-return';
import type { NewlinePerChainedCallRule } from './newline-per-chained-call';
import type { NoAlertRule } from './no-alert';
import type { NoArrayConstructorRule } from './no-array-constructor';
import type { NoAsyncPromiseExecutorRule } from './no-async-promise-executor';
import type { NoAwaitInLoopRule } from './no-await-in-loop';
import type { NoBitwiseRule } from './no-bitwise';
import type { NoBufferConstructorRule } from './no-buffer-constructor';
import type { NoCallerRule } from './no-caller';
import type { NoCaseDeclarationsRule } from './no-case-declarations';
import type { NoCatchShadowRule } from './no-catch-shadow';
import type { NoClassAssignRule } from './no-class-assign';
import type { NoCompareNegZeroRule } from './no-compare-neg-zero';
import type { NoCondAssignRule } from './no-cond-assign';
import type { NoConfusingArrowRule } from './no-confusing-arrow';
import type { NoConsoleRule } from './no-console';
import type { NoConstAssignRule } from './no-const-assign';
import type { NoConstantBinaryExpressionRule } from './no-constant-binary-expression';
import type { NoConstantConditionRule } from './no-constant-condition';
import type { NoConstructorReturnRule } from './no-constructor-return';
import type { NoContinueRule } from './no-continue';
import type { NoControlRegexRule } from './no-control-regex';
import type { NoDebuggerRule } from './no-debugger';
import type { NoDeleteVarRule } from './no-delete-var';
import type { NoDivRegexRule } from './no-div-regex';
import type { NoDupeArgsRule } from './no-dupe-args';
import type { NoDupeClassMembersRule } from './no-dupe-class-members';
import type { NoDupeElseIfRule } from './no-dupe-else-if';
import type { NoDupeKeysRule } from './no-dupe-keys';
import type { NoDuplicateCaseRule } from './no-duplicate-case';
import type { NoDuplicateImportsRule } from './no-duplicate-imports';
import type { NoElseReturnRule } from './no-else-return';
import type { NoEmptyRule } from './no-empty';
import type { NoEmptyCharacterClassRule } from './no-empty-character-class';
import type { NoEmptyFunctionRule } from './no-empty-function';
import type { NoEmptyPatternRule } from './no-empty-pattern';
import type { NoEmptyStaticBlockRule } from './no-empty-static-block';
import type { NoEqNullRule } from './no-eq-null';
import type { NoEvalRule } from './no-eval';
import type { NoExAssignRule } from './no-ex-assign';
import type { NoExtendNativeRule } from './no-extend-native';
import type { NoExtraBindRule } from './no-extra-bind';
import type { NoExtraBooleanCastRule } from './no-extra-boolean-cast';
import type { NoExtraLabelRule } from './no-extra-label';
import type { NoExtraParensRule } from './no-extra-parens';
import type { NoExtraSemiRule } from './no-extra-semi';
import type { NoFallthroughRule } from './no-fallthrough';
import type { NoFloatingDecimalRule } from './no-floating-decimal';
import type { NoFuncAssignRule } from './no-func-assign';
import type { NoGlobalAssignRule } from './no-global-assign';
import type { NoImplicitCoercionRule } from './no-implicit-coercion';
import type { NoImplicitGlobalsRule } from './no-implicit-globals';
import type { NoImpliedEvalRule } from './no-implied-eval';
import type { NoImportAssignRule } from './no-import-assign';
import type { NoInlineCommentsRule } from './no-inline-comments';
import type { NoInnerDeclarationsRule } from './no-inner-declarations';
import type { NoInvalidRegexpRule } from './no-invalid-regexp';
import type { NoInvalidThisRule } from './no-invalid-this';
import type { NoIrregularWhitespaceRule } from './no-irregular-whitespace';
import type { NoIteratorRule } from './no-iterator';
import type { NoLabelVarRule } from './no-label-var';
import type { NoLabelsRule } from './no-labels';
import type { NoLoneBlocksRule } from './no-lone-blocks';
import type { NoLonelyIfRule } from './no-lonely-if';
import type { NoLoopFuncRule } from './no-loop-func';
import type { NoLossOfPrecisionRule } from './no-loss-of-precision';
import type { NoMagicNumbersRule } from './no-magic-numbers';
import type { NoMisleadingCharacterClassRule } from './no-misleading-character-class';
import type { NoMixedOperatorsRule } from './no-mixed-operators';
import type { NoMixedRequiresRule } from './no-mixed-requires';
import type { NoMixedSpacesAndTabsRule } from './no-mixed-spaces-and-tabs';
import type { NoMultiAssignRule } from './no-multi-assign';
import type { NoMultiSpacesRule } from './no-multi-spaces';
import type { NoMultiStrRule } from './no-multi-str';
import type { NoMultipleEmptyLinesRule } from './no-multiple-empty-lines';
import type { NoNativeReassignRule } from './no-native-reassign';
import type { NoNegatedConditionRule } from './no-negated-condition';
import type { NoNegatedInLhsRule } from './no-negated-in-lhs';
import type { NoNestedTernaryRule } from './no-nested-ternary';
import type { NoNewRule } from './no-new';
import type { NoNewFuncRule } from './no-new-func';
import type { NoNewNativeNonconstructorRule } from './no-new-native-nonconstructor';
import type { NoNewObjectRule } from './no-new-object';
import type { NoNewRequireRule } from './no-new-require';
import type { NoNewSymbolRule } from './no-new-symbol';
import type { NoNewWrappersRule } from './no-new-wrappers';
import type { NoNonoctalDecimalEscapeRule } from './no-nonoctal-decimal-escape';
import type { NoObjCallsRule } from './no-obj-calls';
import type { NoObjectConstructorRule } from './no-object-constructor';
import type { NoOctalRule } from './no-octal';
import type { NoOctalEscapeRule } from './no-octal-escape';
import type { NoParamReassignRule } from './no-param-reassign';
import type { NoPathConcatRule } from './no-path-concat';
import type { NoPlusplusRule } from './no-plusplus';
import type { NoProcessEnvRule } from './no-process-env';
import type { NoProcessExitRule } from './no-process-exit';
import type { NoPromiseExecutorReturnRule } from './no-promise-executor-return';
import type { NoProtoRule } from './no-proto';
import type { NoPrototypeBuiltinsRule } from './no-prototype-builtins';
import type { NoRedeclareRule } from './no-redeclare';
import type { NoRegexSpacesRule } from './no-regex-spaces';
import type { NoRestrictedExportsRule } from './no-restricted-exports';
import type { NoRestrictedGlobalsRule } from './no-restricted-globals';
import type { NoRestrictedImportsRule } from './no-restricted-imports';
import type { NoRestrictedModulesRule } from './no-restricted-modules';
import type { NoRestrictedPropertiesRule } from './no-restricted-properties';
import type { NoRestrictedSyntaxRule } from './no-restricted-syntax';
import type { NoReturnAssignRule } from './no-return-assign';
import type { NoReturnAwaitRule } from './no-return-await';
import type { NoScriptUrlRule } from './no-script-url';
import type { NoSelfAssignRule } from './no-self-assign';
import type { NoSelfCompareRule } from './no-self-compare';
import type { NoSequencesRule } from './no-sequences';
import type { NoSetterReturnRule } from './no-setter-return';
import type { NoShadowRule } from './no-shadow';
import type { NoShadowRestrictedNamesRule } from './no-shadow-restricted-names';
import type { NoSpacedFuncRule } from './no-spaced-func';
import type { NoSparseArraysRule } from './no-sparse-arrays';
import type { NoSyncRule } from './no-sync';
import type { NoTabsRule } from './no-tabs';
import type { NoTemplateCurlyInStringRule } from './no-template-curly-in-string';
import type { NoTernaryRule } from './no-ternary';
import type { NoThisBeforeSuperRule } from './no-this-before-super';
import type { NoThrowLiteralRule } from './no-throw-literal';
import type { NoTrailingSpacesRule } from './no-trailing-spaces';
import type { NoUndefRule } from './no-undef';
import type { NoUndefInitRule } from './no-undef-init';
import type { NoUndefinedRule } from './no-undefined';
import type { NoUnderscoreDangleRule } from './no-underscore-dangle';
import type { NoUnexpectedMultilineRule } from './no-unexpected-multiline';
import type { NoUnmodifiedLoopConditionRule } from './no-unmodified-loop-condition';
import type { NoUnneededTernaryRule } from './no-unneeded-ternary';
import type { NoUnreachableRule } from './no-unreachable';
import type { NoUnreachableLoopRule } from './no-unreachable-loop';
import type { NoUnsafeFinallyRule } from './no-unsafe-finally';
import type { NoUnsafeNegationRule } from './no-unsafe-negation';
import type { NoUnsafeOptionalChainingRule } from './no-unsafe-optional-chaining';
import type { NoUnusedExpressionsRule } from './no-unused-expressions';
import type { NoUnusedLabelsRule } from './no-unused-labels';
import type { NoUnusedPrivateClassMembersRule } from './no-unused-private-class-members';
import type { NoUnusedVarsRule } from './no-unused-vars';
import type { NoUseBeforeDefineRule } from './no-use-before-define';
import type { NoUselessBackreferenceRule } from './no-useless-backreference';
import type { NoUselessCallRule } from './no-useless-call';
import type { NoUselessCatchRule } from './no-useless-catch';
import type { NoUselessComputedKeyRule } from './no-useless-computed-key';
import type { NoUselessConcatRule } from './no-useless-concat';
import type { NoUselessConstructorRule } from './no-useless-constructor';
import type { NoUselessEscapeRule } from './no-useless-escape';
import type { NoUselessRenameRule } from './no-useless-rename';
import type { NoUselessReturnRule } from './no-useless-return';
import type { NoVarRule } from './no-var';
import type { NoVoidRule } from './no-void';
import type { NoWarningCommentsRule } from './no-warning-comments';
import type { NoWhitespaceBeforePropertyRule } from './no-whitespace-before-property';
import type { NoWithRule } from './no-with';
import type { NonblockStatementBodyPositionRule } from './nonblock-statement-body-position';
import type { ObjectCurlyNewlineRule } from './object-curly-newline';
import type { ObjectCurlySpacingRule } from './object-curly-spacing';
import type { ObjectPropertyNewlineRule } from './object-property-newline';
import type { ObjectShorthandRule } from './object-shorthand';
import type { OneVarRule } from './one-var';
import type { OneVarDeclarationPerLineRule } from './one-var-declaration-per-line';
import type { OperatorAssignmentRule } from './operator-assignment';
import type { OperatorLinebreakRule } from './operator-linebreak';
import type { PaddedBlocksRule } from './padded-blocks';
import type { PaddingLineBetweenStatementsRule } from './padding-line-between-statements';
import type { PreferArrowCallbackRule } from './prefer-arrow-callback';
import type { PreferConstRule } from './prefer-const';
import type { PreferDestructuringRule } from './prefer-destructuring';
import type { PreferExponentiationOperatorRule } from './prefer-exponentiation-operator';
import type { PreferNamedCaptureGroupRule } from './prefer-named-capture-group';
import type { PreferNumericLiteralsRule } from './prefer-numeric-literals';
import type { PreferObjectHasOwnRule } from './prefer-object-has-own';
import type { PreferObjectSpreadRule } from './prefer-object-spread';
import type { PreferPromiseRejectErrorsRule } from './prefer-promise-reject-errors';
import type { PreferReflectRule } from './prefer-reflect';
import type { PreferRegexLiteralsRule } from './prefer-regex-literals';
import type { PreferRestParamsRule } from './prefer-rest-params';
import type { PreferSpreadRule } from './prefer-spread';
import type { PreferTemplateRule } from './prefer-template';
import type { QuotePropsRule } from './quote-props';
import type { QuotesRule } from './quotes';
import type { RadixRule } from './radix';
import type { RequireAtomicUpdatesRule } from './require-atomic-updates';
import type { RequireAwaitRule } from './require-await';
import type { RequireJsdocRule } from './require-jsdoc';
import type { RequireUnicodeRegexpRule } from './require-unicode-regexp';
import type { RequireYieldRule } from './require-yield';
import type { RestSpreadSpacingRule } from './rest-spread-spacing';
import type { SemiRule } from './semi';
import type { SemiSpacingRule } from './semi-spacing';
import type { SemiStyleRule } from './semi-style';
import type { SortImportsRule } from './sort-imports';
import type { SortKeysRule } from './sort-keys';
import type { SortVarsRule } from './sort-vars';
import type { SpaceBeforeBlocksRule } from './space-before-blocks';
import type { SpaceBeforeFunctionParenRule } from './space-before-function-paren';
import type { SpaceInParensRule } from './space-in-parens';
import type { SpaceInfixOpsRule } from './space-infix-ops';
import type { SpaceUnaryOpsRule } from './space-unary-ops';
import type { SpacedCommentRule } from './spaced-comment';
import type { StrictRule } from './strict';
import type { SwitchColonSpacingRule } from './switch-colon-spacing';
import type { SymbolDescriptionRule } from './symbol-description';
import type { TemplateCurlySpacingRule } from './template-curly-spacing';
import type { TemplateTagSpacingRule } from './template-tag-spacing';
import type { UnicodeBomRule } from './unicode-bom';
import type { UseIsnanRule } from './use-isnan';
import type { ValidJsdocRule } from './valid-jsdoc';
import type { ValidTypeofRule } from './valid-typeof';
import type { VarsOnTopRule } from './vars-on-top';
import type { WrapIifeRule } from './wrap-iife';
import type { WrapRegexRule } from './wrap-regex';
import type { YieldStarSpacingRule } from './yield-star-spacing';
import type { YodaRule } from './yoda';

/**
 * All Eslint rules.
 */
export type EslintRules = AccessorPairsRule &
  ArrayBracketNewlineRule &
  ArrayBracketSpacingRule &
  ArrayCallbackReturnRule &
  ArrayElementNewlineRule &
  ArrowBodyStyleRule &
  ArrowParensRule &
  ArrowSpacingRule &
  BlockScopedVarRule &
  BlockSpacingRule &
  BraceStyleRule &
  CallbackReturnRule &
  CamelcaseRule &
  CapitalizedCommentsRule &
  ClassMethodsUseThisRule &
  CommaDangleRule &
  CommaSpacingRule &
  CommaStyleRule &
  ComplexityRule &
  ComputedPropertySpacingRule &
  ConsistentReturnRule &
  ConsistentThisRule &
  ConstructorSuperRule &
  CurlyRule &
  DefaultCaseRule &
  DefaultCaseLastRule &
  DefaultParamLastRule &
  DotLocationRule &
  DotNotationRule &
  EolLastRule &
  EqeqeqRule &
  ForDirectionRule &
  FuncCallSpacingRule &
  FuncNameMatchingRule &
  FuncNamesRule &
  FuncStyleRule &
  FunctionCallArgumentNewlineRule &
  FunctionParenNewlineRule &
  GeneratorStarSpacingRule &
  GetterReturnRule &
  GlobalRequireRule &
  GroupedAccessorPairsRule &
  GuardForInRule &
  HandleCallbackErrRule &
  IdBlacklistRule &
  IdDenylistRule &
  IdLengthRule &
  IdMatchRule &
  ImplicitArrowLinebreakRule &
  IndentRule &
  IndentLegacyRule &
  InitDeclarationsRule &
  JsxQuotesRule &
  KeySpacingRule &
  KeywordSpacingRule &
  LineCommentPositionRule &
  LinebreakStyleRule &
  LinesAroundCommentRule &
  LinesAroundDirectiveRule &
  LinesBetweenClassMembersRule &
  LogicalAssignmentOperatorsRule &
  MaxClassesPerFileRule &
  MaxDepthRule &
  MaxLenRule &
  MaxLinesRule &
  MaxLinesPerFunctionRule &
  MaxNestedCallbacksRule &
  MaxParamsRule &
  MaxStatementsRule &
  MaxStatementsPerLineRule &
  MultilineCommentStyleRule &
  MultilineTernaryRule &
  NewCapRule &
  NewParensRule &
  NewlineAfterVarRule &
  NewlineBeforeReturnRule &
  NewlinePerChainedCallRule &
  NoAlertRule &
  NoArrayConstructorRule &
  NoAsyncPromiseExecutorRule &
  NoAwaitInLoopRule &
  NoBitwiseRule &
  NoBufferConstructorRule &
  NoCallerRule &
  NoCaseDeclarationsRule &
  NoCatchShadowRule &
  NoClassAssignRule &
  NoCompareNegZeroRule &
  NoCondAssignRule &
  NoConfusingArrowRule &
  NoConsoleRule &
  NoConstAssignRule &
  NoConstantBinaryExpressionRule &
  NoConstantConditionRule &
  NoConstructorReturnRule &
  NoContinueRule &
  NoControlRegexRule &
  NoDebuggerRule &
  NoDeleteVarRule &
  NoDivRegexRule &
  NoDupeArgsRule &
  NoDupeClassMembersRule &
  NoDupeElseIfRule &
  NoDupeKeysRule &
  NoDuplicateCaseRule &
  NoDuplicateImportsRule &
  NoElseReturnRule &
  NoEmptyRule &
  NoEmptyCharacterClassRule &
  NoEmptyFunctionRule &
  NoEmptyPatternRule &
  NoEmptyStaticBlockRule &
  NoEqNullRule &
  NoEvalRule &
  NoExAssignRule &
  NoExtendNativeRule &
  NoExtraBindRule &
  NoExtraBooleanCastRule &
  NoExtraLabelRule &
  NoExtraParensRule &
  NoExtraSemiRule &
  NoFallthroughRule &
  NoFloatingDecimalRule &
  NoFuncAssignRule &
  NoGlobalAssignRule &
  NoImplicitCoercionRule &
  NoImplicitGlobalsRule &
  NoImpliedEvalRule &
  NoImportAssignRule &
  NoInlineCommentsRule &
  NoInnerDeclarationsRule &
  NoInvalidRegexpRule &
  NoInvalidThisRule &
  NoIrregularWhitespaceRule &
  NoIteratorRule &
  NoLabelVarRule &
  NoLabelsRule &
  NoLoneBlocksRule &
  NoLonelyIfRule &
  NoLoopFuncRule &
  NoLossOfPrecisionRule &
  NoMagicNumbersRule &
  NoMisleadingCharacterClassRule &
  NoMixedOperatorsRule &
  NoMixedRequiresRule &
  NoMixedSpacesAndTabsRule &
  NoMultiAssignRule &
  NoMultiSpacesRule &
  NoMultiStrRule &
  NoMultipleEmptyLinesRule &
  NoNativeReassignRule &
  NoNegatedConditionRule &
  NoNegatedInLhsRule &
  NoNestedTernaryRule &
  NoNewRule &
  NoNewFuncRule &
  NoNewNativeNonconstructorRule &
  NoNewObjectRule &
  NoNewRequireRule &
  NoNewSymbolRule &
  NoNewWrappersRule &
  NoNonoctalDecimalEscapeRule &
  NoObjCallsRule &
  NoObjectConstructorRule &
  NoOctalRule &
  NoOctalEscapeRule &
  NoParamReassignRule &
  NoPathConcatRule &
  NoPlusplusRule &
  NoProcessEnvRule &
  NoProcessExitRule &
  NoPromiseExecutorReturnRule &
  NoProtoRule &
  NoPrototypeBuiltinsRule &
  NoRedeclareRule &
  NoRegexSpacesRule &
  NoRestrictedExportsRule &
  NoRestrictedGlobalsRule &
  NoRestrictedImportsRule &
  NoRestrictedModulesRule &
  NoRestrictedPropertiesRule &
  NoRestrictedSyntaxRule &
  NoReturnAssignRule &
  NoReturnAwaitRule &
  NoScriptUrlRule &
  NoSelfAssignRule &
  NoSelfCompareRule &
  NoSequencesRule &
  NoSetterReturnRule &
  NoShadowRule &
  NoShadowRestrictedNamesRule &
  NoSpacedFuncRule &
  NoSparseArraysRule &
  NoSyncRule &
  NoTabsRule &
  NoTemplateCurlyInStringRule &
  NoTernaryRule &
  NoThisBeforeSuperRule &
  NoThrowLiteralRule &
  NoTrailingSpacesRule &
  NoUndefRule &
  NoUndefInitRule &
  NoUndefinedRule &
  NoUnderscoreDangleRule &
  NoUnexpectedMultilineRule &
  NoUnmodifiedLoopConditionRule &
  NoUnneededTernaryRule &
  NoUnreachableRule &
  NoUnreachableLoopRule &
  NoUnsafeFinallyRule &
  NoUnsafeNegationRule &
  NoUnsafeOptionalChainingRule &
  NoUnusedExpressionsRule &
  NoUnusedLabelsRule &
  NoUnusedPrivateClassMembersRule &
  NoUnusedVarsRule &
  NoUseBeforeDefineRule &
  NoUselessBackreferenceRule &
  NoUselessCallRule &
  NoUselessCatchRule &
  NoUselessComputedKeyRule &
  NoUselessConcatRule &
  NoUselessConstructorRule &
  NoUselessEscapeRule &
  NoUselessRenameRule &
  NoUselessReturnRule &
  NoVarRule &
  NoVoidRule &
  NoWarningCommentsRule &
  NoWhitespaceBeforePropertyRule &
  NoWithRule &
  NonblockStatementBodyPositionRule &
  ObjectCurlyNewlineRule &
  ObjectCurlySpacingRule &
  ObjectPropertyNewlineRule &
  ObjectShorthandRule &
  OneVarRule &
  OneVarDeclarationPerLineRule &
  OperatorAssignmentRule &
  OperatorLinebreakRule &
  PaddedBlocksRule &
  PaddingLineBetweenStatementsRule &
  PreferArrowCallbackRule &
  PreferConstRule &
  PreferDestructuringRule &
  PreferExponentiationOperatorRule &
  PreferNamedCaptureGroupRule &
  PreferNumericLiteralsRule &
  PreferObjectHasOwnRule &
  PreferObjectSpreadRule &
  PreferPromiseRejectErrorsRule &
  PreferReflectRule &
  PreferRegexLiteralsRule &
  PreferRestParamsRule &
  PreferSpreadRule &
  PreferTemplateRule &
  QuotePropsRule &
  QuotesRule &
  RadixRule &
  RequireAtomicUpdatesRule &
  RequireAwaitRule &
  RequireJsdocRule &
  RequireUnicodeRegexpRule &
  RequireYieldRule &
  RestSpreadSpacingRule &
  SemiRule &
  SemiSpacingRule &
  SemiStyleRule &
  SortImportsRule &
  SortKeysRule &
  SortVarsRule &
  SpaceBeforeBlocksRule &
  SpaceBeforeFunctionParenRule &
  SpaceInParensRule &
  SpaceInfixOpsRule &
  SpaceUnaryOpsRule &
  SpacedCommentRule &
  StrictRule &
  SwitchColonSpacingRule &
  SymbolDescriptionRule &
  TemplateCurlySpacingRule &
  TemplateTagSpacingRule &
  UnicodeBomRule &
  UseIsnanRule &
  ValidJsdocRule &
  ValidTypeofRule &
  VarsOnTopRule &
  WrapIifeRule &
  WrapRegexRule &
  YieldStarSpacingRule &
  YodaRule;
