import type { DisableEnablePairRule } from './disable-enable-pair';
import type { NoAggregatingEnableRule } from './no-aggregating-enable';
import type { NoDuplicateDisableRule } from './no-duplicate-disable';
import type { NoRestrictedDisableRule } from './no-restricted-disable';
import type { NoUnlimitedDisableRule } from './no-unlimited-disable';
import type { NoUnusedDisableRule } from './no-unused-disable';
import type { NoUnusedEnableRule } from './no-unused-enable';
import type { NoUseRule } from './no-use';
import type { RequireDescriptionRule } from './require-description';

/**
 * All EslintComments rules.
 */
export type EslintCommentsRules = DisableEnablePairRule &
  NoAggregatingEnableRule &
  NoDuplicateDisableRule &
  NoRestrictedDisableRule &
  NoUnlimitedDisableRule &
  NoUnusedDisableRule &
  NoUnusedEnableRule &
  NoUseRule &
  RequireDescriptionRule;
