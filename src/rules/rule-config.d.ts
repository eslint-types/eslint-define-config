import type { RuleLevel } from './rule-severity';

// Synced to https://github.com/DefinitelyTyped/DefinitelyTyped/blob/042141ce5f77f36df01c344ad09f32feda26c4fd/types/eslint/helpers.d.ts#L1-L3

export type Prepend<Tuple extends any[], Addend> = ((
  _: Addend,
  ..._1: Tuple
) => any) extends (..._: infer Result) => any
  ? Result
  : never;

// Synced to https://github.com/DefinitelyTyped/DefinitelyTyped/blob/042141ce5f77f36df01c344ad09f32feda26c4fd/types/eslint/index.d.ts#L717-L719

/**
 * Rule configuration.
 */
export type RuleLevelAndOptions<Options extends any[] = any[]> = Prepend<
  Partial<Options>,
  RuleLevel
>;

export type RuleEntry<Options extends any[] = any[]> =
  | RuleLevel
  | RuleLevelAndOptions<Options>;

/**
 * Rule configuration.
 *
 * @alias RuleEntry
 */
export type RuleConfig<Options extends any[] = any[]> = RuleEntry<Options>;
