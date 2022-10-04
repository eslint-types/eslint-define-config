import type { parse } from '@babel/parser';
import type { MaybePromise } from '../../../contracts';

export type Ast = ReturnType<typeof parse>;

/**
 * The result returned by the `patch` method of a module.
 */
export type ModulePatchResult = MaybePromise<{
  hasPatched: boolean;
  ast: Ast;
}>;

/**
 * Type of the report returned by the `patch` method of the `RulePatcher` class.
 */
export type RulePatcherReport = {
  name: string;
  hasPatched: boolean;
}[];

/**
 * Module contract that can be registered withing the RulePatcher.
 */
export interface RulePatcherModule {
  name: string;
  patch: (parameters: { ast: Ast }) => ModulePatchResult;
}
