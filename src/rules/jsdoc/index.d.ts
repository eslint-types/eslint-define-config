import type { MatchDescriptionRule } from './match-description';
import type { NoTypesRule } from './no-types';
import type { RequireJsdocRule } from './require-jsdoc';

/**
 * All jsdoc rules.
 */
export type JSDocRules = MatchDescriptionRule & NoTypesRule & RequireJsdocRule;
