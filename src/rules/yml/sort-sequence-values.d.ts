import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 1
 */
export type SortSequenceValuesOption = [
  {
    pathPattern: string;
    order:
      | (
          | string
          | {
              valuePattern?: string;
              order?: {
                type?: 'asc' | 'desc';
                caseSensitive?: boolean;
                natural?: boolean;
              };
            }
        )[]
      | {
          type?: 'asc' | 'desc';
          caseSensitive?: boolean;
          natural?: boolean;
        };
    minValues?: number;
  },
  ...{
    pathPattern: string;
    order:
      | (
          | string
          | {
              valuePattern?: string;
              order?: {
                type?: 'asc' | 'desc';
                caseSensitive?: boolean;
                natural?: boolean;
              };
            }
        )[]
      | {
          type?: 'asc' | 'desc';
          caseSensitive?: boolean;
          natural?: boolean;
        };
    minValues?: number;
  }[],
];

/**
 * Options.
 */
export type SortSequenceValuesOptions = SortSequenceValuesOption;

/**
 * Require sequence values to be sorted.
 *
 * @see [sort-sequence-values](https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-sequence-values.html)
 */
export type SortSequenceValuesRuleConfig =
  RuleConfig<SortSequenceValuesOptions>;

/**
 * Require sequence values to be sorted.
 *
 * @see [sort-sequence-values](https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-sequence-values.html)
 */
export interface SortSequenceValuesRule {
  /**
   * Require sequence values to be sorted.
   *
   * @see [sort-sequence-values](https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-sequence-values.html)
   */
  'yml/sort-sequence-values': SortSequenceValuesRuleConfig;
}
