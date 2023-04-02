import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @maxItems 1
 */
export type NamingConventionOption =
  | []
  | [
      {
        /**
         * Includes:
         * - `ObjectTypeDefinition`
         * - `InterfaceTypeDefinition`
         * - `EnumTypeDefinition`
         * - `ScalarTypeDefinition`
         * - `InputObjectTypeDefinition`
         * - `UnionTypeDefinition`
         */
        types?: AsString | AsObject;
        /**
         * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#Argument).
         */
        Argument?: AsString | AsObject;
        /**
         * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#DirectiveDefinition).
         */
        DirectiveDefinition?: AsString | AsObject;
        /**
         * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#EnumTypeDefinition).
         */
        EnumTypeDefinition?: AsString | AsObject;
        /**
         * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#EnumValueDefinition).
         */
        EnumValueDefinition?: AsString | AsObject;
        /**
         * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#FieldDefinition).
         */
        FieldDefinition?: AsString | AsObject;
        /**
         * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#FragmentDefinition).
         */
        FragmentDefinition?: AsString | AsObject;
        /**
         * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#InputObjectTypeDefinition).
         */
        InputObjectTypeDefinition?: AsString | AsObject;
        /**
         * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#InputValueDefinition).
         */
        InputValueDefinition?: AsString | AsObject;
        /**
         * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#InterfaceTypeDefinition).
         */
        InterfaceTypeDefinition?: AsString | AsObject;
        /**
         * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#ObjectTypeDefinition).
         */
        ObjectTypeDefinition?: AsString | AsObject;
        /**
         * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#OperationDefinition).
         */
        OperationDefinition?: AsString | AsObject;
        /**
         * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#ScalarTypeDefinition).
         */
        ScalarTypeDefinition?: AsString | AsObject;
        /**
         * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#UnionTypeDefinition).
         */
        UnionTypeDefinition?: AsString | AsObject;
        /**
         * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#VariableDefinition).
         */
        VariableDefinition?: AsString | AsObject;
        allowLeadingUnderscore?: boolean;
        allowTrailingUnderscore?: boolean;
      } & {
        [k: string]: AsString | AsObject;
      },
    ];
/**
 * One of: `camelCase`, `PascalCase`, `snake_case`, `UPPER_CASE`
 */
export type AsString = 'camelCase' | 'PascalCase' | 'snake_case' | 'UPPER_CASE';

export interface AsObject {
  style?: 'camelCase' | 'PascalCase' | 'snake_case' | 'UPPER_CASE';
  prefix?: string;
  suffix?: string;
  /**
   * @minItems 1
   */
  forbiddenPrefixes?: [string, ...string[]];
  /**
   * @minItems 1
   */
  forbiddenSuffixes?: [string, ...string[]];
  /**
   * @minItems 1
   */
  requiredPrefixes?: [string, ...string[]];
  /**
   * @minItems 1
   */
  requiredSuffixes?: [string, ...string[]];
  /**
   * Option to skip validation of some words, e.g. acronyms
   */
  ignorePattern?: string;
}

/**
 * Options.
 */
export type NamingConventionOptions = NamingConventionOption;

/**
 * Require names to follow specified conventions.
 *
 * @see [naming-convention](https://the-guild.dev/graphql/eslint/rules/naming-convention)
 */
export type NamingConventionRuleConfig = RuleConfig<NamingConventionOptions>;

/**
 * Require names to follow specified conventions.
 *
 * @see [naming-convention](https://the-guild.dev/graphql/eslint/rules/naming-convention)
 */
export interface NamingConventionRule {
  /**
   * Require names to follow specified conventions.
   *
   * @see [naming-convention](https://the-guild.dev/graphql/eslint/rules/naming-convention)
   */
  '@graphql-eslint/naming-convention': NamingConventionRuleConfig;
}
