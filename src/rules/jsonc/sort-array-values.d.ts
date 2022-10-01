import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 1
 */
export type SortArrayValuesOption = [
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
export type SortArrayValuesOptions = SortArrayValuesOption;

/**
 * Require array values to be sorted.
 *
 * @see [sort-array-values](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-array-values.html)
 */
export type SortArrayValuesRuleConfig = RuleConfig<SortArrayValuesOptions>;

/**
 * Require array values to be sorted.
 *
 * @see [sort-array-values](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-array-values.html)
 */
export interface SortArrayValuesRule {
  /**
   * Require array values to be sorted.
   *
   * @see [sort-array-values](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-array-values.html)
   */
  'jsonc/sort-array-values': SortArrayValuesRuleConfig;
}
