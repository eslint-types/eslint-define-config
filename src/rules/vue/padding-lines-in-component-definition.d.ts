import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type PaddingLinesInComponentDefinitionOption =
  | ('always' | 'never')
  | {
      betweenOptions?: 'never' | 'always' | 'ignore';
      withinOption?:
        | ('never' | 'always' | 'ignore')
        | {
            /**
             */
            [k: string]:
              | ('never' | 'always' | 'ignore')
              | {
                  betweenItems?: 'never' | 'always' | 'ignore';
                  withinEach?: 'never' | 'always' | 'ignore';
                };
          };
      groupSingleLineProperties?: boolean;
    };

/**
 * Options.
 */
export type PaddingLinesInComponentDefinitionOptions = [
  PaddingLinesInComponentDefinitionOption?,
];

/**
 * Require or disallow padding lines in component definition.
 *
 * @see [padding-lines-in-component-definition](https://eslint.vuejs.org/rules/padding-lines-in-component-definition.html)
 */
export type PaddingLinesInComponentDefinitionRuleConfig =
  RuleConfig<PaddingLinesInComponentDefinitionOptions>;

/**
 * Require or disallow padding lines in component definition.
 *
 * @see [padding-lines-in-component-definition](https://eslint.vuejs.org/rules/padding-lines-in-component-definition.html)
 */
export interface PaddingLinesInComponentDefinitionRule {
  /**
   * Require or disallow padding lines in component definition.
   *
   * @see [padding-lines-in-component-definition](https://eslint.vuejs.org/rules/padding-lines-in-component-definition.html)
   */
  'vue/padding-lines-in-component-definition': PaddingLinesInComponentDefinitionRuleConfig;
}
