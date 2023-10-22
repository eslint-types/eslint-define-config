import type { RuleLevel } from './rule-severity';

// Synced to https://github.com/DefinitelyTyped/DefinitelyTyped/blob/042141ce5f77f36df01c344ad09f32feda26c4fd/types/eslint/helpers.d.ts#L1-L3

export type Prepend<TTuple extends any[], TAddend> = ((
  _: TAddend,
  ..._1: TTuple
) => any) extends (..._: infer Result) => any
  ? Result
  : never;

// Synced to https://github.com/DefinitelyTyped/DefinitelyTyped/blob/042141ce5f77f36df01c344ad09f32feda26c4fd/types/eslint/index.d.ts#L717-L719

/**
 * Rule configuration.
 */
export type RuleLevelAndOptions<TOptions extends any[] = any[]> = Prepend<
  Partial<TOptions>,
  RuleLevel
>;

export type RuleEntry<TOptions extends any[] = any[]> =
  | RuleLevel
  | RuleLevelAndOptions<TOptions>;

/**
 * Rule configuration.
 *
 * @alias RuleEntry
 */
export type RuleConfig<TOptions extends any[] = any[]> = RuleEntry<TOptions>;
