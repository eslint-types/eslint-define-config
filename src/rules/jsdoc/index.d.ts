import type { CheckAccessRule } from './check-access';
import type { CheckAlignmentRule } from './check-alignment';
import type { CheckExamplesRule } from './check-examples';
import type { CheckIndentationRule } from './check-indentation';
import type { CheckLineAlignmentRule } from './check-line-alignment';
import type { CheckParamNamesRule } from './check-param-names';
import type { CheckPropertyNamesRule } from './check-property-names';
import type { CheckSyntaxRule } from './check-syntax';
import type { CheckTagNamesRule } from './check-tag-names';
import type { CheckTypesRule } from './check-types';
import type { CheckValuesRule } from './check-values';
import type { EmptyTagsRule } from './empty-tags';
import type { ImplementsOnClassesRule } from './implements-on-classes';
import type { MatchDescriptionRule } from './match-description';
import type { MatchNameRule } from './match-name';
import type { MultilineBlocksRule } from './multiline-blocks';
import type { NewlineAfterDescriptionRule } from './newline-after-description';
import type { NoBadBlocksRule } from './no-bad-blocks';
import type { NoDefaultsRule } from './no-defaults';
import type { NoMissingSyntaxRule } from './no-missing-syntax';
import type { NoMultiAsterisksRule } from './no-multi-asterisks';
import type { NoRestrictedSyntaxRule } from './no-restricted-syntax';
import type { NoTypesRule } from './no-types';
import type { NoUndefinedTypesRule } from './no-undefined-types';
import type { RequireAsteriskPrefixRule } from './require-asterisk-prefix';
import type { RequireDescriptionRule } from './require-description';
import type { RequireDescriptionCompleteSentenceRule } from './require-description-complete-sentence';
import type { RequireExampleRule } from './require-example';
import type { RequireFileOverviewRule } from './require-file-overview';
import type { RequireHyphenBeforeParamDescriptionRule } from './require-hyphen-before-param-description';
import type { RequireJsdocRule } from './require-jsdoc';
import type { RequireParamRule } from './require-param';
import type { RequireParamDescriptionRule } from './require-param-description';
import type { RequireParamNameRule } from './require-param-name';
import type { RequireParamTypeRule } from './require-param-type';
import type { RequirePropertyRule } from './require-property';
import type { RequirePropertyDescriptionRule } from './require-property-description';
import type { RequirePropertyNameRule } from './require-property-name';
import type { RequirePropertyTypeRule } from './require-property-type';
import type { RequireReturnsRule } from './require-returns';
import type { RequireReturnsCheckRule } from './require-returns-check';
import type { RequireReturnsDescriptionRule } from './require-returns-description';
import type { RequireReturnsTypeRule } from './require-returns-type';
import type { RequireThrowsRule } from './require-throws';
import type { RequireYieldsRule } from './require-yields';
import type { RequireYieldsCheckRule } from './require-yields-check';
import type { TagLinesRule } from './tag-lines';
import type { ValidTypesRule } from './valid-types';

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
  MatchDescriptionRule &
  MatchNameRule &
  MultilineBlocksRule &
  NewlineAfterDescriptionRule &
  NoBadBlocksRule &
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
  TagLinesRule &
  ValidTypesRule;
