import type { DefaultRule } from './default';
import type { NamedRule } from './named';
import type { NoUnresolvedRule } from './no-unresolved';

/**
 * All import rules.
 */
export type ImportRules = DefaultRule & NamedRule & NoUnresolvedRule;
