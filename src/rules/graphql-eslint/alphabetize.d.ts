import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 1
 * @maxItems 1
 */
export type AlphabetizeOption = [
  {
    /**
     * Fields of `type`, `interface`, and `input`.
     *
     * @minItems 1
     */
    fields?: [
      (
        | 'ObjectTypeDefinition'
        | 'InterfaceTypeDefinition'
        | 'InputObjectTypeDefinition'
      ),
      ...(
        | 'ObjectTypeDefinition'
        | 'InterfaceTypeDefinition'
        | 'InputObjectTypeDefinition'
      )[],
    ];
    /**
     * Values of `enum`.
     *
     * @minItems 1
     */
    values?: ['EnumTypeDefinition', ...'EnumTypeDefinition'[]];
    /**
     * Selections of `fragment` and operations `query`, `mutation` and `subscription`.
     *
     * @minItems 1
     */
    selections?: [
      'OperationDefinition' | 'FragmentDefinition',
      ...('OperationDefinition' | 'FragmentDefinition')[],
    ];
    /**
     * Variables of operations `query`, `mutation` and `subscription`.
     *
     * @minItems 1
     */
    variables?: ['OperationDefinition', ...'OperationDefinition'[]];
    /**
     * Arguments of fields and directives.
     *
     * @minItems 1
     */
    arguments?: [
      'FieldDefinition' | 'Field' | 'DirectiveDefinition' | 'Directive',
      ...('FieldDefinition' | 'Field' | 'DirectiveDefinition' | 'Directive')[],
    ];
    /**
     * Definitions – `type`, `interface`, `enum`, `scalar`, `input`, `union` and `directive`.
     */
    definitions?: boolean;
    /**
     * Custom order group. Example: `['id', '*', 'createdAt', 'updatedAt']` where `*` says for everything else.
     *
     * @minItems 2
     */
    groups?: [string, string, ...string[]];
  },
];

/**
 * Options.
 */
export type AlphabetizeOptions = AlphabetizeOption;

/**
 * Enforce arrange in alphabetical order for type fields, enum values, input object fields, operation selections and more.
 *
 * @see [alphabetize](https://the-guild.dev/graphql/eslint/rules/alphabetize)
 */
export type AlphabetizeRuleConfig = RuleConfig<AlphabetizeOptions>;

/**
 * Enforce arrange in alphabetical order for type fields, enum values, input object fields, operation selections and more.
 *
 * @see [alphabetize](https://the-guild.dev/graphql/eslint/rules/alphabetize)
 */
export interface AlphabetizeRule {
  /**
   * Enforce arrange in alphabetical order for type fields, enum values, input object fields, operation selections and more.
   *
   * @see [alphabetize](https://the-guild.dev/graphql/eslint/rules/alphabetize)
   */
  '@graphql-eslint/alphabetize': AlphabetizeRuleConfig;
}
