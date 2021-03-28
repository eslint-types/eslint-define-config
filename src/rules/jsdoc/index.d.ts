import type { MatchDescriptionRule } from './match-description';
import type { NoTypesRule } from './no-types';
import type { RequireJsdocRule } from './require-jsdoc';
import type { RequireParamTypeRule } from './require-param-type';
import type { RequireReturnsTypeRule } from './require-returns-type';

/**
 * All jsdoc rules.
 */
export type JSDocRules = MatchDescriptionRule &
  NoTypesRule &
  RequireJsdocRule &
  RequireParamTypeRule &
  RequireReturnsTypeRule;
