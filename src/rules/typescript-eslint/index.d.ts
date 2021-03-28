import type { BanTsCommentRule } from './ban-ts-comment';
import type { ExplicitFunctionReturnTypeRule } from './explicit-function-return-type';
import type { InterfaceNamePrefixRule } from './interface-name-prefix';
import type { MemberOrderingRule } from './member-ordering';
import type { NoExplicitAnyRule } from './no-explicit-any';
import type { NoInferrableTypesRule } from './no-inferrable-types';
import type { NoParameterPropertiesRule } from './no-parameter-properties';
import type { NoUnsafeAssignmentRule } from './no-unsafe-assignment';
import type { NoUnusedVarsRule } from './no-unused-vars';
import type { PreferNullishCoalescingRule } from './prefer-nullish-coalescing';
import type { PreferOptionalChainRule } from './prefer-optional-chain';

/**
 * All @typescript-eslint rules.
 */
export type TypeScriptEslintRules = BanTsCommentRule &
  ExplicitFunctionReturnTypeRule &
  InterfaceNamePrefixRule &
  MemberOrderingRule &
  NoExplicitAnyRule &
  NoInferrableTypesRule &
  NoParameterPropertiesRule &
  NoUnsafeAssignmentRule &
  NoUnusedVarsRule &
  PreferNullishCoalescingRule &
  PreferOptionalChainRule;
