import type { BanTsCommentRule } from './ban-ts-comment';
import type { ExplicitFunctionReturnTypeRule } from './explicit-function-return-type';
import type { InterfaceNamePrefixRule } from './interface-name-prefix';
import type { MemberOrderingRule } from './member-ordering';

/**
 * All @typescript-eslint rules.
 */
export type TypeScriptEslintRules = BanTsCommentRule &
  ExplicitFunctionReturnTypeRule &
  InterfaceNamePrefixRule &
  MemberOrderingRule;
