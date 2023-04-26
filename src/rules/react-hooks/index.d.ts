import type { ExhaustiveDepsRule } from './exhaustive-deps';
import type { RulesOfHooksRule } from './rules-of-hooks';

/**
 * All ReactHooks rules.
 */
export type ReactHooksRules = RulesOfHooksRule & ExhaustiveDepsRule;
