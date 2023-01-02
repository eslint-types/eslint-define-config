import type { ArrayBracketNewlineRule } from './array-bracket-newline';
import type { ArrayBracketSpacingRule } from './array-bracket-spacing';
import type { ArrayElementNewlineRule } from './array-element-newline';
import type { AutoRule } from './auto';
import type { CommaDangleRule } from './comma-dangle';
import type { CommaStyleRule } from './comma-style';
import type { IndentRule } from './indent';
import type { KeyNameCasingRule } from './key-name-casing';
import type { KeySpacingRule } from './key-spacing';
import type { NoBigintLiteralsRule } from './no-bigint-literals';
import type { NoBinaryExpressionRule } from './no-binary-expression';
import type { NoBinaryNumericLiteralsRule } from './no-binary-numeric-literals';
import type { NoCommentsRule } from './no-comments';
import type { NoDupeKeysRule } from './no-dupe-keys';
import type { NoEscapeSequenceInIdentifierRule } from './no-escape-sequence-in-identifier';
import type { NoFloatingDecimalRule } from './no-floating-decimal';
import type { NoHexadecimalNumericLiteralsRule } from './no-hexadecimal-numeric-literals';
import type { NoInfinityRule } from './no-infinity';
import type { NoIrregularWhitespaceRule } from './no-irregular-whitespace';
import type { NoMultiStrRule } from './no-multi-str';
import type { NoNanRule } from './no-nan';
import type { NoNumberPropsRule } from './no-number-props';
import type { NoNumericSeparatorsRule } from './no-numeric-separators';
import type { NoOctalRule } from './no-octal';
import type { NoOctalEscapeRule } from './no-octal-escape';
import type { NoOctalNumericLiteralsRule } from './no-octal-numeric-literals';
import type { NoParenthesizedRule } from './no-parenthesized';
import type { NoPlusSignRule } from './no-plus-sign';
import type { NoRegexpLiteralsRule } from './no-regexp-literals';
import type { NoSparseArraysRule } from './no-sparse-arrays';
import type { NoTemplateLiteralsRule } from './no-template-literals';
import type { NoUndefinedValueRule } from './no-undefined-value';
import type { NoUnicodeCodepointEscapesRule } from './no-unicode-codepoint-escapes';
import type { NoUselessEscapeRule } from './no-useless-escape';
import type { ObjectCurlyNewlineRule } from './object-curly-newline';
import type { ObjectCurlySpacingRule } from './object-curly-spacing';
import type { ObjectPropertyNewlineRule } from './object-property-newline';
import type { QuotePropsRule } from './quote-props';
import type { QuotesRule } from './quotes';
import type { SortArrayValuesRule } from './sort-array-values';
import type { SortKeysRule } from './sort-keys';
import type { SpaceUnaryOpsRule } from './space-unary-ops';
import type { ValidJsonNumberRule } from './valid-json-number';
import type { VueCustomBlockNoParsingErrorRule } from './vue-custom-block/no-parsing-error';

/**
 * All Jsonc rules.
 */
export type JsoncRules = ArrayBracketNewlineRule &
  ArrayBracketSpacingRule &
  ArrayElementNewlineRule &
  AutoRule &
  CommaDangleRule &
  CommaStyleRule &
  IndentRule &
  KeyNameCasingRule &
  KeySpacingRule &
  NoBigintLiteralsRule &
  NoBinaryExpressionRule &
  NoBinaryNumericLiteralsRule &
  NoCommentsRule &
  NoDupeKeysRule &
  NoEscapeSequenceInIdentifierRule &
  NoFloatingDecimalRule &
  NoHexadecimalNumericLiteralsRule &
  NoInfinityRule &
  NoIrregularWhitespaceRule &
  NoMultiStrRule &
  NoNanRule &
  NoNumberPropsRule &
  NoNumericSeparatorsRule &
  NoOctalEscapeRule &
  NoOctalNumericLiteralsRule &
  NoOctalRule &
  NoParenthesizedRule &
  NoPlusSignRule &
  NoRegexpLiteralsRule &
  NoSparseArraysRule &
  NoTemplateLiteralsRule &
  NoUndefinedValueRule &
  NoUnicodeCodepointEscapesRule &
  NoUselessEscapeRule &
  ObjectCurlyNewlineRule &
  ObjectCurlySpacingRule &
  ObjectPropertyNewlineRule &
  QuotePropsRule &
  QuotesRule &
  SortArrayValuesRule &
  SortKeysRule &
  SpaceUnaryOpsRule &
  ValidJsonNumberRule &
  VueCustomBlockNoParsingErrorRule;
