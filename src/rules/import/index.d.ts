import type { DefaultRule } from './default';
import type { NoUnresolvedRule } from './no-unresolved';

/**
 * All import rules.
 */
export type ImportRules = DefaultRule & NoUnresolvedRule;
