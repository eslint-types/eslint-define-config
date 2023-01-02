import type { AlwaysReturnRule } from './always-return';
import type { AvoidNewRule } from './avoid-new';
import type { CatchOrReturnRule } from './catch-or-return';
import type { NoCallbackInPromiseRule } from './no-callback-in-promise';
import type { NoMultipleResolvedRule } from './no-multiple-resolved';
import type { NoNativeRule } from './no-native';
import type { NoNestingRule } from './no-nesting';
import type { NoNewStaticsRule } from './no-new-statics';
import type { NoPromiseInCallbackRule } from './no-promise-in-callback';
import type { NoReturnInFinallyRule } from './no-return-in-finally';
import type { NoReturnWrapRule } from './no-return-wrap';
import type { ParamNamesRule } from './param-names';
import type { PreferAwaitToCallbacksRule } from './prefer-await-to-callbacks';
import type { PreferAwaitToThenRule } from './prefer-await-to-then';
import type { ValidParamsRule } from './valid-params';

/**
 * All Promise rules.
 */
export type PromiseRules = ParamNamesRule &
  NoReturnWrapRule &
  AlwaysReturnRule &
  CatchOrReturnRule &
  PreferAwaitToCallbacksRule &
  PreferAwaitToThenRule &
  NoNativeRule &
  NoCallbackInPromiseRule &
  NoPromiseInCallbackRule &
  NoNestingRule &
  AvoidNewRule &
  NoNewStaticsRule &
  NoReturnInFinallyRule &
  ValidParamsRule &
  NoMultipleResolvedRule;
