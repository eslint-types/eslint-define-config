import type { BanTsCommentRule } from './ban-ts-comment';
import type { ExplicitFunctionReturnTypeRule } from './explicit-function-return-type';
import type { InterfaceNamePrefixRule } from './interface-name-prefix';

/**
 * All @typescript-eslint rules.
 */
export type TypeScriptEslintRules = BanTsCommentRule & ExplicitFunctionReturnTypeRule & InterfaceNamePrefixRule;
