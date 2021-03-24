import type { RuleSeverity } from './rule-severity';

/**
 *
 */
export type RuleConfig<Options extends unknown[] = unknown[]> = RuleSeverity | [RuleSeverity, ...Options];
