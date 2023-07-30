import type { BlockMappingRule } from './block-mapping';
import type { BlockMappingColonIndicatorNewlineRule } from './block-mapping-colon-indicator-newline';
import type { BlockMappingQuestionIndicatorNewlineRule } from './block-mapping-question-indicator-newline';
import type { BlockSequenceRule } from './block-sequence';
import type { BlockSequenceHyphenIndicatorNewlineRule } from './block-sequence-hyphen-indicator-newline';
import type { FileExtensionRule } from './file-extension';
import type { FlowMappingCurlyNewlineRule } from './flow-mapping-curly-newline';
import type { FlowMappingCurlySpacingRule } from './flow-mapping-curly-spacing';
import type { FlowSequenceBracketNewlineRule } from './flow-sequence-bracket-newline';
import type { FlowSequenceBracketSpacingRule } from './flow-sequence-bracket-spacing';
import type { IndentRule } from './indent';
import type { KeyNameCasingRule } from './key-name-casing';
import type { KeySpacingRule } from './key-spacing';
import type { NoEmptyDocumentRule } from './no-empty-document';
import type { NoEmptyKeyRule } from './no-empty-key';
import type { NoEmptyMappingValueRule } from './no-empty-mapping-value';
import type { NoEmptySequenceEntryRule } from './no-empty-sequence-entry';
import type { NoIrregularWhitespaceRule } from './no-irregular-whitespace';
import type { NoMultipleEmptyLinesRule } from './no-multiple-empty-lines';
import type { NoTabIndentRule } from './no-tab-indent';
import type { NoTrailingZerosRule } from './no-trailing-zeros';
import type { PlainScalarRule } from './plain-scalar';
import type { QuotesRule } from './quotes';
import type { RequireStringKeyRule } from './require-string-key';
import type { SortKeysRule } from './sort-keys';
import type { SortSequenceValuesRule } from './sort-sequence-values';
import type { SpacedCommentRule } from './spaced-comment';
import type { VueCustomBlockNoParsingErrorRule } from './vue-custom-block/no-parsing-error';

/**
 * All Yml rules.
 */
export type YmlRules = BlockMappingColonIndicatorNewlineRule &
  BlockMappingQuestionIndicatorNewlineRule &
  BlockMappingRule &
  BlockSequenceHyphenIndicatorNewlineRule &
  BlockSequenceRule &
  FileExtensionRule &
  FlowMappingCurlyNewlineRule &
  FlowMappingCurlySpacingRule &
  FlowSequenceBracketNewlineRule &
  FlowSequenceBracketSpacingRule &
  IndentRule &
  KeyNameCasingRule &
  KeySpacingRule &
  NoEmptyDocumentRule &
  NoEmptyKeyRule &
  NoEmptyMappingValueRule &
  NoEmptySequenceEntryRule &
  NoIrregularWhitespaceRule &
  NoMultipleEmptyLinesRule &
  NoTabIndentRule &
  NoTrailingZerosRule &
  PlainScalarRule &
  QuotesRule &
  RequireStringKeyRule &
  SortKeysRule &
  SortSequenceValuesRule &
  SpacedCommentRule &
  VueCustomBlockNoParsingErrorRule;
