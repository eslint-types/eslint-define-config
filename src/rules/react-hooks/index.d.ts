import type { ExhaustiveDepsRule } from './exhaustive-deps.d.ts';
import type { RulesOfHooksRule } from './rules-of-hooks.d.ts';

/**
 * All ReactHooks rules.
 */
export type ReactHooksRules = RulesOfHooksRule & ExhaustiveDepsRule;
