import type { DisableEnablePairRule } from './disable-enable-pair.d.ts';
import type { NoAggregatingEnableRule } from './no-aggregating-enable.d.ts';
import type { NoDuplicateDisableRule } from './no-duplicate-disable.d.ts';
import type { NoRestrictedDisableRule } from './no-restricted-disable.d.ts';
import type { NoUnlimitedDisableRule } from './no-unlimited-disable.d.ts';
import type { NoUnusedDisableRule } from './no-unused-disable.d.ts';
import type { NoUnusedEnableRule } from './no-unused-enable.d.ts';
import type { NoUseRule } from './no-use.d.ts';
import type { RequireDescriptionRule } from './require-description.d.ts';

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
