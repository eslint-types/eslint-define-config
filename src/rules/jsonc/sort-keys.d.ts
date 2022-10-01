import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SortKeysOption =
  | [
      {
        pathPattern: string;
        hasProperties?: string[];
        order:
          | (
              | string
              | {
                  keyPattern?: string;
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
        minKeys?: number;
      },
      ...{
        pathPattern: string;
        hasProperties?: string[];
        order:
          | (
              | string
              | {
                  keyPattern?: string;
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
        minKeys?: number;
      }[],
    ]
  | []
  | ['asc' | 'desc']
  | [
      'asc' | 'desc',
      {
        caseSensitive?: boolean;
        natural?: boolean;
        minKeys?: number;
      },
    ];

/**
 * Options.
 */
export type SortKeysOptions = SortKeysOption;

/**
 * Require object keys to be sorted.
 *
 * @see [sort-keys](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html)
 */
export type SortKeysRuleConfig = RuleConfig<SortKeysOptions>;

/**
 * Require object keys to be sorted.
 *
 * @see [sort-keys](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html)
 */
export interface SortKeysRule {
  /**
   * Require object keys to be sorted.
   *
   * @see [sort-keys](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html)
   */
  'jsonc/sort-keys': SortKeysRuleConfig;
}
