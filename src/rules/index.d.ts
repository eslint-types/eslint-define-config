import type { EslintRules } from './eslint';
import type { RuleConfig } from './rule-config';

/**
 * This is a special exported interface for other packages to declare
 * additional types that should bail out for eslint rules. For example
 * `@typescript-eslint/eslint-plugin` can declare it like so in its `d.ts`:
 *
 * ```ts
 * declare module 'eslint-define-config' {
 *   export interface CustomRuleOptions {
 *     /**
 *      * Require consistently using either `T[]` or `Array<T>` for arrays.
 *      *
 *      * \@see [array-type](https://typescript-eslint.io/rules/array-type)
 *      *\/
 *     '@typescript-eslint/array-type': [
 *       {
 *         default?: 'array' | 'generic' | 'array-simple';
 *         readonly?: 'array' | 'generic' | 'array-simple';
 *       },
 *     ];
 *
 *     // ... more Rules
 *   }
 * }
 * ```
 */
export interface CustomRuleOptions {}

type CustomRules = {
  [TRuleName in keyof CustomRuleOptions]: RuleConfig<
    CustomRuleOptions[TRuleName]
  >;
};

/**
 * Rules.
 *
 * @see [Rules](https://eslint.org/docs/user-guide/configuring/rules)
 */
export interface Rules
  extends CustomRules,
    EslintRules,
    Record<string, RuleConfig> {}
