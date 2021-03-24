import { NoDebuggerRule } from './no-debugger';
import { QuotesRule } from './quotes';
import { SemiRule } from './semi';

/**
 *
 */
export type EslintRules = NoDebuggerRule & QuotesRule & SemiRule;
