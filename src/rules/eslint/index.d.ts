import type { RuleConfig } from '../rule-config';
import type { AccessorPairsRuleOptions } from './accessor-pairs';
import type { ArrayBracketNewlineRuleOptions } from './array-bracket-newline';
import type { ArrayBracketSpacingRuleOptions } from './array-bracket-spacing';
import type { ArrayCallbackReturnRuleOptions } from './array-callback-return';
import type { ArrayElementNewlineRuleOptions } from './array-element-newline';
import type { ArrowBodyStyleRuleOptions } from './arrow-body-style';
import type { ArrowParensRuleOptions } from './arrow-parens';
import type { ArrowSpacingRuleOptions } from './arrow-spacing';
import type { BlockScopedVarRuleOptions } from './block-scoped-var';
import type { BlockSpacingRuleOptions } from './block-spacing';
import type { BraceStyleRuleOptions } from './brace-style';
import type { CallbackReturnRuleOptions } from './callback-return';
import type { CamelcaseRuleOptions } from './camelcase';
import type { CapitalizedCommentsRuleOptions } from './capitalized-comments';
import type { ClassMethodsUseThisRuleOptions } from './class-methods-use-this';
import type { CommaDangleRuleOptions } from './comma-dangle';
import type { CommaSpacingRuleOptions } from './comma-spacing';
import type { CommaStyleRuleOptions } from './comma-style';
import type { ComplexityRuleOptions } from './complexity';
import type { ComputedPropertySpacingRuleOptions } from './computed-property-spacing';
import type { ConsistentReturnRuleOptions } from './consistent-return';
import type { ConsistentThisRuleOptions } from './consistent-this';
import type { ConstructorSuperRuleOptions } from './constructor-super';
import type { CurlyRuleOptions } from './curly';
import type { DefaultCaseRuleOptions } from './default-case';
import type { DefaultCaseLastRuleOptions } from './default-case-last';
import type { DefaultParamLastRuleOptions } from './default-param-last';
import type { DotLocationRuleOptions } from './dot-location';
import type { DotNotationRuleOptions } from './dot-notation';
import type { EolLastRuleOptions } from './eol-last';
import type { EqeqeqRuleOptions } from './eqeqeq';
import type { ForDirectionRuleOptions } from './for-direction';
import type { FuncCallSpacingRuleOptions } from './func-call-spacing';
import type { FuncNameMatchingRuleOptions } from './func-name-matching';
import type { FuncNamesRuleOptions } from './func-names';
import type { FuncStyleRuleOptions } from './func-style';
import type { FunctionCallArgumentNewlineRuleOptions } from './function-call-argument-newline';
import type { FunctionParenNewlineRuleOptions } from './function-paren-newline';
import type { GeneratorStarSpacingRuleOptions } from './generator-star-spacing';
import type { GetterReturnRuleOptions } from './getter-return';
import type { GlobalRequireRuleOptions } from './global-require';
import type { GroupedAccessorPairsRuleOptions } from './grouped-accessor-pairs';
import type { GuardForInRuleOptions } from './guard-for-in';
import type { HandleCallbackErrRuleOptions } from './handle-callback-err';
import type { IdBlacklistRuleOptions } from './id-blacklist';
import type { IdDenylistRuleOptions } from './id-denylist';
import type { IdLengthRuleOptions } from './id-length';
import type { IdMatchRuleOptions } from './id-match';
import type { ImplicitArrowLinebreakRuleOptions } from './implicit-arrow-linebreak';
import type { IndentRuleOptions } from './indent';
import type { IndentLegacyRuleOptions } from './indent-legacy';
import type { InitDeclarationsRuleOptions } from './init-declarations';
import type { JsxQuotesRuleOptions } from './jsx-quotes';
import type { KeySpacingRuleOptions } from './key-spacing';
import type { KeywordSpacingRuleOptions } from './keyword-spacing';
import type { LineCommentPositionRuleOptions } from './line-comment-position';
import type { LinebreakStyleRuleOptions } from './linebreak-style';
import type { LinesAroundCommentRuleOptions } from './lines-around-comment';
import type { LinesAroundDirectiveRuleOptions } from './lines-around-directive';
import type { LinesBetweenClassMembersRuleOptions } from './lines-between-class-members';
import type { LogicalAssignmentOperatorsRuleOptions } from './logical-assignment-operators';
import type { MaxClassesPerFileRuleOptions } from './max-classes-per-file';
import type { MaxDepthRuleOptions } from './max-depth';
import type { MaxLenRuleOptions } from './max-len';
import type { MaxLinesRuleOptions } from './max-lines';
import type { MaxLinesPerFunctionRuleOptions } from './max-lines-per-function';
import type { MaxNestedCallbacksRuleOptions } from './max-nested-callbacks';
import type { MaxParamsRuleOptions } from './max-params';
import type { MaxStatementsRuleOptions } from './max-statements';
import type { MaxStatementsPerLineRuleOptions } from './max-statements-per-line';
import type { MultilineCommentStyleRuleOptions } from './multiline-comment-style';
import type { MultilineTernaryRuleOptions } from './multiline-ternary';
import type { NewCapRuleOptions } from './new-cap';
import type { NewParensRuleOptions } from './new-parens';
import type { NewlineAfterVarRuleOptions } from './newline-after-var';
import type { NewlineBeforeReturnRuleOptions } from './newline-before-return';
import type { NewlinePerChainedCallRuleOptions } from './newline-per-chained-call';
import type { NoAlertRuleOptions } from './no-alert';
import type { NoArrayConstructorRuleOptions } from './no-array-constructor';
import type { NoAsyncPromiseExecutorRuleOptions } from './no-async-promise-executor';
import type { NoAwaitInLoopRuleOptions } from './no-await-in-loop';
import type { NoBitwiseRuleOptions } from './no-bitwise';
import type { NoBufferConstructorRuleOptions } from './no-buffer-constructor';
import type { NoCallerRuleOptions } from './no-caller';
import type { NoCaseDeclarationsRuleOptions } from './no-case-declarations';
import type { NoCatchShadowRuleOptions } from './no-catch-shadow';
import type { NoClassAssignRuleOptions } from './no-class-assign';
import type { NoCompareNegZeroRuleOptions } from './no-compare-neg-zero';
import type { NoCondAssignRuleOptions } from './no-cond-assign';
import type { NoConfusingArrowRuleOptions } from './no-confusing-arrow';
import type { NoConsoleRuleOptions } from './no-console';
import type { NoConstAssignRuleOptions } from './no-const-assign';
import type { NoConstantBinaryExpressionRuleOptions } from './no-constant-binary-expression';
import type { NoConstantConditionRuleOptions } from './no-constant-condition';
import type { NoConstructorReturnRuleOptions } from './no-constructor-return';
import type { NoContinueRuleOptions } from './no-continue';
import type { NoControlRegexRuleOptions } from './no-control-regex';
import type { NoDebuggerRuleOptions } from './no-debugger';
import type { NoDeleteVarRuleOptions } from './no-delete-var';
import type { NoDivRegexRuleOptions } from './no-div-regex';
import type { NoDupeArgsRuleOptions } from './no-dupe-args';
import type { NoDupeClassMembersRuleOptions } from './no-dupe-class-members';
import type { NoDupeElseIfRuleOptions } from './no-dupe-else-if';
import type { NoDupeKeysRuleOptions } from './no-dupe-keys';
import type { NoDuplicateCaseRuleOptions } from './no-duplicate-case';
import type { NoDuplicateImportsRuleOptions } from './no-duplicate-imports';
import type { NoElseReturnRuleOptions } from './no-else-return';
import type { NoEmptyRuleOptions } from './no-empty';
import type { NoEmptyCharacterClassRuleOptions } from './no-empty-character-class';
import type { NoEmptyFunctionRuleOptions } from './no-empty-function';
import type { NoEmptyPatternRuleOptions } from './no-empty-pattern';
import type { NoEmptyStaticBlockRuleOptions } from './no-empty-static-block';
import type { NoEqNullRuleOptions } from './no-eq-null';
import type { NoEvalRuleOptions } from './no-eval';
import type { NoExAssignRuleOptions } from './no-ex-assign';
import type { NoExtendNativeRuleOptions } from './no-extend-native';
import type { NoExtraBindRuleOptions } from './no-extra-bind';
import type { NoExtraBooleanCastRuleOptions } from './no-extra-boolean-cast';
import type { NoExtraLabelRuleOptions } from './no-extra-label';
import type { NoExtraParensRuleOptions } from './no-extra-parens';
import type { NoExtraSemiRuleOptions } from './no-extra-semi';
import type { NoFallthroughRuleOptions } from './no-fallthrough';
import type { NoFloatingDecimalRuleOptions } from './no-floating-decimal';
import type { NoFuncAssignRuleOptions } from './no-func-assign';
import type { NoGlobalAssignRuleOptions } from './no-global-assign';
import type { NoImplicitCoercionRuleOptions } from './no-implicit-coercion';
import type { NoImplicitGlobalsRuleOptions } from './no-implicit-globals';
import type { NoImpliedEvalRuleOptions } from './no-implied-eval';
import type { NoImportAssignRuleOptions } from './no-import-assign';
import type { NoInlineCommentsRuleOptions } from './no-inline-comments';
import type { NoInnerDeclarationsRuleOptions } from './no-inner-declarations';
import type { NoInvalidRegexpRuleOptions } from './no-invalid-regexp';
import type { NoInvalidThisRuleOptions } from './no-invalid-this';
import type { NoIrregularWhitespaceRuleOptions } from './no-irregular-whitespace';
import type { NoIteratorRuleOptions } from './no-iterator';
import type { NoLabelVarRuleOptions } from './no-label-var';
import type { NoLabelsRuleOptions } from './no-labels';
import type { NoLoneBlocksRuleOptions } from './no-lone-blocks';
import type { NoLonelyIfRuleOptions } from './no-lonely-if';
import type { NoLoopFuncRuleOptions } from './no-loop-func';
import type { NoLossOfPrecisionRuleOptions } from './no-loss-of-precision';
import type { NoMagicNumbersRuleOptions } from './no-magic-numbers';
import type { NoMisleadingCharacterClassRuleOptions } from './no-misleading-character-class';
import type { NoMixedOperatorsRuleOptions } from './no-mixed-operators';
import type { NoMixedRequiresRuleOptions } from './no-mixed-requires';
import type { NoMixedSpacesAndTabsRuleOptions } from './no-mixed-spaces-and-tabs';
import type { NoMultiAssignRuleOptions } from './no-multi-assign';
import type { NoMultiSpacesRuleOptions } from './no-multi-spaces';
import type { NoMultiStrRuleOptions } from './no-multi-str';
import type { NoMultipleEmptyLinesRuleOptions } from './no-multiple-empty-lines';
import type { NoNativeReassignRuleOptions } from './no-native-reassign';
import type { NoNegatedConditionRuleOptions } from './no-negated-condition';
import type { NoNegatedInLhsRuleOptions } from './no-negated-in-lhs';
import type { NoNestedTernaryRuleOptions } from './no-nested-ternary';
import type { NoNewRuleOptions } from './no-new';
import type { NoNewFuncRuleOptions } from './no-new-func';
import type { NoNewNativeNonconstructorRuleOptions } from './no-new-native-nonconstructor';
import type { NoNewObjectRuleOptions } from './no-new-object';
import type { NoNewRequireRuleOptions } from './no-new-require';
import type { NoNewSymbolRuleOptions } from './no-new-symbol';
import type { NoNewWrappersRuleOptions } from './no-new-wrappers';
import type { NoNonoctalDecimalEscapeRuleOptions } from './no-nonoctal-decimal-escape';
import type { NoObjCallsRuleOptions } from './no-obj-calls';
import type { NoObjectConstructorRuleOptions } from './no-object-constructor';
import type { NoOctalRuleOptions } from './no-octal';
import type { NoOctalEscapeRuleOptions } from './no-octal-escape';
import type { NoParamReassignRuleOptions } from './no-param-reassign';
import type { NoPathConcatRuleOptions } from './no-path-concat';
import type { NoPlusplusRuleOptions } from './no-plusplus';
import type { NoProcessEnvRuleOptions } from './no-process-env';
import type { NoProcessExitRuleOptions } from './no-process-exit';
import type { NoPromiseExecutorReturnRuleOptions } from './no-promise-executor-return';
import type { NoProtoRuleOptions } from './no-proto';
import type { NoPrototypeBuiltinsRuleOptions } from './no-prototype-builtins';
import type { NoRedeclareRuleOptions } from './no-redeclare';
import type { NoRegexSpacesRuleOptions } from './no-regex-spaces';
import type { NoRestrictedExportsRuleOptions } from './no-restricted-exports';
import type { NoRestrictedGlobalsRuleOptions } from './no-restricted-globals';
import type { NoRestrictedImportsRuleOptions } from './no-restricted-imports';
import type { NoRestrictedModulesRuleOptions } from './no-restricted-modules';
import type { NoRestrictedPropertiesRuleOptions } from './no-restricted-properties';
import type { NoRestrictedSyntaxRuleOptions } from './no-restricted-syntax';
import type { NoReturnAssignRuleOptions } from './no-return-assign';
import type { NoReturnAwaitRuleOptions } from './no-return-await';
import type { NoScriptUrlRuleOptions } from './no-script-url';
import type { NoSelfAssignRuleOptions } from './no-self-assign';
import type { NoSelfCompareRuleOptions } from './no-self-compare';
import type { NoSequencesRuleOptions } from './no-sequences';
import type { NoSetterReturnRuleOptions } from './no-setter-return';
import type { NoShadowRuleOptions } from './no-shadow';
import type { NoShadowRestrictedNamesRuleOptions } from './no-shadow-restricted-names';
import type { NoSpacedFuncRuleOptions } from './no-spaced-func';
import type { NoSparseArraysRuleOptions } from './no-sparse-arrays';
import type { NoSyncRuleOptions } from './no-sync';
import type { NoTabsRuleOptions } from './no-tabs';
import type { NoTemplateCurlyInStringRuleOptions } from './no-template-curly-in-string';
import type { NoTernaryRuleOptions } from './no-ternary';
import type { NoThisBeforeSuperRuleOptions } from './no-this-before-super';
import type { NoThrowLiteralRuleOptions } from './no-throw-literal';
import type { NoTrailingSpacesRuleOptions } from './no-trailing-spaces';
import type { NoUndefRuleOptions } from './no-undef';
import type { NoUndefInitRuleOptions } from './no-undef-init';
import type { NoUndefinedRuleOptions } from './no-undefined';
import type { NoUnderscoreDangleRuleOptions } from './no-underscore-dangle';
import type { NoUnexpectedMultilineRuleOptions } from './no-unexpected-multiline';
import type { NoUnmodifiedLoopConditionRuleOptions } from './no-unmodified-loop-condition';
import type { NoUnneededTernaryRuleOptions } from './no-unneeded-ternary';
import type { NoUnreachableRuleOptions } from './no-unreachable';
import type { NoUnreachableLoopRuleOptions } from './no-unreachable-loop';
import type { NoUnsafeFinallyRuleOptions } from './no-unsafe-finally';
import type { NoUnsafeNegationRuleOptions } from './no-unsafe-negation';
import type { NoUnsafeOptionalChainingRuleOptions } from './no-unsafe-optional-chaining';
import type { NoUnusedExpressionsRuleOptions } from './no-unused-expressions';
import type { NoUnusedLabelsRuleOptions } from './no-unused-labels';
import type { NoUnusedPrivateClassMembersRuleOptions } from './no-unused-private-class-members';
import type { NoUnusedVarsRuleOptions } from './no-unused-vars';
import type { NoUseBeforeDefineRuleOptions } from './no-use-before-define';
import type { NoUselessBackreferenceRuleOptions } from './no-useless-backreference';
import type { NoUselessCallRuleOptions } from './no-useless-call';
import type { NoUselessCatchRuleOptions } from './no-useless-catch';
import type { NoUselessComputedKeyRuleOptions } from './no-useless-computed-key';
import type { NoUselessConcatRuleOptions } from './no-useless-concat';
import type { NoUselessConstructorRuleOptions } from './no-useless-constructor';
import type { NoUselessEscapeRuleOptions } from './no-useless-escape';
import type { NoUselessRenameRuleOptions } from './no-useless-rename';
import type { NoUselessReturnRuleOptions } from './no-useless-return';
import type { NoVarRuleOptions } from './no-var';
import type { NoVoidRuleOptions } from './no-void';
import type { NoWarningCommentsRuleOptions } from './no-warning-comments';
import type { NoWhitespaceBeforePropertyRuleOptions } from './no-whitespace-before-property';
import type { NoWithRuleOptions } from './no-with';
import type { NonblockStatementBodyPositionRuleOptions } from './nonblock-statement-body-position';
import type { ObjectCurlyNewlineRuleOptions } from './object-curly-newline';
import type { ObjectCurlySpacingRuleOptions } from './object-curly-spacing';
import type { ObjectPropertyNewlineRuleOptions } from './object-property-newline';
import type { ObjectShorthandRuleOptions } from './object-shorthand';
import type { OneVarRuleOptions } from './one-var';
import type { OneVarDeclarationPerLineRuleOptions } from './one-var-declaration-per-line';
import type { OperatorAssignmentRuleOptions } from './operator-assignment';
import type { OperatorLinebreakRuleOptions } from './operator-linebreak';
import type { PaddedBlocksRuleOptions } from './padded-blocks';
import type { PaddingLineBetweenStatementsRuleOptions } from './padding-line-between-statements';
import type { PreferArrowCallbackRuleOptions } from './prefer-arrow-callback';
import type { PreferConstRuleOptions } from './prefer-const';
import type { PreferDestructuringRuleOptions } from './prefer-destructuring';
import type { PreferExponentiationOperatorRuleOptions } from './prefer-exponentiation-operator';
import type { PreferNamedCaptureGroupRuleOptions } from './prefer-named-capture-group';
import type { PreferNumericLiteralsRuleOptions } from './prefer-numeric-literals';
import type { PreferObjectHasOwnRuleOptions } from './prefer-object-has-own';
import type { PreferObjectSpreadRuleOptions } from './prefer-object-spread';
import type { PreferPromiseRejectErrorsRuleOptions } from './prefer-promise-reject-errors';
import type { PreferReflectRuleOptions } from './prefer-reflect';
import type { PreferRegexLiteralsRuleOptions } from './prefer-regex-literals';
import type { PreferRestParamsRuleOptions } from './prefer-rest-params';
import type { PreferSpreadRuleOptions } from './prefer-spread';
import type { PreferTemplateRuleOptions } from './prefer-template';
import type { QuotePropsRuleOptions } from './quote-props';
import type { QuotesRuleOptions } from './quotes';
import type { RadixRuleOptions } from './radix';
import type { RequireAtomicUpdatesRuleOptions } from './require-atomic-updates';
import type { RequireAwaitRuleOptions } from './require-await';
import type { RequireJsdocRuleOptions } from './require-jsdoc';
import type { RequireUnicodeRegexpRuleOptions } from './require-unicode-regexp';
import type { RequireYieldRuleOptions } from './require-yield';
import type { RestSpreadSpacingRuleOptions } from './rest-spread-spacing';
import type { SemiRuleOptions } from './semi';
import type { SemiSpacingRuleOptions } from './semi-spacing';
import type { SemiStyleRuleOptions } from './semi-style';
import type { SortImportsRuleOptions } from './sort-imports';
import type { SortKeysRuleOptions } from './sort-keys';
import type { SortVarsRuleOptions } from './sort-vars';
import type { SpaceBeforeBlocksRuleOptions } from './space-before-blocks';
import type { SpaceBeforeFunctionParenRuleOptions } from './space-before-function-paren';
import type { SpaceInParensRuleOptions } from './space-in-parens';
import type { SpaceInfixOpsRuleOptions } from './space-infix-ops';
import type { SpaceUnaryOpsRuleOptions } from './space-unary-ops';
import type { SpacedCommentRuleOptions } from './spaced-comment';
import type { StrictRuleOptions } from './strict';
import type { SwitchColonSpacingRuleOptions } from './switch-colon-spacing';
import type { SymbolDescriptionRuleOptions } from './symbol-description';
import type { TemplateCurlySpacingRuleOptions } from './template-curly-spacing';
import type { TemplateTagSpacingRuleOptions } from './template-tag-spacing';
import type { UnicodeBomRuleOptions } from './unicode-bom';
import type { UseIsnanRuleOptions } from './use-isnan';
import type { ValidJsdocRuleOptions } from './valid-jsdoc';
import type { ValidTypeofRuleOptions } from './valid-typeof';
import type { VarsOnTopRuleOptions } from './vars-on-top';
import type { WrapIifeRuleOptions } from './wrap-iife';
import type { WrapRegexRuleOptions } from './wrap-regex';
import type { YieldStarSpacingRuleOptions } from './yield-star-spacing';
import type { YodaRuleOptions } from './yoda';

export interface EslintRules {
  /**
   * Enforce getter and setter pairs in objects and classes
   *
   * @see [accessor-pairs](https://eslint.org/docs/latest/rules/accessor-pairs)
   */
  'accessor-pairs': RuleConfig<AccessorPairsRuleOptions>;
  /**
   * Enforce linebreaks after opening and before closing array brackets
   *
   * @see [array-bracket-newline](https://eslint.org/docs/latest/rules/array-bracket-newline)
   */
  'array-bracket-newline': RuleConfig<ArrayBracketNewlineRuleOptions>;
  /**
   * Enforce consistent spacing inside array brackets
   *
   * @see [array-bracket-spacing](https://eslint.org/docs/latest/rules/array-bracket-spacing)
   */
  'array-bracket-spacing': RuleConfig<ArrayBracketSpacingRuleOptions>;
  /**
   * Enforce `return` statements in callbacks of array methods
   *
   * @see [array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return)
   */
  'array-callback-return': RuleConfig<ArrayCallbackReturnRuleOptions>;
  /**
   * Enforce line breaks after each array element
   *
   * @see [array-element-newline](https://eslint.org/docs/latest/rules/array-element-newline)
   */
  'array-element-newline': RuleConfig<ArrayElementNewlineRuleOptions>;
  /**
   * Require braces around arrow function bodies
   *
   * @see [arrow-body-style](https://eslint.org/docs/latest/rules/arrow-body-style)
   */
  'arrow-body-style': RuleConfig<ArrowBodyStyleRuleOptions>;
  /**
   * Require parentheses around arrow function arguments
   *
   * @see [arrow-parens](https://eslint.org/docs/latest/rules/arrow-parens)
   */
  'arrow-parens': RuleConfig<ArrowParensRuleOptions>;
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   *
   * @see [arrow-spacing](https://eslint.org/docs/latest/rules/arrow-spacing)
   */
  'arrow-spacing': RuleConfig<ArrowSpacingRuleOptions>;
  /**
   * Enforce the use of variables within the scope they are defined
   *
   * @see [block-scoped-var](https://eslint.org/docs/latest/rules/block-scoped-var)
   */
  'block-scoped-var': RuleConfig<BlockScopedVarRuleOptions>;
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   *
   * @see [block-spacing](https://eslint.org/docs/latest/rules/block-spacing)
   */
  'block-spacing': RuleConfig<BlockSpacingRuleOptions>;
  /**
   * Enforce consistent brace style for blocks
   *
   * @see [brace-style](https://eslint.org/docs/latest/rules/brace-style)
   */
  'brace-style': RuleConfig<BraceStyleRuleOptions>;
  /**
   * Require `return` statements after callbacks
   *
   * @see [callback-return](https://eslint.org/docs/latest/rules/callback-return)
   */
  'callback-return': RuleConfig<CallbackReturnRuleOptions>;
  /**
   * Enforce camelcase naming convention
   *
   * @see [camelcase](https://eslint.org/docs/latest/rules/camelcase)
   */
  camelcase: RuleConfig<CamelcaseRuleOptions>;
  /**
   * Enforce or disallow capitalization of the first letter of a comment
   *
   * @see [capitalized-comments](https://eslint.org/docs/latest/rules/capitalized-comments)
   */
  'capitalized-comments': RuleConfig<CapitalizedCommentsRuleOptions>;
  /**
   * Enforce that class methods utilize `this`
   *
   * @see [class-methods-use-this](https://eslint.org/docs/latest/rules/class-methods-use-this)
   */
  'class-methods-use-this': RuleConfig<ClassMethodsUseThisRuleOptions>;
  /**
   * Require or disallow trailing commas
   *
   * @see [comma-dangle](https://eslint.org/docs/latest/rules/comma-dangle)
   */
  'comma-dangle': RuleConfig<CommaDangleRuleOptions>;
  /**
   * Enforce consistent spacing before and after commas
   *
   * @see [comma-spacing](https://eslint.org/docs/latest/rules/comma-spacing)
   */
  'comma-spacing': RuleConfig<CommaSpacingRuleOptions>;
  /**
   * Enforce consistent comma style
   *
   * @see [comma-style](https://eslint.org/docs/latest/rules/comma-style)
   */
  'comma-style': RuleConfig<CommaStyleRuleOptions>;
  /**
   * Enforce a maximum cyclomatic complexity allowed in a program
   *
   * @see [complexity](https://eslint.org/docs/latest/rules/complexity)
   */
  complexity: RuleConfig<ComplexityRuleOptions>;
  /**
   * Enforce consistent spacing inside computed property brackets
   *
   * @see [computed-property-spacing](https://eslint.org/docs/latest/rules/computed-property-spacing)
   */
  'computed-property-spacing': RuleConfig<ComputedPropertySpacingRuleOptions>;
  /**
   * Require `return` statements to either always or never specify values
   *
   * @see [consistent-return](https://eslint.org/docs/latest/rules/consistent-return)
   */
  'consistent-return': RuleConfig<ConsistentReturnRuleOptions>;
  /**
   * Enforce consistent naming when capturing the current execution context
   *
   * @see [consistent-this](https://eslint.org/docs/latest/rules/consistent-this)
   */
  'consistent-this': RuleConfig<ConsistentThisRuleOptions>;
  /**
   * Require `super()` calls in constructors
   *
   * @see [constructor-super](https://eslint.org/docs/latest/rules/constructor-super)
   */
  'constructor-super': RuleConfig<ConstructorSuperRuleOptions>;
  /**
   * Enforce consistent brace style for all control statements
   *
   * @see [curly](https://eslint.org/docs/latest/rules/curly)
   */
  curly: RuleConfig<CurlyRuleOptions>;
  /**
   * Require `default` cases in `switch` statements
   *
   * @see [default-case](https://eslint.org/docs/latest/rules/default-case)
   */
  'default-case': RuleConfig<DefaultCaseRuleOptions>;
  /**
   * Enforce default clauses in switch statements to be last
   *
   * @see [default-case-last](https://eslint.org/docs/latest/rules/default-case-last)
   */
  'default-case-last': RuleConfig<DefaultCaseLastRuleOptions>;
  /**
   * Enforce default parameters to be last
   *
   * @see [default-param-last](https://eslint.org/docs/latest/rules/default-param-last)
   */
  'default-param-last': RuleConfig<DefaultParamLastRuleOptions>;
  /**
   * Enforce consistent newlines before and after dots
   *
   * @see [dot-location](https://eslint.org/docs/latest/rules/dot-location)
   */
  'dot-location': RuleConfig<DotLocationRuleOptions>;
  /**
   * Enforce dot notation whenever possible
   *
   * @see [dot-notation](https://eslint.org/docs/latest/rules/dot-notation)
   */
  'dot-notation': RuleConfig<DotNotationRuleOptions>;
  /**
   * Require or disallow newline at the end of files
   *
   * @see [eol-last](https://eslint.org/docs/latest/rules/eol-last)
   */
  'eol-last': RuleConfig<EolLastRuleOptions>;
  /**
   * Require the use of `===` and `!==`
   *
   * @see [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)
   */
  eqeqeq: RuleConfig<EqeqeqRuleOptions>;
  /**
   * Enforce "for" loop update clause moving the counter in the right direction
   *
   * @see [for-direction](https://eslint.org/docs/latest/rules/for-direction)
   */
  'for-direction': RuleConfig<ForDirectionRuleOptions>;
  /**
   * Require or disallow spacing between function identifiers and their invocations
   *
   * @see [func-call-spacing](https://eslint.org/docs/latest/rules/func-call-spacing)
   */
  'func-call-spacing': RuleConfig<FuncCallSpacingRuleOptions>;
  /**
   * Require function names to match the name of the variable or property to which they are assigned
   *
   * @see [func-name-matching](https://eslint.org/docs/latest/rules/func-name-matching)
   */
  'func-name-matching': RuleConfig<FuncNameMatchingRuleOptions>;
  /**
   * Require or disallow named `function` expressions
   *
   * @see [func-names](https://eslint.org/docs/latest/rules/func-names)
   */
  'func-names': RuleConfig<FuncNamesRuleOptions>;
  /**
   * Enforce the consistent use of either `function` declarations or expressions
   *
   * @see [func-style](https://eslint.org/docs/latest/rules/func-style)
   */
  'func-style': RuleConfig<FuncStyleRuleOptions>;
  /**
   * Enforce line breaks between arguments of a function call
   *
   * @see [function-call-argument-newline](https://eslint.org/docs/latest/rules/function-call-argument-newline)
   */
  'function-call-argument-newline': RuleConfig<FunctionCallArgumentNewlineRuleOptions>;
  /**
   * Enforce consistent line breaks inside function parentheses
   *
   * @see [function-paren-newline](https://eslint.org/docs/latest/rules/function-paren-newline)
   */
  'function-paren-newline': RuleConfig<FunctionParenNewlineRuleOptions>;
  /**
   * Enforce consistent spacing around `*` operators in generator functions
   *
   * @see [generator-star-spacing](https://eslint.org/docs/latest/rules/generator-star-spacing)
   */
  'generator-star-spacing': RuleConfig<GeneratorStarSpacingRuleOptions>;
  /**
   * Enforce `return` statements in getters
   *
   * @see [getter-return](https://eslint.org/docs/latest/rules/getter-return)
   */
  'getter-return': RuleConfig<GetterReturnRuleOptions>;
  /**
   * Require `require()` calls to be placed at top-level module scope
   *
   * @see [global-require](https://eslint.org/docs/latest/rules/global-require)
   */
  'global-require': RuleConfig<GlobalRequireRuleOptions>;
  /**
   * Require grouped accessor pairs in object literals and classes
   *
   * @see [grouped-accessor-pairs](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)
   */
  'grouped-accessor-pairs': RuleConfig<GroupedAccessorPairsRuleOptions>;
  /**
   * Require `for-in` loops to include an `if` statement
   *
   * @see [guard-for-in](https://eslint.org/docs/latest/rules/guard-for-in)
   */
  'guard-for-in': RuleConfig<GuardForInRuleOptions>;
  /**
   * Require error handling in callbacks
   *
   * @see [handle-callback-err](https://eslint.org/docs/latest/rules/handle-callback-err)
   */
  'handle-callback-err': RuleConfig<HandleCallbackErrRuleOptions>;
  /**
   * Disallow specified identifiers
   *
   * @see [id-blacklist](https://eslint.org/docs/latest/rules/id-blacklist)
   */
  'id-blacklist': RuleConfig<IdBlacklistRuleOptions>;
  /**
   * Disallow specified identifiers
   *
   * @see [id-denylist](https://eslint.org/docs/latest/rules/id-denylist)
   */
  'id-denylist': RuleConfig<IdDenylistRuleOptions>;
  /**
   * Enforce minimum and maximum identifier lengths
   *
   * @see [id-length](https://eslint.org/docs/latest/rules/id-length)
   */
  'id-length': RuleConfig<IdLengthRuleOptions>;
  /**
   * Require identifiers to match a specified regular expression
   *
   * @see [id-match](https://eslint.org/docs/latest/rules/id-match)
   */
  'id-match': RuleConfig<IdMatchRuleOptions>;
  /**
   * Enforce the location of arrow function bodies
   *
   * @see [implicit-arrow-linebreak](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)
   */
  'implicit-arrow-linebreak': RuleConfig<ImplicitArrowLinebreakRuleOptions>;
  /**
   * Enforce consistent indentation
   *
   * @see [indent](https://eslint.org/docs/latest/rules/indent)
   */
  indent: RuleConfig<IndentRuleOptions>;
  /**
   * Enforce consistent indentation
   *
   * @see [indent-legacy](https://eslint.org/docs/latest/rules/indent-legacy)
   */
  'indent-legacy': RuleConfig<IndentLegacyRuleOptions>;
  /**
   * Require or disallow initialization in variable declarations
   *
   * @see [init-declarations](https://eslint.org/docs/latest/rules/init-declarations)
   */
  'init-declarations': RuleConfig<InitDeclarationsRuleOptions>;
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   *
   * @see [jsx-quotes](https://eslint.org/docs/latest/rules/jsx-quotes)
   */
  'jsx-quotes': RuleConfig<JsxQuotesRuleOptions>;
  /**
   * Enforce consistent spacing between keys and values in object literal properties
   *
   * @see [key-spacing](https://eslint.org/docs/latest/rules/key-spacing)
   */
  'key-spacing': RuleConfig<KeySpacingRuleOptions>;
  /**
   * Enforce consistent spacing before and after keywords
   *
   * @see [keyword-spacing](https://eslint.org/docs/latest/rules/keyword-spacing)
   */
  'keyword-spacing': RuleConfig<KeywordSpacingRuleOptions>;
  /**
   * Enforce position of line comments
   *
   * @see [line-comment-position](https://eslint.org/docs/latest/rules/line-comment-position)
   */
  'line-comment-position': RuleConfig<LineCommentPositionRuleOptions>;
  /**
   * Enforce consistent linebreak style
   *
   * @see [linebreak-style](https://eslint.org/docs/latest/rules/linebreak-style)
   */
  'linebreak-style': RuleConfig<LinebreakStyleRuleOptions>;
  /**
   * Require empty lines around comments
   *
   * @see [lines-around-comment](https://eslint.org/docs/latest/rules/lines-around-comment)
   */
  'lines-around-comment': RuleConfig<LinesAroundCommentRuleOptions>;
  /**
   * Require or disallow newlines around directives
   *
   * @see [lines-around-directive](https://eslint.org/docs/latest/rules/lines-around-directive)
   */
  'lines-around-directive': RuleConfig<LinesAroundDirectiveRuleOptions>;
  /**
   * Require or disallow an empty line between class members
   *
   * @see [lines-between-class-members](https://eslint.org/docs/latest/rules/lines-between-class-members)
   */
  'lines-between-class-members': RuleConfig<LinesBetweenClassMembersRuleOptions>;
  /**
   * Require or disallow logical assignment operator shorthand
   *
   * @see [logical-assignment-operators](https://eslint.org/docs/latest/rules/logical-assignment-operators)
   */
  'logical-assignment-operators': RuleConfig<LogicalAssignmentOperatorsRuleOptions>;
  /**
   * Enforce a maximum number of classes per file
   *
   * @see [max-classes-per-file](https://eslint.org/docs/latest/rules/max-classes-per-file)
   */
  'max-classes-per-file': RuleConfig<MaxClassesPerFileRuleOptions>;
  /**
   * Enforce a maximum depth that blocks can be nested
   *
   * @see [max-depth](https://eslint.org/docs/latest/rules/max-depth)
   */
  'max-depth': RuleConfig<MaxDepthRuleOptions>;
  /**
   * Enforce a maximum line length
   *
   * @see [max-len](https://eslint.org/docs/latest/rules/max-len)
   */
  'max-len': RuleConfig<MaxLenRuleOptions>;
  /**
   * Enforce a maximum number of lines per file
   *
   * @see [max-lines](https://eslint.org/docs/latest/rules/max-lines)
   */
  'max-lines': RuleConfig<MaxLinesRuleOptions>;
  /**
   * Enforce a maximum number of lines of code in a function
   *
   * @see [max-lines-per-function](https://eslint.org/docs/latest/rules/max-lines-per-function)
   */
  'max-lines-per-function': RuleConfig<MaxLinesPerFunctionRuleOptions>;
  /**
   * Enforce a maximum depth that callbacks can be nested
   *
   * @see [max-nested-callbacks](https://eslint.org/docs/latest/rules/max-nested-callbacks)
   */
  'max-nested-callbacks': RuleConfig<MaxNestedCallbacksRuleOptions>;
  /**
   * Enforce a maximum number of parameters in function definitions
   *
   * @see [max-params](https://eslint.org/docs/latest/rules/max-params)
   */
  'max-params': RuleConfig<MaxParamsRuleOptions>;
  /**
   * Enforce a maximum number of statements allowed in function blocks
   *
   * @see [max-statements](https://eslint.org/docs/latest/rules/max-statements)
   */
  'max-statements': RuleConfig<MaxStatementsRuleOptions>;
  /**
   * Enforce a maximum number of statements allowed per line
   *
   * @see [max-statements-per-line](https://eslint.org/docs/latest/rules/max-statements-per-line)
   */
  'max-statements-per-line': RuleConfig<MaxStatementsPerLineRuleOptions>;
  /**
   * Enforce a particular style for multiline comments
   *
   * @see [multiline-comment-style](https://eslint.org/docs/latest/rules/multiline-comment-style)
   */
  'multiline-comment-style': RuleConfig<MultilineCommentStyleRuleOptions>;
  /**
   * Enforce newlines between operands of ternary expressions
   *
   * @see [multiline-ternary](https://eslint.org/docs/latest/rules/multiline-ternary)
   */
  'multiline-ternary': RuleConfig<MultilineTernaryRuleOptions>;
  /**
   * Require constructor names to begin with a capital letter
   *
   * @see [new-cap](https://eslint.org/docs/latest/rules/new-cap)
   */
  'new-cap': RuleConfig<NewCapRuleOptions>;
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   *
   * @see [new-parens](https://eslint.org/docs/latest/rules/new-parens)
   */
  'new-parens': RuleConfig<NewParensRuleOptions>;
  /**
   * Require or disallow an empty line after variable declarations
   *
   * @see [newline-after-var](https://eslint.org/docs/latest/rules/newline-after-var)
   */
  'newline-after-var': RuleConfig<NewlineAfterVarRuleOptions>;
  /**
   * Require an empty line before `return` statements
   *
   * @see [newline-before-return](https://eslint.org/docs/latest/rules/newline-before-return)
   */
  'newline-before-return': RuleConfig<NewlineBeforeReturnRuleOptions>;
  /**
   * Require a newline after each call in a method chain
   *
   * @see [newline-per-chained-call](https://eslint.org/docs/latest/rules/newline-per-chained-call)
   */
  'newline-per-chained-call': RuleConfig<NewlinePerChainedCallRuleOptions>;
  /**
   * Disallow the use of `alert`, `confirm`, and `prompt`
   *
   * @see [no-alert](https://eslint.org/docs/latest/rules/no-alert)
   */
  'no-alert': RuleConfig<NoAlertRuleOptions>;
  /**
   * Disallow `Array` constructors
   *
   * @see [no-array-constructor](https://eslint.org/docs/latest/rules/no-array-constructor)
   */
  'no-array-constructor': RuleConfig<NoArrayConstructorRuleOptions>;
  /**
   * Disallow using an async function as a Promise executor
   *
   * @see [no-async-promise-executor](https://eslint.org/docs/latest/rules/no-async-promise-executor)
   */
  'no-async-promise-executor': RuleConfig<NoAsyncPromiseExecutorRuleOptions>;
  /**
   * Disallow `await` inside of loops
   *
   * @see [no-await-in-loop](https://eslint.org/docs/latest/rules/no-await-in-loop)
   */
  'no-await-in-loop': RuleConfig<NoAwaitInLoopRuleOptions>;
  /**
   * Disallow bitwise operators
   *
   * @see [no-bitwise](https://eslint.org/docs/latest/rules/no-bitwise)
   */
  'no-bitwise': RuleConfig<NoBitwiseRuleOptions>;
  /**
   * Disallow use of the `Buffer()` constructor
   *
   * @see [no-buffer-constructor](https://eslint.org/docs/latest/rules/no-buffer-constructor)
   */
  'no-buffer-constructor': RuleConfig<NoBufferConstructorRuleOptions>;
  /**
   * Disallow the use of `arguments.caller` or `arguments.callee`
   *
   * @see [no-caller](https://eslint.org/docs/latest/rules/no-caller)
   */
  'no-caller': RuleConfig<NoCallerRuleOptions>;
  /**
   * Disallow lexical declarations in case clauses
   *
   * @see [no-case-declarations](https://eslint.org/docs/latest/rules/no-case-declarations)
   */
  'no-case-declarations': RuleConfig<NoCaseDeclarationsRuleOptions>;
  /**
   * Disallow `catch` clause parameters from shadowing variables in the outer scope
   *
   * @see [no-catch-shadow](https://eslint.org/docs/latest/rules/no-catch-shadow)
   */
  'no-catch-shadow': RuleConfig<NoCatchShadowRuleOptions>;
  /**
   * Disallow reassigning class members
   *
   * @see [no-class-assign](https://eslint.org/docs/latest/rules/no-class-assign)
   */
  'no-class-assign': RuleConfig<NoClassAssignRuleOptions>;
  /**
   * Disallow comparing against -0
   *
   * @see [no-compare-neg-zero](https://eslint.org/docs/latest/rules/no-compare-neg-zero)
   */
  'no-compare-neg-zero': RuleConfig<NoCompareNegZeroRuleOptions>;
  /**
   * Disallow assignment operators in conditional expressions
   *
   * @see [no-cond-assign](https://eslint.org/docs/latest/rules/no-cond-assign)
   */
  'no-cond-assign': RuleConfig<NoCondAssignRuleOptions>;
  /**
   * Disallow arrow functions where they could be confused with comparisons
   *
   * @see [no-confusing-arrow](https://eslint.org/docs/latest/rules/no-confusing-arrow)
   */
  'no-confusing-arrow': RuleConfig<NoConfusingArrowRuleOptions>;
  /**
   * Disallow the use of `console`
   *
   * @see [no-console](https://eslint.org/docs/latest/rules/no-console)
   */
  'no-console': RuleConfig<NoConsoleRuleOptions>;
  /**
   * Disallow reassigning `const` variables
   *
   * @see [no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign)
   */
  'no-const-assign': RuleConfig<NoConstAssignRuleOptions>;
  /**
   * Disallow expressions where the operation doesn't affect the value
   *
   * @see [no-constant-binary-expression](https://eslint.org/docs/latest/rules/no-constant-binary-expression)
   */
  'no-constant-binary-expression': RuleConfig<NoConstantBinaryExpressionRuleOptions>;
  /**
   * Disallow constant expressions in conditions
   *
   * @see [no-constant-condition](https://eslint.org/docs/latest/rules/no-constant-condition)
   */
  'no-constant-condition': RuleConfig<NoConstantConditionRuleOptions>;
  /**
   * Disallow returning value from constructor
   *
   * @see [no-constructor-return](https://eslint.org/docs/latest/rules/no-constructor-return)
   */
  'no-constructor-return': RuleConfig<NoConstructorReturnRuleOptions>;
  /**
   * Disallow `continue` statements
   *
   * @see [no-continue](https://eslint.org/docs/latest/rules/no-continue)
   */
  'no-continue': RuleConfig<NoContinueRuleOptions>;
  /**
   * Disallow control characters in regular expressions
   *
   * @see [no-control-regex](https://eslint.org/docs/latest/rules/no-control-regex)
   */
  'no-control-regex': RuleConfig<NoControlRegexRuleOptions>;
  /**
   * Disallow the use of `debugger`
   *
   * @see [no-debugger](https://eslint.org/docs/latest/rules/no-debugger)
   */
  'no-debugger': RuleConfig<NoDebuggerRuleOptions>;
  /**
   * Disallow deleting variables
   *
   * @see [no-delete-var](https://eslint.org/docs/latest/rules/no-delete-var)
   */
  'no-delete-var': RuleConfig<NoDeleteVarRuleOptions>;
  /**
   * Disallow equal signs explicitly at the beginning of regular expressions
   *
   * @see [no-div-regex](https://eslint.org/docs/latest/rules/no-div-regex)
   */
  'no-div-regex': RuleConfig<NoDivRegexRuleOptions>;
  /**
   * Disallow duplicate arguments in `function` definitions
   *
   * @see [no-dupe-args](https://eslint.org/docs/latest/rules/no-dupe-args)
   */
  'no-dupe-args': RuleConfig<NoDupeArgsRuleOptions>;
  /**
   * Disallow duplicate class members
   *
   * @see [no-dupe-class-members](https://eslint.org/docs/latest/rules/no-dupe-class-members)
   */
  'no-dupe-class-members': RuleConfig<NoDupeClassMembersRuleOptions>;
  /**
   * Disallow duplicate conditions in if-else-if chains
   *
   * @see [no-dupe-else-if](https://eslint.org/docs/latest/rules/no-dupe-else-if)
   */
  'no-dupe-else-if': RuleConfig<NoDupeElseIfRuleOptions>;
  /**
   * Disallow duplicate keys in object literals
   *
   * @see [no-dupe-keys](https://eslint.org/docs/latest/rules/no-dupe-keys)
   */
  'no-dupe-keys': RuleConfig<NoDupeKeysRuleOptions>;
  /**
   * Disallow duplicate case labels
   *
   * @see [no-duplicate-case](https://eslint.org/docs/latest/rules/no-duplicate-case)
   */
  'no-duplicate-case': RuleConfig<NoDuplicateCaseRuleOptions>;
  /**
   * Disallow duplicate module imports
   *
   * @see [no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports)
   */
  'no-duplicate-imports': RuleConfig<NoDuplicateImportsRuleOptions>;
  /**
   * Disallow `else` blocks after `return` statements in `if` statements
   *
   * @see [no-else-return](https://eslint.org/docs/latest/rules/no-else-return)
   */
  'no-else-return': RuleConfig<NoElseReturnRuleOptions>;
  /**
   * Disallow empty block statements
   *
   * @see [no-empty](https://eslint.org/docs/latest/rules/no-empty)
   */
  'no-empty': RuleConfig<NoEmptyRuleOptions>;
  /**
   * Disallow empty character classes in regular expressions
   *
   * @see [no-empty-character-class](https://eslint.org/docs/latest/rules/no-empty-character-class)
   */
  'no-empty-character-class': RuleConfig<NoEmptyCharacterClassRuleOptions>;
  /**
   * Disallow empty functions
   *
   * @see [no-empty-function](https://eslint.org/docs/latest/rules/no-empty-function)
   */
  'no-empty-function': RuleConfig<NoEmptyFunctionRuleOptions>;
  /**
   * Disallow empty destructuring patterns
   *
   * @see [no-empty-pattern](https://eslint.org/docs/latest/rules/no-empty-pattern)
   */
  'no-empty-pattern': RuleConfig<NoEmptyPatternRuleOptions>;
  /**
   * Disallow empty static blocks
   *
   * @see [no-empty-static-block](https://eslint.org/docs/latest/rules/no-empty-static-block)
   */
  'no-empty-static-block': RuleConfig<NoEmptyStaticBlockRuleOptions>;
  /**
   * Disallow `null` comparisons without type-checking operators
   *
   * @see [no-eq-null](https://eslint.org/docs/latest/rules/no-eq-null)
   */
  'no-eq-null': RuleConfig<NoEqNullRuleOptions>;
  /**
   * Disallow the use of `eval()`
   *
   * @see [no-eval](https://eslint.org/docs/latest/rules/no-eval)
   */
  'no-eval': RuleConfig<NoEvalRuleOptions>;
  /**
   * Disallow reassigning exceptions in `catch` clauses
   *
   * @see [no-ex-assign](https://eslint.org/docs/latest/rules/no-ex-assign)
   */
  'no-ex-assign': RuleConfig<NoExAssignRuleOptions>;
  /**
   * Disallow extending native types
   *
   * @see [no-extend-native](https://eslint.org/docs/latest/rules/no-extend-native)
   */
  'no-extend-native': RuleConfig<NoExtendNativeRuleOptions>;
  /**
   * Disallow unnecessary calls to `.bind()`
   *
   * @see [no-extra-bind](https://eslint.org/docs/latest/rules/no-extra-bind)
   */
  'no-extra-bind': RuleConfig<NoExtraBindRuleOptions>;
  /**
   * Disallow unnecessary boolean casts
   *
   * @see [no-extra-boolean-cast](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)
   */
  'no-extra-boolean-cast': RuleConfig<NoExtraBooleanCastRuleOptions>;
  /**
   * Disallow unnecessary labels
   *
   * @see [no-extra-label](https://eslint.org/docs/latest/rules/no-extra-label)
   */
  'no-extra-label': RuleConfig<NoExtraLabelRuleOptions>;
  /**
   * Disallow unnecessary parentheses
   *
   * @see [no-extra-parens](https://eslint.org/docs/latest/rules/no-extra-parens)
   */
  'no-extra-parens': RuleConfig<NoExtraParensRuleOptions>;
  /**
   * Disallow unnecessary semicolons
   *
   * @see [no-extra-semi](https://eslint.org/docs/latest/rules/no-extra-semi)
   */
  'no-extra-semi': RuleConfig<NoExtraSemiRuleOptions>;
  /**
   * Disallow fallthrough of `case` statements
   *
   * @see [no-fallthrough](https://eslint.org/docs/latest/rules/no-fallthrough)
   */
  'no-fallthrough': RuleConfig<NoFallthroughRuleOptions>;
  /**
   * Disallow leading or trailing decimal points in numeric literals
   *
   * @see [no-floating-decimal](https://eslint.org/docs/latest/rules/no-floating-decimal)
   */
  'no-floating-decimal': RuleConfig<NoFloatingDecimalRuleOptions>;
  /**
   * Disallow reassigning `function` declarations
   *
   * @see [no-func-assign](https://eslint.org/docs/latest/rules/no-func-assign)
   */
  'no-func-assign': RuleConfig<NoFuncAssignRuleOptions>;
  /**
   * Disallow assignments to native objects or read-only global variables
   *
   * @see [no-global-assign](https://eslint.org/docs/latest/rules/no-global-assign)
   */
  'no-global-assign': RuleConfig<NoGlobalAssignRuleOptions>;
  /**
   * Disallow shorthand type conversions
   *
   * @see [no-implicit-coercion](https://eslint.org/docs/latest/rules/no-implicit-coercion)
   */
  'no-implicit-coercion': RuleConfig<NoImplicitCoercionRuleOptions>;
  /**
   * Disallow declarations in the global scope
   *
   * @see [no-implicit-globals](https://eslint.org/docs/latest/rules/no-implicit-globals)
   */
  'no-implicit-globals': RuleConfig<NoImplicitGlobalsRuleOptions>;
  /**
   * Disallow the use of `eval()`-like methods
   *
   * @see [no-implied-eval](https://eslint.org/docs/latest/rules/no-implied-eval)
   */
  'no-implied-eval': RuleConfig<NoImpliedEvalRuleOptions>;
  /**
   * Disallow assigning to imported bindings
   *
   * @see [no-import-assign](https://eslint.org/docs/latest/rules/no-import-assign)
   */
  'no-import-assign': RuleConfig<NoImportAssignRuleOptions>;
  /**
   * Disallow inline comments after code
   *
   * @see [no-inline-comments](https://eslint.org/docs/latest/rules/no-inline-comments)
   */
  'no-inline-comments': RuleConfig<NoInlineCommentsRuleOptions>;
  /**
   * Disallow variable or `function` declarations in nested blocks
   *
   * @see [no-inner-declarations](https://eslint.org/docs/latest/rules/no-inner-declarations)
   */
  'no-inner-declarations': RuleConfig<NoInnerDeclarationsRuleOptions>;
  /**
   * Disallow invalid regular expression strings in `RegExp` constructors
   *
   * @see [no-invalid-regexp](https://eslint.org/docs/latest/rules/no-invalid-regexp)
   */
  'no-invalid-regexp': RuleConfig<NoInvalidRegexpRuleOptions>;
  /**
   * Disallow use of `this` in contexts where the value of `this` is `undefined`
   *
   * @see [no-invalid-this](https://eslint.org/docs/latest/rules/no-invalid-this)
   */
  'no-invalid-this': RuleConfig<NoInvalidThisRuleOptions>;
  /**
   * Disallow irregular whitespace
   *
   * @see [no-irregular-whitespace](https://eslint.org/docs/latest/rules/no-irregular-whitespace)
   */
  'no-irregular-whitespace': RuleConfig<NoIrregularWhitespaceRuleOptions>;
  /**
   * Disallow the use of the `__iterator__` property
   *
   * @see [no-iterator](https://eslint.org/docs/latest/rules/no-iterator)
   */
  'no-iterator': RuleConfig<NoIteratorRuleOptions>;
  /**
   * Disallow labels that share a name with a variable
   *
   * @see [no-label-var](https://eslint.org/docs/latest/rules/no-label-var)
   */
  'no-label-var': RuleConfig<NoLabelVarRuleOptions>;
  /**
   * Disallow labeled statements
   *
   * @see [no-labels](https://eslint.org/docs/latest/rules/no-labels)
   */
  'no-labels': RuleConfig<NoLabelsRuleOptions>;
  /**
   * Disallow unnecessary nested blocks
   *
   * @see [no-lone-blocks](https://eslint.org/docs/latest/rules/no-lone-blocks)
   */
  'no-lone-blocks': RuleConfig<NoLoneBlocksRuleOptions>;
  /**
   * Disallow `if` statements as the only statement in `else` blocks
   *
   * @see [no-lonely-if](https://eslint.org/docs/latest/rules/no-lonely-if)
   */
  'no-lonely-if': RuleConfig<NoLonelyIfRuleOptions>;
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   *
   * @see [no-loop-func](https://eslint.org/docs/latest/rules/no-loop-func)
   */
  'no-loop-func': RuleConfig<NoLoopFuncRuleOptions>;
  /**
   * Disallow literal numbers that lose precision
   *
   * @see [no-loss-of-precision](https://eslint.org/docs/latest/rules/no-loss-of-precision)
   */
  'no-loss-of-precision': RuleConfig<NoLossOfPrecisionRuleOptions>;
  /**
   * Disallow magic numbers
   *
   * @see [no-magic-numbers](https://eslint.org/docs/latest/rules/no-magic-numbers)
   */
  'no-magic-numbers': RuleConfig<NoMagicNumbersRuleOptions>;
  /**
   * Disallow characters which are made with multiple code points in character class syntax
   *
   * @see [no-misleading-character-class](https://eslint.org/docs/latest/rules/no-misleading-character-class)
   */
  'no-misleading-character-class': RuleConfig<NoMisleadingCharacterClassRuleOptions>;
  /**
   * Disallow mixed binary operators
   *
   * @see [no-mixed-operators](https://eslint.org/docs/latest/rules/no-mixed-operators)
   */
  'no-mixed-operators': RuleConfig<NoMixedOperatorsRuleOptions>;
  /**
   * Disallow `require` calls to be mixed with regular variable declarations
   *
   * @see [no-mixed-requires](https://eslint.org/docs/latest/rules/no-mixed-requires)
   */
  'no-mixed-requires': RuleConfig<NoMixedRequiresRuleOptions>;
  /**
   * Disallow mixed spaces and tabs for indentation
   *
   * @see [no-mixed-spaces-and-tabs](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs)
   */
  'no-mixed-spaces-and-tabs': RuleConfig<NoMixedSpacesAndTabsRuleOptions>;
  /**
   * Disallow use of chained assignment expressions
   *
   * @see [no-multi-assign](https://eslint.org/docs/latest/rules/no-multi-assign)
   */
  'no-multi-assign': RuleConfig<NoMultiAssignRuleOptions>;
  /**
   * Disallow multiple spaces
   *
   * @see [no-multi-spaces](https://eslint.org/docs/latest/rules/no-multi-spaces)
   */
  'no-multi-spaces': RuleConfig<NoMultiSpacesRuleOptions>;
  /**
   * Disallow multiline strings
   *
   * @see [no-multi-str](https://eslint.org/docs/latest/rules/no-multi-str)
   */
  'no-multi-str': RuleConfig<NoMultiStrRuleOptions>;
  /**
   * Disallow multiple empty lines
   *
   * @see [no-multiple-empty-lines](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)
   */
  'no-multiple-empty-lines': RuleConfig<NoMultipleEmptyLinesRuleOptions>;
  /**
   * Disallow assignments to native objects or read-only global variables
   *
   * @see [no-native-reassign](https://eslint.org/docs/latest/rules/no-native-reassign)
   */
  'no-native-reassign': RuleConfig<NoNativeReassignRuleOptions>;
  /**
   * Disallow negated conditions
   *
   * @see [no-negated-condition](https://eslint.org/docs/latest/rules/no-negated-condition)
   */
  'no-negated-condition': RuleConfig<NoNegatedConditionRuleOptions>;
  /**
   * Disallow negating the left operand in `in` expressions
   *
   * @see [no-negated-in-lhs](https://eslint.org/docs/latest/rules/no-negated-in-lhs)
   */
  'no-negated-in-lhs': RuleConfig<NoNegatedInLhsRuleOptions>;
  /**
   * Disallow nested ternary expressions
   *
   * @see [no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary)
   */
  'no-nested-ternary': RuleConfig<NoNestedTernaryRuleOptions>;
  /**
   * Disallow `new` operators outside of assignments or comparisons
   *
   * @see [no-new](https://eslint.org/docs/latest/rules/no-new)
   */
  'no-new': RuleConfig<NoNewRuleOptions>;
  /**
   * Disallow `new` operators with the `Function` object
   *
   * @see [no-new-func](https://eslint.org/docs/latest/rules/no-new-func)
   */
  'no-new-func': RuleConfig<NoNewFuncRuleOptions>;
  /**
   * Disallow `new` operators with global non-constructor functions
   *
   * @see [no-new-native-nonconstructor](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)
   */
  'no-new-native-nonconstructor': RuleConfig<NoNewNativeNonconstructorRuleOptions>;
  /**
   * Disallow `Object` constructors
   *
   * @see [no-new-object](https://eslint.org/docs/latest/rules/no-new-object)
   */
  'no-new-object': RuleConfig<NoNewObjectRuleOptions>;
  /**
   * Disallow `new` operators with calls to `require`
   *
   * @see [no-new-require](https://eslint.org/docs/latest/rules/no-new-require)
   */
  'no-new-require': RuleConfig<NoNewRequireRuleOptions>;
  /**
   * Disallow `new` operators with the `Symbol` object
   *
   * @see [no-new-symbol](https://eslint.org/docs/latest/rules/no-new-symbol)
   */
  'no-new-symbol': RuleConfig<NoNewSymbolRuleOptions>;
  /**
   * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
   *
   * @see [no-new-wrappers](https://eslint.org/docs/latest/rules/no-new-wrappers)
   */
  'no-new-wrappers': RuleConfig<NoNewWrappersRuleOptions>;
  /**
   * Disallow `\8` and `\9` escape sequences in string literals
   *
   * @see [no-nonoctal-decimal-escape](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)
   */
  'no-nonoctal-decimal-escape': RuleConfig<NoNonoctalDecimalEscapeRuleOptions>;
  /**
   * Disallow calling global object properties as functions
   *
   * @see [no-obj-calls](https://eslint.org/docs/latest/rules/no-obj-calls)
   */
  'no-obj-calls': RuleConfig<NoObjCallsRuleOptions>;
  /**
   * Disallow calls to the `Object` constructor without an argument
   *
   * @see [no-object-constructor](https://eslint.org/docs/latest/rules/no-object-constructor)
   */
  'no-object-constructor': RuleConfig<NoObjectConstructorRuleOptions>;
  /**
   * Disallow octal literals
   *
   * @see [no-octal](https://eslint.org/docs/latest/rules/no-octal)
   */
  'no-octal': RuleConfig<NoOctalRuleOptions>;
  /**
   * Disallow octal escape sequences in string literals
   *
   * @see [no-octal-escape](https://eslint.org/docs/latest/rules/no-octal-escape)
   */
  'no-octal-escape': RuleConfig<NoOctalEscapeRuleOptions>;
  /**
   * Disallow reassigning `function` parameters
   *
   * @see [no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign)
   */
  'no-param-reassign': RuleConfig<NoParamReassignRuleOptions>;
  /**
   * Disallow string concatenation with `__dirname` and `__filename`
   *
   * @see [no-path-concat](https://eslint.org/docs/latest/rules/no-path-concat)
   */
  'no-path-concat': RuleConfig<NoPathConcatRuleOptions>;
  /**
   * Disallow the unary operators `++` and `--`
   *
   * @see [no-plusplus](https://eslint.org/docs/latest/rules/no-plusplus)
   */
  'no-plusplus': RuleConfig<NoPlusplusRuleOptions>;
  /**
   * Disallow the use of `process.env`
   *
   * @see [no-process-env](https://eslint.org/docs/latest/rules/no-process-env)
   */
  'no-process-env': RuleConfig<NoProcessEnvRuleOptions>;
  /**
   * Disallow the use of `process.exit()`
   *
   * @see [no-process-exit](https://eslint.org/docs/latest/rules/no-process-exit)
   */
  'no-process-exit': RuleConfig<NoProcessExitRuleOptions>;
  /**
   * Disallow returning values from Promise executor functions
   *
   * @see [no-promise-executor-return](https://eslint.org/docs/latest/rules/no-promise-executor-return)
   */
  'no-promise-executor-return': RuleConfig<NoPromiseExecutorReturnRuleOptions>;
  /**
   * Disallow the use of the `__proto__` property
   *
   * @see [no-proto](https://eslint.org/docs/latest/rules/no-proto)
   */
  'no-proto': RuleConfig<NoProtoRuleOptions>;
  /**
   * Disallow calling some `Object.prototype` methods directly on objects
   *
   * @see [no-prototype-builtins](https://eslint.org/docs/latest/rules/no-prototype-builtins)
   */
  'no-prototype-builtins': RuleConfig<NoPrototypeBuiltinsRuleOptions>;
  /**
   * Disallow variable redeclaration
   *
   * @see [no-redeclare](https://eslint.org/docs/latest/rules/no-redeclare)
   */
  'no-redeclare': RuleConfig<NoRedeclareRuleOptions>;
  /**
   * Disallow multiple spaces in regular expressions
   *
   * @see [no-regex-spaces](https://eslint.org/docs/latest/rules/no-regex-spaces)
   */
  'no-regex-spaces': RuleConfig<NoRegexSpacesRuleOptions>;
  /**
   * Disallow specified names in exports
   *
   * @see [no-restricted-exports](https://eslint.org/docs/latest/rules/no-restricted-exports)
   */
  'no-restricted-exports': RuleConfig<NoRestrictedExportsRuleOptions>;
  /**
   * Disallow specified global variables
   *
   * @see [no-restricted-globals](https://eslint.org/docs/latest/rules/no-restricted-globals)
   */
  'no-restricted-globals': RuleConfig<NoRestrictedGlobalsRuleOptions>;
  /**
   * Disallow specified modules when loaded by `import`
   *
   * @see [no-restricted-imports](https://eslint.org/docs/latest/rules/no-restricted-imports)
   */
  'no-restricted-imports': RuleConfig<NoRestrictedImportsRuleOptions>;
  /**
   * Disallow specified modules when loaded by `require`
   *
   * @see [no-restricted-modules](https://eslint.org/docs/latest/rules/no-restricted-modules)
   */
  'no-restricted-modules': RuleConfig<NoRestrictedModulesRuleOptions>;
  /**
   * Disallow certain properties on certain objects
   *
   * @see [no-restricted-properties](https://eslint.org/docs/latest/rules/no-restricted-properties)
   */
  'no-restricted-properties': RuleConfig<NoRestrictedPropertiesRuleOptions>;
  /**
   * Disallow specified syntax
   *
   * @see [no-restricted-syntax](https://eslint.org/docs/latest/rules/no-restricted-syntax)
   */
  'no-restricted-syntax': RuleConfig<NoRestrictedSyntaxRuleOptions>;
  /**
   * Disallow assignment operators in `return` statements
   *
   * @see [no-return-assign](https://eslint.org/docs/latest/rules/no-return-assign)
   */
  'no-return-assign': RuleConfig<NoReturnAssignRuleOptions>;
  /**
   * Disallow unnecessary `return await`
   *
   * @see [no-return-await](https://eslint.org/docs/latest/rules/no-return-await)
   */
  'no-return-await': RuleConfig<NoReturnAwaitRuleOptions>;
  /**
   * Disallow `javascript:` urls
   *
   * @see [no-script-url](https://eslint.org/docs/latest/rules/no-script-url)
   */
  'no-script-url': RuleConfig<NoScriptUrlRuleOptions>;
  /**
   * Disallow assignments where both sides are exactly the same
   *
   * @see [no-self-assign](https://eslint.org/docs/latest/rules/no-self-assign)
   */
  'no-self-assign': RuleConfig<NoSelfAssignRuleOptions>;
  /**
   * Disallow comparisons where both sides are exactly the same
   *
   * @see [no-self-compare](https://eslint.org/docs/latest/rules/no-self-compare)
   */
  'no-self-compare': RuleConfig<NoSelfCompareRuleOptions>;
  /**
   * Disallow comma operators
   *
   * @see [no-sequences](https://eslint.org/docs/latest/rules/no-sequences)
   */
  'no-sequences': RuleConfig<NoSequencesRuleOptions>;
  /**
   * Disallow returning values from setters
   *
   * @see [no-setter-return](https://eslint.org/docs/latest/rules/no-setter-return)
   */
  'no-setter-return': RuleConfig<NoSetterReturnRuleOptions>;
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   *
   * @see [no-shadow](https://eslint.org/docs/latest/rules/no-shadow)
   */
  'no-shadow': RuleConfig<NoShadowRuleOptions>;
  /**
   * Disallow identifiers from shadowing restricted names
   *
   * @see [no-shadow-restricted-names](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)
   */
  'no-shadow-restricted-names': RuleConfig<NoShadowRestrictedNamesRuleOptions>;
  /**
   * Disallow spacing between function identifiers and their applications (deprecated)
   *
   * @see [no-spaced-func](https://eslint.org/docs/latest/rules/no-spaced-func)
   */
  'no-spaced-func': RuleConfig<NoSpacedFuncRuleOptions>;
  /**
   * Disallow sparse arrays
   *
   * @see [no-sparse-arrays](https://eslint.org/docs/latest/rules/no-sparse-arrays)
   */
  'no-sparse-arrays': RuleConfig<NoSparseArraysRuleOptions>;
  /**
   * Disallow synchronous methods
   *
   * @see [no-sync](https://eslint.org/docs/latest/rules/no-sync)
   */
  'no-sync': RuleConfig<NoSyncRuleOptions>;
  /**
   * Disallow all tabs
   *
   * @see [no-tabs](https://eslint.org/docs/latest/rules/no-tabs)
   */
  'no-tabs': RuleConfig<NoTabsRuleOptions>;
  /**
   * Disallow template literal placeholder syntax in regular strings
   *
   * @see [no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string)
   */
  'no-template-curly-in-string': RuleConfig<NoTemplateCurlyInStringRuleOptions>;
  /**
   * Disallow ternary operators
   *
   * @see [no-ternary](https://eslint.org/docs/latest/rules/no-ternary)
   */
  'no-ternary': RuleConfig<NoTernaryRuleOptions>;
  /**
   * Disallow `this`/`super` before calling `super()` in constructors
   *
   * @see [no-this-before-super](https://eslint.org/docs/latest/rules/no-this-before-super)
   */
  'no-this-before-super': RuleConfig<NoThisBeforeSuperRuleOptions>;
  /**
   * Disallow throwing literals as exceptions
   *
   * @see [no-throw-literal](https://eslint.org/docs/latest/rules/no-throw-literal)
   */
  'no-throw-literal': RuleConfig<NoThrowLiteralRuleOptions>;
  /**
   * Disallow trailing whitespace at the end of lines
   *
   * @see [no-trailing-spaces](https://eslint.org/docs/latest/rules/no-trailing-spaces)
   */
  'no-trailing-spaces': RuleConfig<NoTrailingSpacesRuleOptions>;
  /**
   * Disallow the use of undeclared variables unless mentioned in `/*global *\/` comments
   *
   * @see [no-undef](https://eslint.org/docs/latest/rules/no-undef)
   */
  'no-undef': RuleConfig<NoUndefRuleOptions>;
  /**
   * Disallow initializing variables to `undefined`
   *
   * @see [no-undef-init](https://eslint.org/docs/latest/rules/no-undef-init)
   */
  'no-undef-init': RuleConfig<NoUndefInitRuleOptions>;
  /**
   * Disallow the use of `undefined` as an identifier
   *
   * @see [no-undefined](https://eslint.org/docs/latest/rules/no-undefined)
   */
  'no-undefined': RuleConfig<NoUndefinedRuleOptions>;
  /**
   * Disallow dangling underscores in identifiers
   *
   * @see [no-underscore-dangle](https://eslint.org/docs/latest/rules/no-underscore-dangle)
   */
  'no-underscore-dangle': RuleConfig<NoUnderscoreDangleRuleOptions>;
  /**
   * Disallow confusing multiline expressions
   *
   * @see [no-unexpected-multiline](https://eslint.org/docs/latest/rules/no-unexpected-multiline)
   */
  'no-unexpected-multiline': RuleConfig<NoUnexpectedMultilineRuleOptions>;
  /**
   * Disallow unmodified loop conditions
   *
   * @see [no-unmodified-loop-condition](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition)
   */
  'no-unmodified-loop-condition': RuleConfig<NoUnmodifiedLoopConditionRuleOptions>;
  /**
   * Disallow ternary operators when simpler alternatives exist
   *
   * @see [no-unneeded-ternary](https://eslint.org/docs/latest/rules/no-unneeded-ternary)
   */
  'no-unneeded-ternary': RuleConfig<NoUnneededTernaryRuleOptions>;
  /**
   * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
   *
   * @see [no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable)
   */
  'no-unreachable': RuleConfig<NoUnreachableRuleOptions>;
  /**
   * Disallow loops with a body that allows only one iteration
   *
   * @see [no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop)
   */
  'no-unreachable-loop': RuleConfig<NoUnreachableLoopRuleOptions>;
  /**
   * Disallow control flow statements in `finally` blocks
   *
   * @see [no-unsafe-finally](https://eslint.org/docs/latest/rules/no-unsafe-finally)
   */
  'no-unsafe-finally': RuleConfig<NoUnsafeFinallyRuleOptions>;
  /**
   * Disallow negating the left operand of relational operators
   *
   * @see [no-unsafe-negation](https://eslint.org/docs/latest/rules/no-unsafe-negation)
   */
  'no-unsafe-negation': RuleConfig<NoUnsafeNegationRuleOptions>;
  /**
   * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
   *
   * @see [no-unsafe-optional-chaining](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)
   */
  'no-unsafe-optional-chaining': RuleConfig<NoUnsafeOptionalChainingRuleOptions>;
  /**
   * Disallow unused expressions
   *
   * @see [no-unused-expressions](https://eslint.org/docs/latest/rules/no-unused-expressions)
   */
  'no-unused-expressions': RuleConfig<NoUnusedExpressionsRuleOptions>;
  /**
   * Disallow unused labels
   *
   * @see [no-unused-labels](https://eslint.org/docs/latest/rules/no-unused-labels)
   */
  'no-unused-labels': RuleConfig<NoUnusedLabelsRuleOptions>;
  /**
   * Disallow unused private class members
   *
   * @see [no-unused-private-class-members](https://eslint.org/docs/latest/rules/no-unused-private-class-members)
   */
  'no-unused-private-class-members': RuleConfig<NoUnusedPrivateClassMembersRuleOptions>;
  /**
   * Disallow unused variables
   *
   * @see [no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars)
   */
  'no-unused-vars': RuleConfig<NoUnusedVarsRuleOptions>;
  /**
   * Disallow the use of variables before they are defined
   *
   * @see [no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define)
   */
  'no-use-before-define': RuleConfig<NoUseBeforeDefineRuleOptions>;
  /**
   * Disallow useless backreferences in regular expressions
   *
   * @see [no-useless-backreference](https://eslint.org/docs/latest/rules/no-useless-backreference)
   */
  'no-useless-backreference': RuleConfig<NoUselessBackreferenceRuleOptions>;
  /**
   * Disallow unnecessary calls to `.call()` and `.apply()`
   *
   * @see [no-useless-call](https://eslint.org/docs/latest/rules/no-useless-call)
   */
  'no-useless-call': RuleConfig<NoUselessCallRuleOptions>;
  /**
   * Disallow unnecessary `catch` clauses
   *
   * @see [no-useless-catch](https://eslint.org/docs/latest/rules/no-useless-catch)
   */
  'no-useless-catch': RuleConfig<NoUselessCatchRuleOptions>;
  /**
   * Disallow unnecessary computed property keys in objects and classes
   *
   * @see [no-useless-computed-key](https://eslint.org/docs/latest/rules/no-useless-computed-key)
   */
  'no-useless-computed-key': RuleConfig<NoUselessComputedKeyRuleOptions>;
  /**
   * Disallow unnecessary concatenation of literals or template literals
   *
   * @see [no-useless-concat](https://eslint.org/docs/latest/rules/no-useless-concat)
   */
  'no-useless-concat': RuleConfig<NoUselessConcatRuleOptions>;
  /**
   * Disallow unnecessary constructors
   *
   * @see [no-useless-constructor](https://eslint.org/docs/latest/rules/no-useless-constructor)
   */
  'no-useless-constructor': RuleConfig<NoUselessConstructorRuleOptions>;
  /**
   * Disallow unnecessary escape characters
   *
   * @see [no-useless-escape](https://eslint.org/docs/latest/rules/no-useless-escape)
   */
  'no-useless-escape': RuleConfig<NoUselessEscapeRuleOptions>;
  /**
   * Disallow renaming import, export, and destructured assignments to the same name
   *
   * @see [no-useless-rename](https://eslint.org/docs/latest/rules/no-useless-rename)
   */
  'no-useless-rename': RuleConfig<NoUselessRenameRuleOptions>;
  /**
   * Disallow redundant return statements
   *
   * @see [no-useless-return](https://eslint.org/docs/latest/rules/no-useless-return)
   */
  'no-useless-return': RuleConfig<NoUselessReturnRuleOptions>;
  /**
   * Require `let` or `const` instead of `var`
   *
   * @see [no-var](https://eslint.org/docs/latest/rules/no-var)
   */
  'no-var': RuleConfig<NoVarRuleOptions>;
  /**
   * Disallow `void` operators
   *
   * @see [no-void](https://eslint.org/docs/latest/rules/no-void)
   */
  'no-void': RuleConfig<NoVoidRuleOptions>;
  /**
   * Disallow specified warning terms in comments
   *
   * @see [no-warning-comments](https://eslint.org/docs/latest/rules/no-warning-comments)
   */
  'no-warning-comments': RuleConfig<NoWarningCommentsRuleOptions>;
  /**
   * Disallow whitespace before properties
   *
   * @see [no-whitespace-before-property](https://eslint.org/docs/latest/rules/no-whitespace-before-property)
   */
  'no-whitespace-before-property': RuleConfig<NoWhitespaceBeforePropertyRuleOptions>;
  /**
   * Disallow `with` statements
   *
   * @see [no-with](https://eslint.org/docs/latest/rules/no-with)
   */
  'no-with': RuleConfig<NoWithRuleOptions>;
  /**
   * Enforce the location of single-line statements
   *
   * @see [nonblock-statement-body-position](https://eslint.org/docs/latest/rules/nonblock-statement-body-position)
   */
  'nonblock-statement-body-position': RuleConfig<NonblockStatementBodyPositionRuleOptions>;
  /**
   * Enforce consistent line breaks after opening and before closing braces
   *
   * @see [object-curly-newline](https://eslint.org/docs/latest/rules/object-curly-newline)
   */
  'object-curly-newline': RuleConfig<ObjectCurlyNewlineRuleOptions>;
  /**
   * Enforce consistent spacing inside braces
   *
   * @see [object-curly-spacing](https://eslint.org/docs/latest/rules/object-curly-spacing)
   */
  'object-curly-spacing': RuleConfig<ObjectCurlySpacingRuleOptions>;
  /**
   * Enforce placing object properties on separate lines
   *
   * @see [object-property-newline](https://eslint.org/docs/latest/rules/object-property-newline)
   */
  'object-property-newline': RuleConfig<ObjectPropertyNewlineRuleOptions>;
  /**
   * Require or disallow method and property shorthand syntax for object literals
   *
   * @see [object-shorthand](https://eslint.org/docs/latest/rules/object-shorthand)
   */
  'object-shorthand': RuleConfig<ObjectShorthandRuleOptions>;
  /**
   * Enforce variables to be declared either together or separately in functions
   *
   * @see [one-var](https://eslint.org/docs/latest/rules/one-var)
   */
  'one-var': RuleConfig<OneVarRuleOptions>;
  /**
   * Require or disallow newlines around variable declarations
   *
   * @see [one-var-declaration-per-line](https://eslint.org/docs/latest/rules/one-var-declaration-per-line)
   */
  'one-var-declaration-per-line': RuleConfig<OneVarDeclarationPerLineRuleOptions>;
  /**
   * Require or disallow assignment operator shorthand where possible
   *
   * @see [operator-assignment](https://eslint.org/docs/latest/rules/operator-assignment)
   */
  'operator-assignment': RuleConfig<OperatorAssignmentRuleOptions>;
  /**
   * Enforce consistent linebreak style for operators
   *
   * @see [operator-linebreak](https://eslint.org/docs/latest/rules/operator-linebreak)
   */
  'operator-linebreak': RuleConfig<OperatorLinebreakRuleOptions>;
  /**
   * Require or disallow padding within blocks
   *
   * @see [padded-blocks](https://eslint.org/docs/latest/rules/padded-blocks)
   */
  'padded-blocks': RuleConfig<PaddedBlocksRuleOptions>;
  /**
   * Require or disallow padding lines between statements
   *
   * @see [padding-line-between-statements](https://eslint.org/docs/latest/rules/padding-line-between-statements)
   */
  'padding-line-between-statements': RuleConfig<PaddingLineBetweenStatementsRuleOptions>;
  /**
   * Require using arrow functions for callbacks
   *
   * @see [prefer-arrow-callback](https://eslint.org/docs/latest/rules/prefer-arrow-callback)
   */
  'prefer-arrow-callback': RuleConfig<PreferArrowCallbackRuleOptions>;
  /**
   * Require `const` declarations for variables that are never reassigned after declared
   *
   * @see [prefer-const](https://eslint.org/docs/latest/rules/prefer-const)
   */
  'prefer-const': RuleConfig<PreferConstRuleOptions>;
  /**
   * Require destructuring from arrays and/or objects
   *
   * @see [prefer-destructuring](https://eslint.org/docs/latest/rules/prefer-destructuring)
   */
  'prefer-destructuring': RuleConfig<PreferDestructuringRuleOptions>;
  /**
   * Disallow the use of `Math.pow` in favor of the `**` operator
   *
   * @see [prefer-exponentiation-operator](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)
   */
  'prefer-exponentiation-operator': RuleConfig<PreferExponentiationOperatorRuleOptions>;
  /**
   * Enforce using named capture group in regular expression
   *
   * @see [prefer-named-capture-group](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
   */
  'prefer-named-capture-group': RuleConfig<PreferNamedCaptureGroupRuleOptions>;
  /**
   * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
   *
   * @see [prefer-numeric-literals](https://eslint.org/docs/latest/rules/prefer-numeric-literals)
   */
  'prefer-numeric-literals': RuleConfig<PreferNumericLiteralsRuleOptions>;
  /**
   * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
   *
   * @see [prefer-object-has-own](https://eslint.org/docs/latest/rules/prefer-object-has-own)
   */
  'prefer-object-has-own': RuleConfig<PreferObjectHasOwnRuleOptions>;
  /**
   * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
   *
   * @see [prefer-object-spread](https://eslint.org/docs/latest/rules/prefer-object-spread)
   */
  'prefer-object-spread': RuleConfig<PreferObjectSpreadRuleOptions>;
  /**
   * Require using Error objects as Promise rejection reasons
   *
   * @see [prefer-promise-reject-errors](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)
   */
  'prefer-promise-reject-errors': RuleConfig<PreferPromiseRejectErrorsRuleOptions>;
  /**
   * Require `Reflect` methods where applicable
   *
   * @see [prefer-reflect](https://eslint.org/docs/latest/rules/prefer-reflect)
   */
  'prefer-reflect': RuleConfig<PreferReflectRuleOptions>;
  /**
   * Disallow use of the `RegExp` constructor in favor of regular expression literals
   *
   * @see [prefer-regex-literals](https://eslint.org/docs/latest/rules/prefer-regex-literals)
   */
  'prefer-regex-literals': RuleConfig<PreferRegexLiteralsRuleOptions>;
  /**
   * Require rest parameters instead of `arguments`
   *
   * @see [prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params)
   */
  'prefer-rest-params': RuleConfig<PreferRestParamsRuleOptions>;
  /**
   * Require spread operators instead of `.apply()`
   *
   * @see [prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread)
   */
  'prefer-spread': RuleConfig<PreferSpreadRuleOptions>;
  /**
   * Require template literals instead of string concatenation
   *
   * @see [prefer-template](https://eslint.org/docs/latest/rules/prefer-template)
   */
  'prefer-template': RuleConfig<PreferTemplateRuleOptions>;
  /**
   * Require quotes around object literal property names
   *
   * @see [quote-props](https://eslint.org/docs/latest/rules/quote-props)
   */
  'quote-props': RuleConfig<QuotePropsRuleOptions>;
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   *
   * @see [quotes](https://eslint.org/docs/latest/rules/quotes)
   */
  quotes: RuleConfig<QuotesRuleOptions>;
  /**
   * Enforce the consistent use of the radix argument when using `parseInt()`
   *
   * @see [radix](https://eslint.org/docs/latest/rules/radix)
   */
  radix: RuleConfig<RadixRuleOptions>;
  /**
   * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
   *
   * @see [require-atomic-updates](https://eslint.org/docs/latest/rules/require-atomic-updates)
   */
  'require-atomic-updates': RuleConfig<RequireAtomicUpdatesRuleOptions>;
  /**
   * Disallow async functions which have no `await` expression
   *
   * @see [require-await](https://eslint.org/docs/latest/rules/require-await)
   */
  'require-await': RuleConfig<RequireAwaitRuleOptions>;
  /**
   * Require JSDoc comments
   *
   * @see [require-jsdoc](https://eslint.org/docs/latest/rules/require-jsdoc)
   */
  'require-jsdoc': RuleConfig<RequireJsdocRuleOptions>;
  /**
   * Enforce the use of `u` or `v` flag on RegExp
   *
   * @see [require-unicode-regexp](https://eslint.org/docs/latest/rules/require-unicode-regexp)
   */
  'require-unicode-regexp': RuleConfig<RequireUnicodeRegexpRuleOptions>;
  /**
   * Require generator functions to contain `yield`
   *
   * @see [require-yield](https://eslint.org/docs/latest/rules/require-yield)
   */
  'require-yield': RuleConfig<RequireYieldRuleOptions>;
  /**
   * Enforce spacing between rest and spread operators and their expressions
   *
   * @see [rest-spread-spacing](https://eslint.org/docs/latest/rules/rest-spread-spacing)
   */
  'rest-spread-spacing': RuleConfig<RestSpreadSpacingRuleOptions>;
  /**
   * Require or disallow semicolons instead of ASI
   *
   * @see [semi](https://eslint.org/docs/latest/rules/semi)
   */
  semi: RuleConfig<SemiRuleOptions>;
  /**
   * Enforce consistent spacing before and after semicolons
   *
   * @see [semi-spacing](https://eslint.org/docs/latest/rules/semi-spacing)
   */
  'semi-spacing': RuleConfig<SemiSpacingRuleOptions>;
  /**
   * Enforce location of semicolons
   *
   * @see [semi-style](https://eslint.org/docs/latest/rules/semi-style)
   */
  'semi-style': RuleConfig<SemiStyleRuleOptions>;
  /**
   * Enforce sorted import declarations within modules
   *
   * @see [sort-imports](https://eslint.org/docs/latest/rules/sort-imports)
   */
  'sort-imports': RuleConfig<SortImportsRuleOptions>;
  /**
   * Require object keys to be sorted
   *
   * @see [sort-keys](https://eslint.org/docs/latest/rules/sort-keys)
   */
  'sort-keys': RuleConfig<SortKeysRuleOptions>;
  /**
   * Require variables within the same declaration block to be sorted
   *
   * @see [sort-vars](https://eslint.org/docs/latest/rules/sort-vars)
   */
  'sort-vars': RuleConfig<SortVarsRuleOptions>;
  /**
   * Enforce consistent spacing before blocks
   *
   * @see [space-before-blocks](https://eslint.org/docs/latest/rules/space-before-blocks)
   */
  'space-before-blocks': RuleConfig<SpaceBeforeBlocksRuleOptions>;
  /**
   * Enforce consistent spacing before `function` definition opening parenthesis
   *
   * @see [space-before-function-paren](https://eslint.org/docs/latest/rules/space-before-function-paren)
   */
  'space-before-function-paren': RuleConfig<SpaceBeforeFunctionParenRuleOptions>;
  /**
   * Enforce consistent spacing inside parentheses
   *
   * @see [space-in-parens](https://eslint.org/docs/latest/rules/space-in-parens)
   */
  'space-in-parens': RuleConfig<SpaceInParensRuleOptions>;
  /**
   * Require spacing around infix operators
   *
   * @see [space-infix-ops](https://eslint.org/docs/latest/rules/space-infix-ops)
   */
  'space-infix-ops': RuleConfig<SpaceInfixOpsRuleOptions>;
  /**
   * Enforce consistent spacing before or after unary operators
   *
   * @see [space-unary-ops](https://eslint.org/docs/latest/rules/space-unary-ops)
   */
  'space-unary-ops': RuleConfig<SpaceUnaryOpsRuleOptions>;
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment
   *
   * @see [spaced-comment](https://eslint.org/docs/latest/rules/spaced-comment)
   */
  'spaced-comment': RuleConfig<SpacedCommentRuleOptions>;
  /**
   * Require or disallow strict mode directives
   *
   * @see [strict](https://eslint.org/docs/latest/rules/strict)
   */
  strict: RuleConfig<StrictRuleOptions>;
  /**
   * Enforce spacing around colons of switch statements
   *
   * @see [switch-colon-spacing](https://eslint.org/docs/latest/rules/switch-colon-spacing)
   */
  'switch-colon-spacing': RuleConfig<SwitchColonSpacingRuleOptions>;
  /**
   * Require symbol descriptions
   *
   * @see [symbol-description](https://eslint.org/docs/latest/rules/symbol-description)
   */
  'symbol-description': RuleConfig<SymbolDescriptionRuleOptions>;
  /**
   * Require or disallow spacing around embedded expressions of template strings
   *
   * @see [template-curly-spacing](https://eslint.org/docs/latest/rules/template-curly-spacing)
   */
  'template-curly-spacing': RuleConfig<TemplateCurlySpacingRuleOptions>;
  /**
   * Require or disallow spacing between template tags and their literals
   *
   * @see [template-tag-spacing](https://eslint.org/docs/latest/rules/template-tag-spacing)
   */
  'template-tag-spacing': RuleConfig<TemplateTagSpacingRuleOptions>;
  /**
   * Require or disallow Unicode byte order mark (BOM)
   *
   * @see [unicode-bom](https://eslint.org/docs/latest/rules/unicode-bom)
   */
  'unicode-bom': RuleConfig<UnicodeBomRuleOptions>;
  /**
   * Require calls to `isNaN()` when checking for `NaN`
   *
   * @see [use-isnan](https://eslint.org/docs/latest/rules/use-isnan)
   */
  'use-isnan': RuleConfig<UseIsnanRuleOptions>;
  /**
   * Enforce valid JSDoc comments
   *
   * @see [valid-jsdoc](https://eslint.org/docs/latest/rules/valid-jsdoc)
   */
  'valid-jsdoc': RuleConfig<ValidJsdocRuleOptions>;
  /**
   * Enforce comparing `typeof` expressions against valid strings
   *
   * @see [valid-typeof](https://eslint.org/docs/latest/rules/valid-typeof)
   */
  'valid-typeof': RuleConfig<ValidTypeofRuleOptions>;
  /**
   * Require `var` declarations be placed at the top of their containing scope
   *
   * @see [vars-on-top](https://eslint.org/docs/latest/rules/vars-on-top)
   */
  'vars-on-top': RuleConfig<VarsOnTopRuleOptions>;
  /**
   * Require parentheses around immediate `function` invocations
   *
   * @see [wrap-iife](https://eslint.org/docs/latest/rules/wrap-iife)
   */
  'wrap-iife': RuleConfig<WrapIifeRuleOptions>;
  /**
   * Require parenthesis around regex literals
   *
   * @see [wrap-regex](https://eslint.org/docs/latest/rules/wrap-regex)
   */
  'wrap-regex': RuleConfig<WrapRegexRuleOptions>;
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions
   *
   * @see [yield-star-spacing](https://eslint.org/docs/latest/rules/yield-star-spacing)
   */
  'yield-star-spacing': RuleConfig<YieldStarSpacingRuleOptions>;
  /**
   * Require or disallow "Yoda" conditions
   *
   * @see [yoda](https://eslint.org/docs/latest/rules/yoda)
   */
  yoda: RuleConfig<YodaRuleOptions>;
}
