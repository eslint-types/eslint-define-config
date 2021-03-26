import type { CommaDangleRule } from './comma-dangle';
import type { CurlyRule } from './curly';
import type { LinebreakStyleRule } from './linebreak-style';
import type { NoDebuggerRule } from './no-debugger';
import type { QuotesRule } from './quotes';
import type { SemiRule } from './semi';

/**
 * All eslint rules.
 */
export type EslintRules = CommaDangleRule & CurlyRule & LinebreakStyleRule & NoDebuggerRule & QuotesRule & SemiRule;
