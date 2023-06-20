import type { AlphabetizeRule } from './alphabetize';
import type { DescriptionStyleRule } from './description-style';
import type { ExecutableDefinitionsRule } from './executable-definitions';
import type { FieldsOnCorrectTypeRule } from './fields-on-correct-type';
import type { FragmentsOnCompositeTypeRule } from './fragments-on-composite-type';
import type { InputNameRule } from './input-name';
import type { KnownArgumentNamesRule } from './known-argument-names';
import type { KnownDirectivesRule } from './known-directives';
import type { KnownFragmentNamesRule } from './known-fragment-names';
import type { KnownTypeNamesRule } from './known-type-names';
import type { LoneAnonymousOperationRule } from './lone-anonymous-operation';
import type { LoneExecutableDefinitionRule } from './lone-executable-definition';
import type { LoneSchemaDefinitionRule } from './lone-schema-definition';
import type { MatchDocumentFilenameRule } from './match-document-filename';
import type { NamingConventionRule } from './naming-convention';
import type { NoAnonymousOperationsRule } from './no-anonymous-operations';
import type { NoCaseInsensitiveEnumValuesDuplicatesRule } from './no-case-insensitive-enum-values-duplicates';
import type { NoDeprecatedRule } from './no-deprecated';
import type { NoDuplicateFieldsRule } from './no-duplicate-fields';
import type { NoFragmentCyclesRule } from './no-fragment-cycles';
import type { NoHashtagDescriptionRule } from './no-hashtag-description';
import type { NoOnePlaceFragmentsRule } from './no-one-place-fragments';
import type { NoRootTypeRule } from './no-root-type';
import type { NoScalarResultTypeOnMutationRule } from './no-scalar-result-type-on-mutation';
import type { NoTypenamePrefixRule } from './no-typename-prefix';
import type { NoUndefinedVariablesRule } from './no-undefined-variables';
import type { NoUnreachableTypesRule } from './no-unreachable-types';
import type { NoUnusedFieldsRule } from './no-unused-fields';
import type { NoUnusedFragmentsRule } from './no-unused-fragments';
import type { NoUnusedVariablesRule } from './no-unused-variables';
import type { OneFieldSubscriptionsRule } from './one-field-subscriptions';
import type { OverlappingFieldsCanBeMergedRule } from './overlapping-fields-can-be-merged';
import type { PossibleFragmentSpreadRule } from './possible-fragment-spread';
import type { PossibleTypeExtensionRule } from './possible-type-extension';
import type { ProvidedRequiredArgumentsRule } from './provided-required-arguments';
import type { RelayArgumentsRule } from './relay-arguments';
import type { RelayConnectionTypesRule } from './relay-connection-types';
import type { RelayEdgeTypesRule } from './relay-edge-types';
import type { RelayPageInfoRule } from './relay-page-info';
import type { RequireDeprecationDateRule } from './require-deprecation-date';
import type { RequireDeprecationReasonRule } from './require-deprecation-reason';
import type { RequireDescriptionRule } from './require-description';
import type { RequireFieldOfTypeQueryInMutationResultRule } from './require-field-of-type-query-in-mutation-result';
import type { RequireIdWhenAvailableRule } from './require-id-when-available';
import type { RequireImportFragmentRule } from './require-import-fragment';
import type { RequireNullableFieldsWithOneofRule } from './require-nullable-fields-with-oneof';
import type { RequireNullableResultInRootRule } from './require-nullable-result-in-root';
import type { RequireTypePatternWithOneofRule } from './require-type-pattern-with-oneof';
import type { ScalarLeafsRule } from './scalar-leafs';
import type { SelectionSetDepthRule } from './selection-set-depth';
import type { StrictIdInTypesRule } from './strict-id-in-types';
import type { UniqueArgumentNamesRule } from './unique-argument-names';
import type { UniqueDirectiveNamesRule } from './unique-directive-names';
import type { UniqueDirectiveNamesPerLocationRule } from './unique-directive-names-per-location';
import type { UniqueEnumValueNamesRule } from './unique-enum-value-names';
import type { UniqueFieldDefinitionNamesRule } from './unique-field-definition-names';
import type { UniqueFragmentNameRule } from './unique-fragment-name';
import type { UniqueInputFieldNamesRule } from './unique-input-field-names';
import type { UniqueOperationNameRule } from './unique-operation-name';
import type { UniqueOperationTypesRule } from './unique-operation-types';
import type { UniqueTypeNamesRule } from './unique-type-names';
import type { UniqueVariableNamesRule } from './unique-variable-names';
import type { ValueLiteralsOfCorrectTypeRule } from './value-literals-of-correct-type';
import type { VariablesAreInputTypesRule } from './variables-are-input-types';
import type { VariablesInAllowedPositionRule } from './variables-in-allowed-position';

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
