import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 1
 * @maxItems 1
 */
export type RequireDescriptionOption = [
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
    types?: boolean;
    /**
     * Definitions within `Query`, `Mutation`, and `Subscription` root types.
     */
    rootField?: boolean;
    /**
     * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#DirectiveDefinition).
     */
    DirectiveDefinition?: boolean;
    /**
     * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#EnumTypeDefinition).
     */
    EnumTypeDefinition?: boolean;
    /**
     * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#EnumValueDefinition).
     */
    EnumValueDefinition?: boolean;
    /**
     * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#FieldDefinition).
     */
    FieldDefinition?: boolean;
    /**
     * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#InputObjectTypeDefinition).
     */
    InputObjectTypeDefinition?: boolean;
    /**
     * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#InputValueDefinition).
     */
    InputValueDefinition?: boolean;
    /**
     * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#InterfaceTypeDefinition).
     */
    InterfaceTypeDefinition?: boolean;
    /**
     * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#ObjectTypeDefinition).
     */
    ObjectTypeDefinition?: boolean;
    /**
     * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#OperationDefinition).
     * > You must use only comment syntax `#` and not description syntax `"""` or `"`.
     */
    OperationDefinition?: boolean;
    /**
     * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#ScalarTypeDefinition).
     */
    ScalarTypeDefinition?: boolean;
    /**
     * Read more about this kind on [spec.graphql.org](https://spec.graphql.org/October2021/#UnionTypeDefinition).
     */
    UnionTypeDefinition?: boolean;
  },
];

/**
 * Options.
 */
export type RequireDescriptionOptions = RequireDescriptionOption;

/**
 * Enforce descriptions in type definitions and operations.
 *
 * @see [require-description](https://the-guild.dev/graphql/eslint/rules/require-description)
 */
export type RequireDescriptionRuleConfig =
  RuleConfig<RequireDescriptionOptions>;

/**
 * Enforce descriptions in type definitions and operations.
 *
 * @see [require-description](https://the-guild.dev/graphql/eslint/rules/require-description)
 */
export interface RequireDescriptionRule {
  /**
   * Enforce descriptions in type definitions and operations.
   *
   * @see [require-description](https://the-guild.dev/graphql/eslint/rules/require-description)
   */
  '@graphql-eslint/require-description': RequireDescriptionRuleConfig;
}
