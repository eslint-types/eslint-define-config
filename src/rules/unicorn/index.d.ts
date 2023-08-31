import type { BetterRegexRule } from './better-regex.d.ts';
import type { CatchErrorNameRule } from './catch-error-name.d.ts';
import type { ConsistentDestructuringRule } from './consistent-destructuring.d.ts';
import type { ConsistentFunctionScopingRule } from './consistent-function-scoping.d.ts';
import type { CustomErrorDefinitionRule } from './custom-error-definition.d.ts';
import type { EmptyBraceSpacesRule } from './empty-brace-spaces.d.ts';
import type { ErrorMessageRule } from './error-message.d.ts';
import type { EscapeCaseRule } from './escape-case.d.ts';
import type { ExpiringTodoCommentsRule } from './expiring-todo-comments.d.ts';
import type { ExplicitLengthCheckRule } from './explicit-length-check.d.ts';
import type { FilenameCaseRule } from './filename-case.d.ts';
import type { ImportIndexRule } from './import-index.d.ts';
import type { ImportStyleRule } from './import-style.d.ts';
import type { NewForBuiltinsRule } from './new-for-builtins.d.ts';
import type { NoAbusiveEslintDisableRule } from './no-abusive-eslint-disable.d.ts';
import type { NoArrayCallbackReferenceRule } from './no-array-callback-reference.d.ts';
import type { NoArrayForEachRule } from './no-array-for-each.d.ts';
import type { NoArrayInstanceofRule } from './no-array-instanceof.d.ts';
import type { NoArrayMethodThisArgumentRule } from './no-array-method-this-argument.d.ts';
import type { NoArrayPushPushRule } from './no-array-push-push.d.ts';
import type { NoArrayReduceRule } from './no-array-reduce.d.ts';
import type { NoAwaitExpressionMemberRule } from './no-await-expression-member.d.ts';
import type { NoConsoleSpacesRule } from './no-console-spaces.d.ts';
import type { NoDocumentCookieRule } from './no-document-cookie.d.ts';
import type { NoEmptyFileRule } from './no-empty-file.d.ts';
import type { NoFnReferenceInIteratorRule } from './no-fn-reference-in-iterator.d.ts';
import type { NoForLoopRule } from './no-for-loop.d.ts';
import type { NoHexEscapeRule } from './no-hex-escape.d.ts';
import type { NoInstanceofArrayRule } from './no-instanceof-array.d.ts';
import type { NoInvalidRemoveEventListenerRule } from './no-invalid-remove-event-listener.d.ts';
import type { NoKeywordPrefixRule } from './no-keyword-prefix.d.ts';
import type { NoLonelyIfRule } from './no-lonely-if.d.ts';
import type { NoNegatedConditionRule } from './no-negated-condition.d.ts';
import type { NoNestedTernaryRule } from './no-nested-ternary.d.ts';
import type { NoNewArrayRule } from './no-new-array.d.ts';
import type { NoNewBufferRule } from './no-new-buffer.d.ts';
import type { NoNullRule } from './no-null.d.ts';
import type { NoObjectAsDefaultParameterRule } from './no-object-as-default-parameter.d.ts';
import type { NoProcessExitRule } from './no-process-exit.d.ts';
import type { NoReduceRule } from './no-reduce.d.ts';
import type { NoStaticOnlyClassRule } from './no-static-only-class.d.ts';
import type { NoThenableRule } from './no-thenable.d.ts';
import type { NoThisAssignmentRule } from './no-this-assignment.d.ts';
import type { NoTypeofUndefinedRule } from './no-typeof-undefined.d.ts';
import type { NoUnnecessaryAwaitRule } from './no-unnecessary-await.d.ts';
import type { NoUnreadableArrayDestructuringRule } from './no-unreadable-array-destructuring.d.ts';
import type { NoUnreadableIifeRule } from './no-unreadable-iife.d.ts';
import type { NoUnsafeRegexRule } from './no-unsafe-regex.d.ts';
import type { NoUnusedPropertiesRule } from './no-unused-properties.d.ts';
import type { NoUselessFallbackInSpreadRule } from './no-useless-fallback-in-spread.d.ts';
import type { NoUselessLengthCheckRule } from './no-useless-length-check.d.ts';
import type { NoUselessPromiseResolveRejectRule } from './no-useless-promise-resolve-reject.d.ts';
import type { NoUselessSpreadRule } from './no-useless-spread.d.ts';
import type { NoUselessSwitchCaseRule } from './no-useless-switch-case.d.ts';
import type { NoUselessUndefinedRule } from './no-useless-undefined.d.ts';
import type { NoZeroFractionsRule } from './no-zero-fractions.d.ts';
import type { NumberLiteralCaseRule } from './number-literal-case.d.ts';
import type { NumericSeparatorsStyleRule } from './numeric-separators-style.d.ts';
import type { PreferAddEventListenerRule } from './prefer-add-event-listener.d.ts';
import type { PreferArrayFindRule } from './prefer-array-find.d.ts';
import type { PreferArrayFlatMapRule } from './prefer-array-flat-map.d.ts';
import type { PreferArrayFlatRule } from './prefer-array-flat.d.ts';
import type { PreferArrayIndexOfRule } from './prefer-array-index-of.d.ts';
import type { PreferArraySomeRule } from './prefer-array-some.d.ts';
import type { PreferAtRule } from './prefer-at.d.ts';
import type { PreferBlobReadingMethodsRule } from './prefer-blob-reading-methods.d.ts';
import type { PreferCodePointRule } from './prefer-code-point.d.ts';
import type { PreferDatasetRule } from './prefer-dataset.d.ts';
import type { PreferDateNowRule } from './prefer-date-now.d.ts';
import type { PreferDefaultParametersRule } from './prefer-default-parameters.d.ts';
import type { PreferDomNodeAppendRule } from './prefer-dom-node-append.d.ts';
import type { PreferDomNodeDatasetRule } from './prefer-dom-node-dataset.d.ts';
import type { PreferDomNodeRemoveRule } from './prefer-dom-node-remove.d.ts';
import type { PreferDomNodeTextContentRule } from './prefer-dom-node-text-content.d.ts';
import type { PreferEventKeyRule } from './prefer-event-key.d.ts';
import type { PreferEventTargetRule } from './prefer-event-target.d.ts';
import type { PreferExponentiationOperatorRule } from './prefer-exponentiation-operator.d.ts';
import type { PreferExportFromRule } from './prefer-export-from.d.ts';
import type { PreferFlatMapRule } from './prefer-flat-map.d.ts';
import type { PreferIncludesRule } from './prefer-includes.d.ts';
import type { PreferJsonParseBufferRule } from './prefer-json-parse-buffer.d.ts';
import type { PreferKeyboardEventKeyRule } from './prefer-keyboard-event-key.d.ts';
import type { PreferLogicalOperatorOverTernaryRule } from './prefer-logical-operator-over-ternary.d.ts';
import type { PreferMathTruncRule } from './prefer-math-trunc.d.ts';
import type { PreferModernDomApisRule } from './prefer-modern-dom-apis.d.ts';
import type { PreferModernMathApisRule } from './prefer-modern-math-apis.d.ts';
import type { PreferModuleRule } from './prefer-module.d.ts';
import type { PreferNativeCoercionFunctionsRule } from './prefer-native-coercion-functions.d.ts';
import type { PreferNegativeIndexRule } from './prefer-negative-index.d.ts';
import type { PreferNodeAppendRule } from './prefer-node-append.d.ts';
import type { PreferNodeProtocolRule } from './prefer-node-protocol.d.ts';
import type { PreferNodeRemoveRule } from './prefer-node-remove.d.ts';
import type { PreferNumberPropertiesRule } from './prefer-number-properties.d.ts';
import type { PreferObjectFromEntriesRule } from './prefer-object-from-entries.d.ts';
import type { PreferObjectHasOwnRule } from './prefer-object-has-own.d.ts';
import type { PreferOptionalCatchBindingRule } from './prefer-optional-catch-binding.d.ts';
import type { PreferPrototypeMethodsRule } from './prefer-prototype-methods.d.ts';
import type { PreferQuerySelectorRule } from './prefer-query-selector.d.ts';
import type { PreferReflectApplyRule } from './prefer-reflect-apply.d.ts';
import type { PreferRegexpTestRule } from './prefer-regexp-test.d.ts';
import type { PreferReplaceAllRule } from './prefer-replace-all.d.ts';
import type { PreferSetHasRule } from './prefer-set-has.d.ts';
import type { PreferSetSizeRule } from './prefer-set-size.d.ts';
import type { PreferSpreadRule } from './prefer-spread.d.ts';
import type { PreferStartsEndsWithRule } from './prefer-starts-ends-with.d.ts';
import type { PreferStringReplaceAllRule } from './prefer-string-replace-all.d.ts';
import type { PreferStringSliceRule } from './prefer-string-slice.d.ts';
import type { PreferStringStartsEndsWithRule } from './prefer-string-starts-ends-with.d.ts';
import type { PreferStringTrimStartEndRule } from './prefer-string-trim-start-end.d.ts';
import type { PreferSwitchRule } from './prefer-switch.d.ts';
import type { PreferTernaryRule } from './prefer-ternary.d.ts';
import type { PreferTextContentRule } from './prefer-text-content.d.ts';
import type { PreferTopLevelAwaitRule } from './prefer-top-level-await.d.ts';
import type { PreferTrimStartEndRule } from './prefer-trim-start-end.d.ts';
import type { PreferTypeErrorRule } from './prefer-type-error.d.ts';
import type { PreventAbbreviationsRule } from './prevent-abbreviations.d.ts';
import type { RegexShorthandRule } from './regex-shorthand.d.ts';
import type { RelativeUrlStyleRule } from './relative-url-style.d.ts';
import type { RequireArrayJoinSeparatorRule } from './require-array-join-separator.d.ts';
import type { RequireNumberToFixedDigitsArgumentRule } from './require-number-to-fixed-digits-argument.d.ts';
import type { RequirePostMessageTargetOriginRule } from './require-post-message-target-origin.d.ts';
import type { StringContentRule } from './string-content.d.ts';
import type { SwitchCaseBracesRule } from './switch-case-braces.d.ts';
import type { TemplateIndentRule } from './template-indent.d.ts';
import type { TextEncodingIdentifierCaseRule } from './text-encoding-identifier-case.d.ts';
import type { ThrowNewErrorRule } from './throw-new-error.d.ts';

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
