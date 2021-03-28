import type { MatchDescriptionRule } from './match-description';
import type { NoTypesRule } from './no-types';

/**
 * All jsdoc rules.
 */
export type JSDocRules = MatchDescriptionRule & NoTypesRule;
