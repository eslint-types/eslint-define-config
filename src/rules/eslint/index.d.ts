import type { NoDebuggerRule } from './no-debugger';
import type { QuotesRule } from './quotes';
import type { SemiRule } from './semi';

/**
 * All eslint rules.
 */
export type EslintRules = NoDebuggerRule & QuotesRule & SemiRule;
