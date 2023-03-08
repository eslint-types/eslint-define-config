// Synced to https://github.com/DefinitelyTyped/DefinitelyTyped/blob/042141ce5f77f36df01c344ad09f32feda26c4fd/types/eslint/index.d.ts#L714-L716

/**
 * Rule ordinal severity.
 */
export type Severity = 0 | 1 | 2;

/**
 * Rule severity.
 */
export type RuleLevel = Severity | 'off' | 'warn' | 'error';

/**
 * Rule severity.
 *
 * @alias RuleLevel
 */
export type RuleSeverity = RuleLevel;
