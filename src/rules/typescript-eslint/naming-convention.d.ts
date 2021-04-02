import type { RuleConfig } from '../rule-config';

// TODO: Define @typescript-eslint/naming-convention option.

/**
 * Option.
 */
// export type NamingConventionOption = {
//   // format options
//   format: ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[] | null;
//   custom?: {
//     regex: string;
//     match: boolean;
//   };
//   leadingUnderscore?: 'forbid' | 'require' | 'requireDouble' | 'allow' | 'allowDouble' | 'allowSingleOrDouble';
//   trailingUnderscore?: 'forbid' | 'require' | 'requireDouble' | 'allow' | 'allowDouble' | 'allowSingleOrDouble';
//   prefix?: string[];
//   suffix?: string[];

//   // selector options
//   selector: Selector | Selector[];
//   filter?:
//     | string
//     | {
//         regex: string;
//         match: boolean;
//       };
//   // the allowed values for these are dependent on the selector - see below
//   modifiers?: Modifiers<Selector>[];
//   types?: Types<Selector>[];
// }[];

/**
 * Options.
 */
// export type NamingConventionOptions = [NamingConventionOption?];

/**
 * Enforces naming conventions for everything across a codebase.
 *
 * @see [naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md)
 */
export type NamingConventionRuleConfig = RuleConfig; //<NamingConventionOptions>;

/**
 * Enforces naming conventions for everything across a codebase.
 *
 * @see [naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md)
 */
export interface NamingConventionRule {
  /**
   * Enforces naming conventions for everything across a codebase.
   *
   * @see [naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md)
   */
  '@typescript-eslint/naming-convention': NamingConventionRuleConfig;
}
