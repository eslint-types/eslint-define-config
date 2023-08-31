import type { CheckAccessRule } from './check-access.d.ts';
import type { CheckAlignmentRule } from './check-alignment.d.ts';
import type { CheckExamplesRule } from './check-examples.d.ts';
import type { CheckIndentationRule } from './check-indentation.d.ts';
import type { CheckLineAlignmentRule } from './check-line-alignment.d.ts';
import type { CheckParamNamesRule } from './check-param-names.d.ts';
import type { CheckPropertyNamesRule } from './check-property-names.d.ts';
import type { CheckSyntaxRule } from './check-syntax.d.ts';
import type { CheckTagNamesRule } from './check-tag-names.d.ts';
import type { CheckTypesRule } from './check-types.d.ts';
import type { CheckValuesRule } from './check-values.d.ts';
import type { EmptyTagsRule } from './empty-tags.d.ts';
import type { ImplementsOnClassesRule } from './implements-on-classes.d.ts';
import type { ImportsAsDependenciesRule } from './imports-as-dependencies.d.ts';
import type { InformativeDocsRule } from './informative-docs.d.ts';
import type { MatchDescriptionRule } from './match-description.d.ts';
import type { MatchNameRule } from './match-name.d.ts';
import type { MultilineBlocksRule } from './multiline-blocks.d.ts';
import type { NoBadBlocksRule } from './no-bad-blocks.d.ts';
import type { NoBlankBlockDescriptionsRule } from './no-blank-block-descriptions.d.ts';
import type { NoBlankBlocksRule } from './no-blank-blocks.d.ts';
import type { NoDefaultsRule } from './no-defaults.d.ts';
import type { NoMissingSyntaxRule } from './no-missing-syntax.d.ts';
import type { NoMultiAsterisksRule } from './no-multi-asterisks.d.ts';
import type { NoRestrictedSyntaxRule } from './no-restricted-syntax.d.ts';
import type { NoTypesRule } from './no-types.d.ts';
import type { NoUndefinedTypesRule } from './no-undefined-types.d.ts';
import type { RequireAsteriskPrefixRule } from './require-asterisk-prefix.d.ts';
import type { RequireDescriptionCompleteSentenceRule } from './require-description-complete-sentence.d.ts';
import type { RequireDescriptionRule } from './require-description.d.ts';
import type { RequireExampleRule } from './require-example.d.ts';
import type { RequireFileOverviewRule } from './require-file-overview.d.ts';
import type { RequireHyphenBeforeParamDescriptionRule } from './require-hyphen-before-param-description.d.ts';
import type { RequireJsdocRule } from './require-jsdoc.d.ts';
import type { RequireParamDescriptionRule } from './require-param-description.d.ts';
import type { RequireParamNameRule } from './require-param-name.d.ts';
import type { RequireParamTypeRule } from './require-param-type.d.ts';
import type { RequireParamRule } from './require-param.d.ts';
import type { RequirePropertyDescriptionRule } from './require-property-description.d.ts';
import type { RequirePropertyNameRule } from './require-property-name.d.ts';
import type { RequirePropertyTypeRule } from './require-property-type.d.ts';
import type { RequirePropertyRule } from './require-property.d.ts';
import type { RequireReturnsCheckRule } from './require-returns-check.d.ts';
import type { RequireReturnsDescriptionRule } from './require-returns-description.d.ts';
import type { RequireReturnsTypeRule } from './require-returns-type.d.ts';
import type { RequireReturnsRule } from './require-returns.d.ts';
import type { RequireThrowsRule } from './require-throws.d.ts';
import type { RequireYieldsCheckRule } from './require-yields-check.d.ts';
import type { RequireYieldsRule } from './require-yields.d.ts';
import type { SortTagsRule } from './sort-tags.d.ts';
import type { TagLinesRule } from './tag-lines.d.ts';
import type { TextEscapingRule } from './text-escaping.d.ts';
import type { ValidTypesRule } from './valid-types.d.ts';

/**
 * All JSDoc rules.
 */
export type JSDocRules = CheckAccessRule &
  CheckAlignmentRule &
  CheckExamplesRule &
  CheckIndentationRule &
  CheckLineAlignmentRule &
  CheckParamNamesRule &
  CheckPropertyNamesRule &
  CheckSyntaxRule &
  CheckTagNamesRule &
  CheckTypesRule &
  CheckValuesRule &
  EmptyTagsRule &
  ImplementsOnClassesRule &
  ImportsAsDependenciesRule &
  InformativeDocsRule &
  MatchDescriptionRule &
  MatchNameRule &
  MultilineBlocksRule &
  NoBadBlocksRule &
  NoBlankBlockDescriptionsRule &
  NoBlankBlocksRule &
  NoDefaultsRule &
  NoMissingSyntaxRule &
  NoMultiAsterisksRule &
  NoRestrictedSyntaxRule &
  NoTypesRule &
  NoUndefinedTypesRule &
  RequireAsteriskPrefixRule &
  RequireDescriptionRule &
  RequireDescriptionCompleteSentenceRule &
  RequireExampleRule &
  RequireFileOverviewRule &
  RequireHyphenBeforeParamDescriptionRule &
  RequireJsdocRule &
  RequireParamRule &
  RequireParamDescriptionRule &
  RequireParamNameRule &
  RequireParamTypeRule &
  RequirePropertyRule &
  RequirePropertyDescriptionRule &
  RequirePropertyNameRule &
  RequirePropertyTypeRule &
  RequireReturnsRule &
  RequireReturnsCheckRule &
  RequireReturnsDescriptionRule &
  RequireReturnsTypeRule &
  RequireThrowsRule &
  RequireYieldsRule &
  RequireYieldsCheckRule &
  SortTagsRule &
  TagLinesRule &
  TextEscapingRule &
  ValidTypesRule;
