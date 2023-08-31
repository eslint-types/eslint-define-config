import type { AlwaysReturnRule } from './always-return.d.ts';
import type { AvoidNewRule } from './avoid-new.d.ts';
import type { CatchOrReturnRule } from './catch-or-return.d.ts';
import type { NoCallbackInPromiseRule } from './no-callback-in-promise.d.ts';
import type { NoMultipleResolvedRule } from './no-multiple-resolved.d.ts';
import type { NoNativeRule } from './no-native.d.ts';
import type { NoNestingRule } from './no-nesting.d.ts';
import type { NoNewStaticsRule } from './no-new-statics.d.ts';
import type { NoPromiseInCallbackRule } from './no-promise-in-callback.d.ts';
import type { NoReturnInFinallyRule } from './no-return-in-finally.d.ts';
import type { NoReturnWrapRule } from './no-return-wrap.d.ts';
import type { ParamNamesRule } from './param-names.d.ts';
import type { PreferAwaitToCallbacksRule } from './prefer-await-to-callbacks.d.ts';
import type { PreferAwaitToThenRule } from './prefer-await-to-then.d.ts';
import type { ValidParamsRule } from './valid-params.d.ts';

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
