import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type PreventAbbreviationsOption =
  | []
  | [
      {
        checkProperties?: boolean;
        checkVariables?: boolean;
        checkDefaultAndNamespaceImports?: boolean | string;
        checkShorthandImports?: boolean | string;
        checkShorthandProperties?: boolean;
        checkFilenames?: boolean;
        extendDefaultReplacements?: boolean;
        replacements?: Abbreviations;
        extendDefaultAllowList?: boolean;
        allowList?: BooleanObject;
        ignore?: any[];
      },
    ];
export type Replacements = false | BooleanObject;

export interface Abbreviations {
  [k: string]: Replacements;
}
export interface BooleanObject {
  [k: string]: boolean;
}

/**
 * Options.
 */
export type PreventAbbreviationsOptions = PreventAbbreviationsOption;

/**
 * Prevent abbreviations.
 *
 * @see [prevent-abbreviations](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prevent-abbreviations.md)
 */
export type PreventAbbreviationsRuleConfig =
  RuleConfig<PreventAbbreviationsOptions>;

/**
 * Prevent abbreviations.
 *
 * @see [prevent-abbreviations](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prevent-abbreviations.md)
 */
export interface PreventAbbreviationsRule {
  /**
   * Prevent abbreviations.
   *
   * @see [prevent-abbreviations](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prevent-abbreviations.md)
   */
  'unicorn/prevent-abbreviations': PreventAbbreviationsRuleConfig;
}
