import type { CommaDangleRule } from './comma-dangle';
import type { CurlyRule } from './curly';
import type { GroupedAccessorPairsRule } from './grouped-accessor-pairs';
import type { IdDenylistRule } from './id-denylist';
import type { LinebreakStyleRule } from './linebreak-style';
import type { MaxClassesPerFileRule } from './max-classes-per-file';
import type { MaxLenRule } from './max-len';
import type { MaxLinesRule } from './max-lines';
import type { NoCaseDeclarationsRule } from './no-case-declarations';
import type { NoConstantConditionRule } from './no-constant-condition';
import type { NoDebuggerRule } from './no-debugger';
import type { NoUnusedExpressionsRule } from './no-unused-expressions';
import type { NoUselessConcatRule } from './no-useless-concat';
import type { PreferTemplateRule } from './prefer-template';
import type { QuotePropsRule } from './quote-props';
import type { QuotesRule } from './quotes';
import type { SemiRule } from './semi';

/**
 * All eslint rules.
 */
export type EslintRules = CommaDangleRule &
  CurlyRule &
  GroupedAccessorPairsRule &
  IdDenylistRule &
  LinebreakStyleRule &
  MaxClassesPerFileRule &
  MaxLenRule &
  MaxLinesRule &
  NoCaseDeclarationsRule &
  NoConstantConditionRule &
  NoDebuggerRule &
  NoUnusedExpressionsRule &
  NoUselessConcatRule &
  PreferTemplateRule &
  QuotePropsRule &
  QuotesRule &
  SemiRule;
