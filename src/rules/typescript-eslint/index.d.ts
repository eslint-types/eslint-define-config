import type { BanTsCommentRule } from './ban-ts-comment';
import type { ExplicitFunctionReturnTypeRule } from './explicit-function-return-type';
import type { InterfaceNamePrefixRule } from './interface-name-prefix';
import type { MemberOrderingRule } from './member-ordering';
import type { NoExplicitAnyRule } from './no-explicit-any';
import type { NoInferrableTypesRule } from './no-inferrable-types';

/**
 * All @typescript-eslint rules.
 */
export type TypeScriptEslintRules = BanTsCommentRule &
  ExplicitFunctionReturnTypeRule &
  InterfaceNamePrefixRule &
  MemberOrderingRule &
  NoExplicitAnyRule &
  NoInferrableTypesRule;
