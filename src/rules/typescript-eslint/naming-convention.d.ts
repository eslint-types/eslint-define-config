import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NamingConventionOption = (
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
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
        | 'abstract'
        | 'destructured'
        | 'global'
        | 'exported'
        | 'unused'
        | 'requiresQuotes'
      )[];
      types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'default';
      modifiers?: (
        | 'const'
        | 'readonly'
        | 'static'
        | 'public'
        | 'protected'
        | 'private'
        | 'abstract'
        | 'destructured'
        | 'global'
        | 'exported'
        | 'unused'
        | 'requiresQuotes'
      )[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'variableLike';
      modifiers?: 'unused'[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'variable';
      modifiers?: ('const' | 'destructured' | 'exported' | 'global' | 'unused')[];
      types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'function';
      modifiers?: ('exported' | 'global' | 'unused')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'parameter';
      modifiers?: ('destructured' | 'unused')[];
      types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'memberLike';
      modifiers?: ('abstract' | 'private' | 'protected' | 'public' | 'readonly' | 'requiresQuotes' | 'static')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'classProperty';
      modifiers?: ('abstract' | 'private' | 'protected' | 'public' | 'readonly' | 'requiresQuotes' | 'static')[];
      types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'objectLiteralProperty';
      modifiers?: ('public' | 'requiresQuotes')[];
      types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'typeProperty';
      modifiers?: ('public' | 'readonly' | 'requiresQuotes')[];
      types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'parameterProperty';
      modifiers?: ('private' | 'protected' | 'public' | 'readonly')[];
      types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'property';
      modifiers?: ('abstract' | 'private' | 'protected' | 'public' | 'readonly' | 'requiresQuotes' | 'static')[];
      types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'classMethod';
      modifiers?: ('abstract' | 'private' | 'protected' | 'public' | 'requiresQuotes' | 'static')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'objectLiteralMethod';
      modifiers?: ('public' | 'requiresQuotes')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'typeMethod';
      modifiers?: ('public' | 'requiresQuotes')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'method';
      modifiers?: ('abstract' | 'private' | 'protected' | 'public' | 'requiresQuotes' | 'static')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'accessor';
      modifiers?: ('abstract' | 'private' | 'protected' | 'public' | 'requiresQuotes' | 'static')[];
      types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'enumMember';
      modifiers?: 'requiresQuotes'[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'typeLike';
      modifiers?: ('abstract' | 'exported' | 'unused')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'class';
      modifiers?: ('abstract' | 'exported' | 'unused')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'interface';
      modifiers?: ('exported' | 'unused')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'typeAlias';
      modifiers?: ('exported' | 'unused')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'enum';
      modifiers?: ('exported' | 'unused')[];
    }
  | {
      format:
        | ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')[]
        | null;
      custom?: {
        match: boolean;
        regex: string;
        [k: string]: any;
      };
      leadingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      trailingUnderscore?: 'forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble';
      prefix?: string[];
      suffix?: string[];
      failureMessage?: string;
      filter?:
        | string
        | {
            match: boolean;
            regex: string;
            [k: string]: any;
          };
      selector: 'typeParameter';
      modifiers?: 'unused'[];
    }
)[];

/**
 * Options.
 */
export type NamingConventionOptions = NamingConventionOption;

/**
 * Enforces naming conventions for everything across a codebase.
 *
 * @see [naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/naming-convention.md)
 */
export type NamingConventionRuleConfig = RuleConfig<NamingConventionOptions>;

/**
 * Enforces naming conventions for everything across a codebase.
 *
 * @see [naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/naming-convention.md)
 */
export interface NamingConventionRule {
  /**
   * Enforces naming conventions for everything across a codebase.
   *
   * @see [naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/naming-convention.md)
   */
  '@typescript-eslint/naming-convention': NamingConventionRuleConfig;
}
