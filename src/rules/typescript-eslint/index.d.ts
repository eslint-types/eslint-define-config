import type { AdjacentOverloadSignaturesRule } from './adjacent-overload-signatures';
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
import type { PreferReadonlyRule } from './prefer-readonly';
import type { RestrictTemplateExpressionsRule } from './restrict-template-expressions';
import type { TypedefRule } from './typedef';

/**
 * All @typescript-eslint rules.
 */
export type TypeScriptEslintRules = AdjacentOverloadSignaturesRule &
  BanTsCommentRule &
  ExplicitFunctionReturnTypeRule &
  InterfaceNamePrefixRule &
  MemberOrderingRule &
  NoExplicitAnyRule &
  NoInferrableTypesRule &
  NoParameterPropertiesRule &
  NoUnsafeAssignmentRule &
  NoUnusedVarsRule &
  PreferNullishCoalescingRule &
  PreferOptionalChainRule &
  PreferReadonlyRule &
  RestrictTemplateExpressionsRule &
  TypedefRule;
