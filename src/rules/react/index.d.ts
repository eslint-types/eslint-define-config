import type { BooleanPropNamingRule } from './boolean-prop-naming';
import type { ButtonHasTypeRule } from './button-has-type';
import type { DefaultPropsMatchPropTypesRule } from './default-props-match-prop-types';
import type { DestructuringAssignmentRule } from './destructuring-assignment';
import type { DisplayNameRule } from './display-name';
import type { ForbidComponentPropsRule } from './forbid-component-props';
import type { ForbidDomPropsRule } from './forbid-dom-props';
import type { ForbidElementsRule } from './forbid-elements';
import type { ForbidForeignPropTypesRule } from './forbid-foreign-prop-types';
import type { ForbidPropTypesRule } from './forbid-prop-types';
import type { FunctionComponentDefinitionRule } from './function-component-definition';
import type { HookUseStateRule } from './hook-use-state';
import type { IframeMissingSandboxRule } from './iframe-missing-sandbox';
import type { JsxBooleanValueRule } from './jsx-boolean-value';
import type { JsxChildElementSpacingRule } from './jsx-child-element-spacing';
import type { JsxClosingBracketLocationRule } from './jsx-closing-bracket-location';
import type { JsxClosingTagLocationRule } from './jsx-closing-tag-location';
import type { JsxCurlyBracePresenceRule } from './jsx-curly-brace-presence';
import type { JsxCurlyNewlineRule } from './jsx-curly-newline';
import type { JsxCurlySpacingRule } from './jsx-curly-spacing';
import type { JsxEqualsSpacingRule } from './jsx-equals-spacing';
import type { JsxFilenameExtensionRule } from './jsx-filename-extension';
import type { JsxFirstPropNewLineRule } from './jsx-first-prop-new-line';
import type { JsxFragmentsRule } from './jsx-fragments';
import type { JsxHandlerNamesRule } from './jsx-handler-names';
import type { JsxIndentRule } from './jsx-indent';
import type { JsxIndentPropsRule } from './jsx-indent-props';
import type { JsxKeyRule } from './jsx-key';
import type { JsxMaxDepthRule } from './jsx-max-depth';
import type { JsxMaxPropsPerLineRule } from './jsx-max-props-per-line';
import type { JsxNewlineRule } from './jsx-newline';
import type { JsxNoBindRule } from './jsx-no-bind';
import type { JsxNoCommentTextnodesRule } from './jsx-no-comment-textnodes';
import type { JsxNoConstructedContextValuesRule } from './jsx-no-constructed-context-values';
import type { JsxNoDuplicatePropsRule } from './jsx-no-duplicate-props';
import type { JsxNoLeakedRenderRule } from './jsx-no-leaked-render';
import type { JsxNoLiteralsRule } from './jsx-no-literals';
import type { JsxNoScriptUrlRule } from './jsx-no-script-url';
import type { JsxNoTargetBlankRule } from './jsx-no-target-blank';
import type { JsxNoUndefRule } from './jsx-no-undef';
import type { JsxNoUselessFragmentRule } from './jsx-no-useless-fragment';
import type { JsxOneExpressionPerLineRule } from './jsx-one-expression-per-line';
import type { JsxPascalCaseRule } from './jsx-pascal-case';
import type { JsxPropsNoMultiSpacesRule } from './jsx-props-no-multi-spaces';
import type { JsxPropsNoSpreadingRule } from './jsx-props-no-spreading';
import type { JsxSortDefaultPropsRule } from './jsx-sort-default-props';
import type { JsxSortPropsRule } from './jsx-sort-props';
import type { JsxSpaceBeforeClosingRule } from './jsx-space-before-closing';
import type { JsxTagSpacingRule } from './jsx-tag-spacing';
import type { JsxUsesReactRule } from './jsx-uses-react';
import type { JsxUsesVarsRule } from './jsx-uses-vars';
import type { JsxWrapMultilinesRule } from './jsx-wrap-multilines';
import type { NoAccessStateInSetstateRule } from './no-access-state-in-setstate';
import type { NoAdjacentInlineElementsRule } from './no-adjacent-inline-elements';
import type { NoArrayIndexKeyRule } from './no-array-index-key';
import type { NoArrowFunctionLifecycleRule } from './no-arrow-function-lifecycle';
import type { NoChildrenPropRule } from './no-children-prop';
import type { NoDangerRule } from './no-danger';
import type { NoDangerWithChildrenRule } from './no-danger-with-children';
import type { NoDeprecatedRule } from './no-deprecated';
import type { NoDidMountSetStateRule } from './no-did-mount-set-state';
import type { NoDidUpdateSetStateRule } from './no-did-update-set-state';
import type { NoDirectMutationStateRule } from './no-direct-mutation-state';
import type { NoFindDomNodeRule } from './no-find-dom-node';
import type { NoInvalidHtmlAttributeRule } from './no-invalid-html-attribute';
import type { NoIsMountedRule } from './no-is-mounted';
import type { NoMultiCompRule } from './no-multi-comp';
import type { NoNamespaceRule } from './no-namespace';
import type { NoObjectTypeAsDefaultPropRule } from './no-object-type-as-default-prop';
import type { NoRedundantShouldComponentUpdateRule } from './no-redundant-should-component-update';
import type { NoRenderReturnValueRule } from './no-render-return-value';
import type { NoSetStateRule } from './no-set-state';
import type { NoStringRefsRule } from './no-string-refs';
import type { NoThisInSfcRule } from './no-this-in-sfc';
import type { NoTyposRule } from './no-typos';
import type { NoUnescapedEntitiesRule } from './no-unescaped-entities';
import type { NoUnknownPropertyRule } from './no-unknown-property';
import type { NoUnsafeRule } from './no-unsafe';
import type { NoUnstableNestedComponentsRule } from './no-unstable-nested-components';
import type { NoUnusedClassComponentMethodsRule } from './no-unused-class-component-methods';
import type { NoUnusedPropTypesRule } from './no-unused-prop-types';
import type { NoUnusedStateRule } from './no-unused-state';
import type { NoWillUpdateSetStateRule } from './no-will-update-set-state';
import type { PreferEs6ClassRule } from './prefer-es6-class';
import type { PreferExactPropsRule } from './prefer-exact-props';
import type { PreferReadOnlyPropsRule } from './prefer-read-only-props';
import type { PreferStatelessFunctionRule } from './prefer-stateless-function';
import type { PropTypesRule } from './prop-types';
import type { ReactInJsxScopeRule } from './react-in-jsx-scope';
import type { RequireDefaultPropsRule } from './require-default-props';
import type { RequireOptimizationRule } from './require-optimization';
import type { RequireRenderReturnRule } from './require-render-return';
import type { SelfClosingCompRule } from './self-closing-comp';
import type { SortCompRule } from './sort-comp';
import type { SortDefaultPropsRule } from './sort-default-props';
import type { SortPropTypesRule } from './sort-prop-types';
import type { StateInConstructorRule } from './state-in-constructor';
import type { StaticPropertyPlacementRule } from './static-property-placement';
import type { StylePropObjectRule } from './style-prop-object';
import type { VoidDomElementsNoChildrenRule } from './void-dom-elements-no-children';

/**
 * All React rules.
 */
export type ReactRules = BooleanPropNamingRule &
  ButtonHasTypeRule &
  DefaultPropsMatchPropTypesRule &
  DestructuringAssignmentRule &
  DisplayNameRule &
  ForbidComponentPropsRule &
  ForbidDomPropsRule &
  ForbidElementsRule &
  ForbidForeignPropTypesRule &
  ForbidPropTypesRule &
  FunctionComponentDefinitionRule &
  HookUseStateRule &
  IframeMissingSandboxRule &
  JsxBooleanValueRule &
  JsxChildElementSpacingRule &
  JsxClosingBracketLocationRule &
  JsxClosingTagLocationRule &
  JsxCurlySpacingRule &
  JsxCurlyNewlineRule &
  JsxEqualsSpacingRule &
  JsxFilenameExtensionRule &
  JsxFirstPropNewLineRule &
  JsxHandlerNamesRule &
  JsxIndentRule &
  JsxIndentPropsRule &
  JsxKeyRule &
  JsxMaxDepthRule &
  JsxMaxPropsPerLineRule &
  JsxNewlineRule &
  JsxNoBindRule &
  JsxNoCommentTextnodesRule &
  JsxNoConstructedContextValuesRule &
  JsxNoDuplicatePropsRule &
  JsxNoLeakedRenderRule &
  JsxNoLiteralsRule &
  JsxNoScriptUrlRule &
  JsxNoTargetBlankRule &
  JsxNoUselessFragmentRule &
  JsxOneExpressionPerLineRule &
  JsxNoUndefRule &
  JsxCurlyBracePresenceRule &
  JsxPascalCaseRule &
  JsxFragmentsRule &
  JsxPropsNoMultiSpacesRule &
  JsxPropsNoSpreadingRule &
  JsxSortDefaultPropsRule &
  JsxSortPropsRule &
  JsxSpaceBeforeClosingRule &
  JsxTagSpacingRule &
  JsxUsesReactRule &
  JsxUsesVarsRule &
  JsxWrapMultilinesRule &
  NoInvalidHtmlAttributeRule &
  NoAccessStateInSetstateRule &
  NoAdjacentInlineElementsRule &
  NoArrayIndexKeyRule &
  NoArrowFunctionLifecycleRule &
  NoChildrenPropRule &
  NoDangerRule &
  NoDangerWithChildrenRule &
  NoDeprecatedRule &
  NoDidMountSetStateRule &
  NoDidUpdateSetStateRule &
  NoDirectMutationStateRule &
  NoFindDomNodeRule &
  NoIsMountedRule &
  NoMultiCompRule &
  NoNamespaceRule &
  NoSetStateRule &
  NoStringRefsRule &
  NoRedundantShouldComponentUpdateRule &
  NoRenderReturnValueRule &
  NoThisInSfcRule &
  NoTyposRule &
  NoUnescapedEntitiesRule &
  NoUnknownPropertyRule &
  NoUnsafeRule &
  NoUnstableNestedComponentsRule &
  NoUnusedClassComponentMethodsRule &
  NoUnusedPropTypesRule &
  NoUnusedStateRule &
  NoObjectTypeAsDefaultPropRule &
  NoWillUpdateSetStateRule &
  PreferEs6ClassRule &
  PreferExactPropsRule &
  PreferReadOnlyPropsRule &
  PreferStatelessFunctionRule &
  PropTypesRule &
  ReactInJsxScopeRule &
  RequireDefaultPropsRule &
  RequireOptimizationRule &
  RequireRenderReturnRule &
  SelfClosingCompRule &
  SortCompRule &
  SortDefaultPropsRule &
  SortPropTypesRule &
  StateInConstructorRule &
  StaticPropertyPlacementRule &
  StylePropObjectRule &
  VoidDomElementsNoChildrenRule;
