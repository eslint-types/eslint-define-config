import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @maxItems 1
 */
export type InputNameOption =
  | []
  | [
      {
        /**
         * Check that the input type name follows the convention \<mutationName>Input
         */
        checkInputType?: boolean;
        /**
         * Allow for case discrepancies in the input type name
         */
        caseSensitiveInputType?: boolean;
        /**
         * Apply the rule to Queries
         */
        checkQueries?: boolean;
        /**
         * Apply the rule to Mutations
         */
        checkMutations?: boolean;
      },
    ];

/**
 * Options.
 */
export type InputNameOptions = InputNameOption;

/**
 * Require mutation argument to be always called "input" and input type to be called Mutation name + "Input".
Using the same name for all input parameters will make your schemas easier to consume and more predictable. Using the same name as mutation for InputType will make it easier to find mutations that InputType belongs to.
 *  
 * @see [input-name](https://the-guild.dev/graphql/eslint/rules/input-name)
 */
export type InputNameRuleConfig = RuleConfig<InputNameOptions>;

/**
 * Require mutation argument to be always called "input" and input type to be called Mutation name + "Input".
Using the same name for all input parameters will make your schemas easier to consume and more predictable. Using the same name as mutation for InputType will make it easier to find mutations that InputType belongs to.
 *  
 * @see [input-name](https://the-guild.dev/graphql/eslint/rules/input-name)
 */
export interface InputNameRule {
  /**
 * Require mutation argument to be always called "input" and input type to be called Mutation name + "Input".
Using the same name for all input parameters will make your schemas easier to consume and more predictable. Using the same name as mutation for InputType will make it easier to find mutations that InputType belongs to.
 *  
 * @see [input-name](https://the-guild.dev/graphql/eslint/rules/input-name)
 */
  '@graphql-eslint/input-name': InputNameRuleConfig;
}
