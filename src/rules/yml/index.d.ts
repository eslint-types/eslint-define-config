import type { BlockMappingColonIndicatorNewlineRule } from './block-mapping-colon-indicator-newline.d.ts';
import type { BlockMappingQuestionIndicatorNewlineRule } from './block-mapping-question-indicator-newline.d.ts';
import type { BlockMappingRule } from './block-mapping.d.ts';
import type { BlockSequenceHyphenIndicatorNewlineRule } from './block-sequence-hyphen-indicator-newline.d.ts';
import type { BlockSequenceRule } from './block-sequence.d.ts';
import type { FileExtensionRule } from './file-extension.d.ts';
import type { FlowMappingCurlyNewlineRule } from './flow-mapping-curly-newline.d.ts';
import type { FlowMappingCurlySpacingRule } from './flow-mapping-curly-spacing.d.ts';
import type { FlowSequenceBracketNewlineRule } from './flow-sequence-bracket-newline.d.ts';
import type { FlowSequenceBracketSpacingRule } from './flow-sequence-bracket-spacing.d.ts';
import type { IndentRule } from './indent.d.ts';
import type { KeyNameCasingRule } from './key-name-casing.d.ts';
import type { KeySpacingRule } from './key-spacing.d.ts';
import type { NoEmptyDocumentRule } from './no-empty-document.d.ts';
import type { NoEmptyKeyRule } from './no-empty-key.d.ts';
import type { NoEmptyMappingValueRule } from './no-empty-mapping-value.d.ts';
import type { NoEmptySequenceEntryRule } from './no-empty-sequence-entry.d.ts';
import type { NoIrregularWhitespaceRule } from './no-irregular-whitespace.d.ts';
import type { NoMultipleEmptyLinesRule } from './no-multiple-empty-lines.d.ts';
import type { NoTabIndentRule } from './no-tab-indent.d.ts';
import type { NoTrailingZerosRule } from './no-trailing-zeros.d.ts';
import type { PlainScalarRule } from './plain-scalar.d.ts';
import type { QuotesRule } from './quotes.d.ts';
import type { RequireStringKeyRule } from './require-string-key.d.ts';
import type { SortKeysRule } from './sort-keys.d.ts';
import type { SortSequenceValuesRule } from './sort-sequence-values.d.ts';
import type { SpacedCommentRule } from './spaced-comment.d.ts';
import type { VueCustomBlockNoParsingErrorRule } from './vue-custom-block/no-parsing-error.d.ts';

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
