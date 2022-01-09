import type { RuleSeverity } from './rule-severity';

/**
 * Rule configuration.
 */
export type RuleConfig<Options extends unknown[] = unknown[]> =
  | RuleSeverity
  | [RuleSeverity, ...Options];
