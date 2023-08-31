import type { AlphabetizeRule } from './alphabetize.d.ts';
import type { DescriptionStyleRule } from './description-style.d.ts';
import type { ExecutableDefinitionsRule } from './executable-definitions.d.ts';
import type { FieldsOnCorrectTypeRule } from './fields-on-correct-type.d.ts';
import type { FragmentsOnCompositeTypeRule } from './fragments-on-composite-type.d.ts';
import type { InputNameRule } from './input-name.d.ts';
import type { KnownArgumentNamesRule } from './known-argument-names.d.ts';
import type { KnownDirectivesRule } from './known-directives.d.ts';
import type { KnownFragmentNamesRule } from './known-fragment-names.d.ts';
import type { KnownTypeNamesRule } from './known-type-names.d.ts';
import type { LoneAnonymousOperationRule } from './lone-anonymous-operation.d.ts';
import type { LoneExecutableDefinitionRule } from './lone-executable-definition.d.ts';
import type { LoneSchemaDefinitionRule } from './lone-schema-definition.d.ts';
import type { MatchDocumentFilenameRule } from './match-document-filename.d.ts';
import type { NamingConventionRule } from './naming-convention.d.ts';
import type { NoAnonymousOperationsRule } from './no-anonymous-operations.d.ts';
import type { NoCaseInsensitiveEnumValuesDuplicatesRule } from './no-case-insensitive-enum-values-duplicates.d.ts';
import type { NoDeprecatedRule } from './no-deprecated.d.ts';
import type { NoDuplicateFieldsRule } from './no-duplicate-fields.d.ts';
import type { NoFragmentCyclesRule } from './no-fragment-cycles.d.ts';
import type { NoHashtagDescriptionRule } from './no-hashtag-description.d.ts';
import type { NoOnePlaceFragmentsRule } from './no-one-place-fragments.d.ts';
import type { NoRootTypeRule } from './no-root-type.d.ts';
import type { NoScalarResultTypeOnMutationRule } from './no-scalar-result-type-on-mutation.d.ts';
import type { NoTypenamePrefixRule } from './no-typename-prefix.d.ts';
import type { NoUndefinedVariablesRule } from './no-undefined-variables.d.ts';
import type { NoUnreachableTypesRule } from './no-unreachable-types.d.ts';
import type { NoUnusedFieldsRule } from './no-unused-fields.d.ts';
import type { NoUnusedFragmentsRule } from './no-unused-fragments.d.ts';
import type { NoUnusedVariablesRule } from './no-unused-variables.d.ts';
import type { OneFieldSubscriptionsRule } from './one-field-subscriptions.d.ts';
import type { OverlappingFieldsCanBeMergedRule } from './overlapping-fields-can-be-merged.d.ts';
import type { PossibleFragmentSpreadRule } from './possible-fragment-spread.d.ts';
import type { PossibleTypeExtensionRule } from './possible-type-extension.d.ts';
import type { ProvidedRequiredArgumentsRule } from './provided-required-arguments.d.ts';
import type { RelayArgumentsRule } from './relay-arguments.d.ts';
import type { RelayConnectionTypesRule } from './relay-connection-types.d.ts';
import type { RelayEdgeTypesRule } from './relay-edge-types.d.ts';
import type { RelayPageInfoRule } from './relay-page-info.d.ts';
import type { RequireDeprecationDateRule } from './require-deprecation-date.d.ts';
import type { RequireDeprecationReasonRule } from './require-deprecation-reason.d.ts';
import type { RequireDescriptionRule } from './require-description.d.ts';
import type { RequireFieldOfTypeQueryInMutationResultRule } from './require-field-of-type-query-in-mutation-result.d.ts';
import type { RequireIdWhenAvailableRule } from './require-id-when-available.d.ts';
import type { RequireImportFragmentRule } from './require-import-fragment.d.ts';
import type { RequireNullableFieldsWithOneofRule } from './require-nullable-fields-with-oneof.d.ts';
import type { RequireNullableResultInRootRule } from './require-nullable-result-in-root.d.ts';
import type { RequireTypePatternWithOneofRule } from './require-type-pattern-with-oneof.d.ts';
import type { ScalarLeafsRule } from './scalar-leafs.d.ts';
import type { SelectionSetDepthRule } from './selection-set-depth.d.ts';
import type { StrictIdInTypesRule } from './strict-id-in-types.d.ts';
import type { UniqueArgumentNamesRule } from './unique-argument-names.d.ts';
import type { UniqueDirectiveNamesPerLocationRule } from './unique-directive-names-per-location.d.ts';
import type { UniqueDirectiveNamesRule } from './unique-directive-names.d.ts';
import type { UniqueEnumValueNamesRule } from './unique-enum-value-names.d.ts';
import type { UniqueFieldDefinitionNamesRule } from './unique-field-definition-names.d.ts';
import type { UniqueFragmentNameRule } from './unique-fragment-name.d.ts';
import type { UniqueInputFieldNamesRule } from './unique-input-field-names.d.ts';
import type { UniqueOperationNameRule } from './unique-operation-name.d.ts';
import type { UniqueOperationTypesRule } from './unique-operation-types.d.ts';
import type { UniqueTypeNamesRule } from './unique-type-names.d.ts';
import type { UniqueVariableNamesRule } from './unique-variable-names.d.ts';
import type { ValueLiteralsOfCorrectTypeRule } from './value-literals-of-correct-type.d.ts';
import type { VariablesAreInputTypesRule } from './variables-are-input-types.d.ts';
import type { VariablesInAllowedPositionRule } from './variables-in-allowed-position.d.ts';

/**
 * All GraphQL rules.
 */
export type GraphQLRules = ExecutableDefinitionsRule &
  FieldsOnCorrectTypeRule &
  FragmentsOnCompositeTypeRule &
  KnownArgumentNamesRule &
  KnownDirectivesRule &
  KnownFragmentNamesRule &
  KnownTypeNamesRule &
  LoneAnonymousOperationRule &
  LoneSchemaDefinitionRule &
  NoFragmentCyclesRule &
  NoUndefinedVariablesRule &
  NoUnusedFragmentsRule &
  NoUnusedVariablesRule &
  OverlappingFieldsCanBeMergedRule &
  PossibleFragmentSpreadRule &
  PossibleTypeExtensionRule &
  ProvidedRequiredArgumentsRule &
  ScalarLeafsRule &
  OneFieldSubscriptionsRule &
  UniqueArgumentNamesRule &
  UniqueDirectiveNamesRule &
  UniqueDirectiveNamesPerLocationRule &
  UniqueEnumValueNamesRule &
  UniqueFieldDefinitionNamesRule &
  UniqueInputFieldNamesRule &
  UniqueOperationTypesRule &
  UniqueTypeNamesRule &
  UniqueVariableNamesRule &
  ValueLiteralsOfCorrectTypeRule &
  VariablesAreInputTypesRule &
  VariablesInAllowedPositionRule &
  AlphabetizeRule &
  DescriptionStyleRule &
  InputNameRule &
  LoneExecutableDefinitionRule &
  MatchDocumentFilenameRule &
  NamingConventionRule &
  NoAnonymousOperationsRule &
  NoCaseInsensitiveEnumValuesDuplicatesRule &
  NoDeprecatedRule &
  NoDuplicateFieldsRule &
  NoHashtagDescriptionRule &
  NoOnePlaceFragmentsRule &
  NoRootTypeRule &
  NoScalarResultTypeOnMutationRule &
  NoTypenamePrefixRule &
  NoUnreachableTypesRule &
  NoUnusedFieldsRule &
  RelayArgumentsRule &
  RelayConnectionTypesRule &
  RelayEdgeTypesRule &
  RelayPageInfoRule &
  RequireDeprecationDateRule &
  RequireDeprecationReasonRule &
  RequireDescriptionRule &
  RequireFieldOfTypeQueryInMutationResultRule &
  RequireIdWhenAvailableRule &
  RequireImportFragmentRule &
  RequireNullableFieldsWithOneofRule &
  RequireNullableResultInRootRule &
  RequireTypePatternWithOneofRule &
  SelectionSetDepthRule &
  StrictIdInTypesRule &
  UniqueFragmentNameRule &
  UniqueOperationNameRule;
