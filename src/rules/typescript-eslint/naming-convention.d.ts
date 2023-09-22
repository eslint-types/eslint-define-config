import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type FormatOptionsConfig = PredefinedFormats[] | null;
export type PredefinedFormats =
  | 'camelCase'
  | 'strictCamelCase'
  | 'PascalCase'
  | 'StrictPascalCase'
  | 'snake_case'
  | 'UPPER_CASE';
export type UnderscoreOptions =
  | 'forbid'
  | 'allow'
  | 'require'
  | 'requireDouble'
  | 'allowDouble'
  | 'allowSingleOrDouble';
export type PrefixSuffixConfig = string[];
export type TypeModifiers =
  | 'boolean'
  | 'string'
  | 'number'
  | 'function'
  | 'array';
export type NamingConventionOption = (
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: (
        | 'default'
        | 'variableLike'
        | 'memberLike'
        | 'typeLike'
        | 'method'
        | 'property'
        | 'variable'
        | 'function'
        | 'parameter'
        | 'parameterProperty'
        | 'accessor'
        | 'enumMember'
        | 'classMethod'
        | 'objectLiteralMethod'
        | 'typeMethod'
        | 'classProperty'
        | 'objectLiteralProperty'
        | 'typeProperty'
        | 'class'
        | 'interface'
        | 'typeAlias'
        | 'enum'
        | 'typeParameter'
      )[];
      modifiers?: (
        | 'const'
        | 'readonly'
        | 'static'
        | 'public'
        | 'protected'
        | 'private'
        | '#private'
        | 'abstract'
        | 'destructured'
        | 'global'
        | 'exported'
        | 'unused'
        | 'requiresQuotes'
        | 'override'
        | 'async'
      )[];
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'default';
      modifiers?: (
        | 'const'
        | 'readonly'
        | 'static'
        | 'public'
        | 'protected'
        | 'private'
        | '#private'
        | 'abstract'
        | 'destructured'
        | 'global'
        | 'exported'
        | 'unused'
        | 'requiresQuotes'
        | 'override'
        | 'async'
      )[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'variableLike';
      modifiers?: ('unused' | 'async')[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'variable';
      modifiers?: (
        | 'const'
        | 'destructured'
        | 'exported'
        | 'global'
        | 'unused'
        | 'async'
      )[];
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'function';
      modifiers?: ('exported' | 'global' | 'unused' | 'async')[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'parameter';
      modifiers?: ('destructured' | 'unused')[];
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'memberLike';
      modifiers?: (
        | 'abstract'
        | 'private'
        | '#private'
        | 'protected'
        | 'public'
        | 'readonly'
        | 'requiresQuotes'
        | 'static'
        | 'override'
        | 'async'
      )[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'classProperty';
      modifiers?: (
        | 'abstract'
        | 'private'
        | '#private'
        | 'protected'
        | 'public'
        | 'readonly'
        | 'requiresQuotes'
        | 'static'
        | 'override'
      )[];
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'objectLiteralProperty';
      modifiers?: ('public' | 'requiresQuotes')[];
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'typeProperty';
      modifiers?: ('public' | 'readonly' | 'requiresQuotes')[];
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'parameterProperty';
      modifiers?: ('private' | 'protected' | 'public' | 'readonly')[];
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'property';
      modifiers?: (
        | 'abstract'
        | 'private'
        | '#private'
        | 'protected'
        | 'public'
        | 'readonly'
        | 'requiresQuotes'
        | 'static'
        | 'override'
        | 'async'
      )[];
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'classMethod';
      modifiers?: (
        | 'abstract'
        | 'private'
        | '#private'
        | 'protected'
        | 'public'
        | 'requiresQuotes'
        | 'static'
        | 'override'
        | 'async'
      )[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'objectLiteralMethod';
      modifiers?: ('public' | 'requiresQuotes' | 'async')[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'typeMethod';
      modifiers?: ('public' | 'requiresQuotes')[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'method';
      modifiers?: (
        | 'abstract'
        | 'private'
        | '#private'
        | 'protected'
        | 'public'
        | 'requiresQuotes'
        | 'static'
        | 'override'
        | 'async'
      )[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'accessor';
      modifiers?: (
        | 'abstract'
        | 'private'
        | 'protected'
        | 'public'
        | 'requiresQuotes'
        | 'static'
        | 'override'
      )[];
      types?: TypeModifiers[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'enumMember';
      modifiers?: 'requiresQuotes'[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'typeLike';
      modifiers?: ('abstract' | 'exported' | 'unused')[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'class';
      modifiers?: ('abstract' | 'exported' | 'unused')[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'interface';
      modifiers?: ('exported' | 'unused')[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'typeAlias';
      modifiers?: ('exported' | 'unused')[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'enum';
      modifiers?: ('exported' | 'unused')[];
    }
  | {
      format: FormatOptionsConfig;
      custom?: MatchRegexConfig;
      leadingUnderscore?: UnderscoreOptions;
      trailingUnderscore?: UnderscoreOptions;
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      failureMessage?: string;
      filter?: string | MatchRegexConfig;
      selector: 'typeParameter';
      modifiers?: 'unused'[];
    }
)[];

export interface MatchRegexConfig {
  match: boolean;
  regex: string;
}

/**
 * Options.
 */
export type NamingConventionOptions = NamingConventionOption;

/**
 * Enforce naming conventions for everything across a codebase.
 *
 * @see [naming-convention](https://typescript-eslint.io/rules/naming-convention)
 */
export type NamingConventionRuleConfig = RuleConfig<NamingConventionOptions>;

/**
 * Enforce naming conventions for everything across a codebase.
 *
 * @see [naming-convention](https://typescript-eslint.io/rules/naming-convention)
 */
export interface NamingConventionRule {
  /**
   * Enforce naming conventions for everything across a codebase.
   *
   * @see [naming-convention](https://typescript-eslint.io/rules/naming-convention)
   */
  '@typescript-eslint/naming-convention': NamingConventionRuleConfig;
}
