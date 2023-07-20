import type { BetterRegexRule } from './better-regex';
import type { CatchErrorNameRule } from './catch-error-name';
import type { ConsistentDestructuringRule } from './consistent-destructuring';
import type { ConsistentFunctionScopingRule } from './consistent-function-scoping';
import type { CustomErrorDefinitionRule } from './custom-error-definition';
import type { EmptyBraceSpacesRule } from './empty-brace-spaces';
import type { ErrorMessageRule } from './error-message';
import type { EscapeCaseRule } from './escape-case';
import type { ExpiringTodoCommentsRule } from './expiring-todo-comments';
import type { ExplicitLengthCheckRule } from './explicit-length-check';
import type { FilenameCaseRule } from './filename-case';
import type { ImportIndexRule } from './import-index';
import type { ImportStyleRule } from './import-style';
import type { NewForBuiltinsRule } from './new-for-builtins';
import type { NoAbusiveEslintDisableRule } from './no-abusive-eslint-disable';
import type { NoArrayCallbackReferenceRule } from './no-array-callback-reference';
import type { NoArrayForEachRule } from './no-array-for-each';
import type { NoArrayInstanceofRule } from './no-array-instanceof';
import type { NoArrayMethodThisArgumentRule } from './no-array-method-this-argument';
import type { NoArrayPushPushRule } from './no-array-push-push';
import type { NoArrayReduceRule } from './no-array-reduce';
import type { NoAwaitExpressionMemberRule } from './no-await-expression-member';
import type { NoConsoleSpacesRule } from './no-console-spaces';
import type { NoDocumentCookieRule } from './no-document-cookie';
import type { NoEmptyFileRule } from './no-empty-file';
import type { NoFnReferenceInIteratorRule } from './no-fn-reference-in-iterator';
import type { NoForLoopRule } from './no-for-loop';
import type { NoHexEscapeRule } from './no-hex-escape';
import type { NoInstanceofArrayRule } from './no-instanceof-array';
import type { NoInvalidRemoveEventListenerRule } from './no-invalid-remove-event-listener';
import type { NoKeywordPrefixRule } from './no-keyword-prefix';
import type { NoLonelyIfRule } from './no-lonely-if';
import type { NoNegatedConditionRule } from './no-negated-condition';
import type { NoNestedTernaryRule } from './no-nested-ternary';
import type { NoNewArrayRule } from './no-new-array';
import type { NoNewBufferRule } from './no-new-buffer';
import type { NoNullRule } from './no-null';
import type { NoObjectAsDefaultParameterRule } from './no-object-as-default-parameter';
import type { NoProcessExitRule } from './no-process-exit';
import type { NoReduceRule } from './no-reduce';
import type { NoStaticOnlyClassRule } from './no-static-only-class';
import type { NoThenableRule } from './no-thenable';
import type { NoThisAssignmentRule } from './no-this-assignment';
import type { NoTypeofUndefinedRule } from './no-typeof-undefined';
import type { NoUnnecessaryAwaitRule } from './no-unnecessary-await';
import type { NoUnreadableArrayDestructuringRule } from './no-unreadable-array-destructuring';
import type { NoUnreadableIifeRule } from './no-unreadable-iife';
import type { NoUnsafeRegexRule } from './no-unsafe-regex';
import type { NoUnusedPropertiesRule } from './no-unused-properties';
import type { NoUselessFallbackInSpreadRule } from './no-useless-fallback-in-spread';
import type { NoUselessLengthCheckRule } from './no-useless-length-check';
import type { NoUselessPromiseResolveRejectRule } from './no-useless-promise-resolve-reject';
import type { NoUselessSpreadRule } from './no-useless-spread';
import type { NoUselessSwitchCaseRule } from './no-useless-switch-case';
import type { NoUselessUndefinedRule } from './no-useless-undefined';
import type { NoZeroFractionsRule } from './no-zero-fractions';
import type { NumberLiteralCaseRule } from './number-literal-case';
import type { NumericSeparatorsStyleRule } from './numeric-separators-style';
import type { PreferAddEventListenerRule } from './prefer-add-event-listener';
import type { PreferArrayFindRule } from './prefer-array-find';
import type { PreferArrayFlatRule } from './prefer-array-flat';
import type { PreferArrayFlatMapRule } from './prefer-array-flat-map';
import type { PreferArrayIndexOfRule } from './prefer-array-index-of';
import type { PreferArraySomeRule } from './prefer-array-some';
import type { PreferAtRule } from './prefer-at';
import type { PreferBlobReadingMethodsRule } from './prefer-blob-reading-methods';
import type { PreferCodePointRule } from './prefer-code-point';
import type { PreferDatasetRule } from './prefer-dataset';
import type { PreferDateNowRule } from './prefer-date-now';
import type { PreferDefaultParametersRule } from './prefer-default-parameters';
import type { PreferDomNodeAppendRule } from './prefer-dom-node-append';
import type { PreferDomNodeDatasetRule } from './prefer-dom-node-dataset';
import type { PreferDomNodeRemoveRule } from './prefer-dom-node-remove';
import type { PreferDomNodeTextContentRule } from './prefer-dom-node-text-content';
import type { PreferEventKeyRule } from './prefer-event-key';
import type { PreferEventTargetRule } from './prefer-event-target';
import type { PreferExponentiationOperatorRule } from './prefer-exponentiation-operator';
import type { PreferExportFromRule } from './prefer-export-from';
import type { PreferFlatMapRule } from './prefer-flat-map';
import type { PreferIncludesRule } from './prefer-includes';
import type { PreferJsonParseBufferRule } from './prefer-json-parse-buffer';
import type { PreferKeyboardEventKeyRule } from './prefer-keyboard-event-key';
import type { PreferLogicalOperatorOverTernaryRule } from './prefer-logical-operator-over-ternary';
import type { PreferMathTruncRule } from './prefer-math-trunc';
import type { PreferModernDomApisRule } from './prefer-modern-dom-apis';
import type { PreferModernMathApisRule } from './prefer-modern-math-apis';
import type { PreferModuleRule } from './prefer-module';
import type { PreferNativeCoercionFunctionsRule } from './prefer-native-coercion-functions';
import type { PreferNegativeIndexRule } from './prefer-negative-index';
import type { PreferNodeAppendRule } from './prefer-node-append';
import type { PreferNodeProtocolRule } from './prefer-node-protocol';
import type { PreferNodeRemoveRule } from './prefer-node-remove';
import type { PreferNumberPropertiesRule } from './prefer-number-properties';
import type { PreferObjectFromEntriesRule } from './prefer-object-from-entries';
import type { PreferObjectHasOwnRule } from './prefer-object-has-own';
import type { PreferOptionalCatchBindingRule } from './prefer-optional-catch-binding';
import type { PreferPrototypeMethodsRule } from './prefer-prototype-methods';
import type { PreferQuerySelectorRule } from './prefer-query-selector';
import type { PreferReflectApplyRule } from './prefer-reflect-apply';
import type { PreferRegexpTestRule } from './prefer-regexp-test';
import type { PreferReplaceAllRule } from './prefer-replace-all';
import type { PreferSetHasRule } from './prefer-set-has';
import type { PreferSetSizeRule } from './prefer-set-size';
import type { PreferSpreadRule } from './prefer-spread';
import type { PreferStartsEndsWithRule } from './prefer-starts-ends-with';
import type { PreferStringReplaceAllRule } from './prefer-string-replace-all';
import type { PreferStringSliceRule } from './prefer-string-slice';
import type { PreferStringStartsEndsWithRule } from './prefer-string-starts-ends-with';
import type { PreferStringTrimStartEndRule } from './prefer-string-trim-start-end';
import type { PreferSwitchRule } from './prefer-switch';
import type { PreferTernaryRule } from './prefer-ternary';
import type { PreferTextContentRule } from './prefer-text-content';
import type { PreferTopLevelAwaitRule } from './prefer-top-level-await';
import type { PreferTrimStartEndRule } from './prefer-trim-start-end';
import type { PreferTypeErrorRule } from './prefer-type-error';
import type { PreventAbbreviationsRule } from './prevent-abbreviations';
import type { RegexShorthandRule } from './regex-shorthand';
import type { RelativeUrlStyleRule } from './relative-url-style';
import type { RequireArrayJoinSeparatorRule } from './require-array-join-separator';
import type { RequireNumberToFixedDigitsArgumentRule } from './require-number-to-fixed-digits-argument';
import type { RequirePostMessageTargetOriginRule } from './require-post-message-target-origin';
import type { StringContentRule } from './string-content';
import type { SwitchCaseBracesRule } from './switch-case-braces';
import type { TemplateIndentRule } from './template-indent';
import type { TextEncodingIdentifierCaseRule } from './text-encoding-identifier-case';
import type { ThrowNewErrorRule } from './throw-new-error';

/**
 * All Unicorn rules.
 */
export type UnicornRules = BetterRegexRule &
  CatchErrorNameRule &
  ConsistentDestructuringRule &
  ConsistentFunctionScopingRule &
  CustomErrorDefinitionRule &
  EmptyBraceSpacesRule &
  ErrorMessageRule &
  EscapeCaseRule &
  ExpiringTodoCommentsRule &
  ExplicitLengthCheckRule &
  FilenameCaseRule &
  ImportStyleRule &
  NewForBuiltinsRule &
  NoAbusiveEslintDisableRule &
  NoArrayCallbackReferenceRule &
  NoArrayForEachRule &
  NoArrayMethodThisArgumentRule &
  NoArrayPushPushRule &
  NoArrayReduceRule &
  NoAwaitExpressionMemberRule &
  NoConsoleSpacesRule &
  NoDocumentCookieRule &
  NoEmptyFileRule &
  NoForLoopRule &
  NoHexEscapeRule &
  NoInstanceofArrayRule &
  NoInvalidRemoveEventListenerRule &
  NoKeywordPrefixRule &
  NoLonelyIfRule &
  NoNegatedConditionRule &
  NoNestedTernaryRule &
  NoNewArrayRule &
  NoNewBufferRule &
  NoNullRule &
  NoObjectAsDefaultParameterRule &
  NoProcessExitRule &
  NoStaticOnlyClassRule &
  NoThenableRule &
  NoThisAssignmentRule &
  NoTypeofUndefinedRule &
  NoUnnecessaryAwaitRule &
  NoUnreadableArrayDestructuringRule &
  NoUnreadableIifeRule &
  NoUnusedPropertiesRule &
  NoUselessFallbackInSpreadRule &
  NoUselessLengthCheckRule &
  NoUselessPromiseResolveRejectRule &
  NoUselessSpreadRule &
  NoUselessSwitchCaseRule &
  NoUselessUndefinedRule &
  NoZeroFractionsRule &
  NumberLiteralCaseRule &
  NumericSeparatorsStyleRule &
  PreferAddEventListenerRule &
  PreferArrayFindRule &
  PreferArrayFlatMapRule &
  PreferArrayFlatRule &
  PreferArrayIndexOfRule &
  PreferArraySomeRule &
  PreferAtRule &
  PreferBlobReadingMethodsRule &
  PreferCodePointRule &
  PreferDateNowRule &
  PreferDefaultParametersRule &
  PreferDomNodeAppendRule &
  PreferDomNodeDatasetRule &
  PreferDomNodeRemoveRule &
  PreferDomNodeTextContentRule &
  PreferEventTargetRule &
  PreferExportFromRule &
  PreferIncludesRule &
  PreferJsonParseBufferRule &
  PreferKeyboardEventKeyRule &
  PreferLogicalOperatorOverTernaryRule &
  PreferMathTruncRule &
  PreferModernDomApisRule &
  PreferModernMathApisRule &
  PreferModuleRule &
  PreferNativeCoercionFunctionsRule &
  PreferNegativeIndexRule &
  PreferNodeProtocolRule &
  PreferNumberPropertiesRule &
  PreferObjectFromEntriesRule &
  PreferOptionalCatchBindingRule &
  PreferPrototypeMethodsRule &
  PreferQuerySelectorRule &
  PreferReflectApplyRule &
  PreferRegexpTestRule &
  PreferSetHasRule &
  PreferSetSizeRule &
  PreferSpreadRule &
  PreferStringReplaceAllRule &
  PreferStringSliceRule &
  PreferStringStartsEndsWithRule &
  PreferStringTrimStartEndRule &
  PreferSwitchRule &
  PreferTernaryRule &
  PreferTopLevelAwaitRule &
  PreferTypeErrorRule &
  PreventAbbreviationsRule &
  RelativeUrlStyleRule &
  RequireArrayJoinSeparatorRule &
  RequireNumberToFixedDigitsArgumentRule &
  RequirePostMessageTargetOriginRule &
  StringContentRule &
  SwitchCaseBracesRule &
  TemplateIndentRule &
  TextEncodingIdentifierCaseRule &
  ThrowNewErrorRule &
  ImportIndexRule &
  NoArrayInstanceofRule &
  NoFnReferenceInIteratorRule &
  NoReduceRule &
  NoUnsafeRegexRule &
  PreferDatasetRule &
  PreferEventKeyRule &
  PreferExponentiationOperatorRule &
  PreferFlatMapRule &
  PreferNodeAppendRule &
  PreferNodeRemoveRule &
  PreferObjectHasOwnRule &
  PreferReplaceAllRule &
  PreferStartsEndsWithRule &
  PreferTextContentRule &
  PreferTrimStartEndRule &
  RegexShorthandRule;
