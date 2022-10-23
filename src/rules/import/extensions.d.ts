import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ExtensionsOption =
  | []
  | ['always' | 'ignorePackages' | 'never']
  | []
  | ['always' | 'ignorePackages' | 'never']
  | [
      'always' | 'ignorePackages' | 'never',
      {
        pattern?: {
          /**
           */
          [k: string]: 'always' | 'ignorePackages' | 'never';
        };
        ignorePackages?: boolean;
        [k: string]: any;
      },
    ]
  | []
  | [
      {
        pattern?: {
          /**
           */
          [k: string]: 'always' | 'ignorePackages' | 'never';
        };
        ignorePackages?: boolean;
        [k: string]: any;
      },
    ]
  | []
  | [
      {
        /**
         */
        [k: string]: 'always' | 'ignorePackages' | 'never';
      },
    ]
  | []
  | ['always' | 'ignorePackages' | 'never']
  | [
      'always' | 'ignorePackages' | 'never',
      {
        /**
         */
        [k: string]: 'always' | 'ignorePackages' | 'never';
      },
    ];

/**
 * Options.
 */
export type ExtensionsOptions = ExtensionsOption;

/**
 *
 * @see [extensions](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/extensions.md)
 */
export type ExtensionsRuleConfig = RuleConfig<ExtensionsOptions>;

/**
 *
 * @see [extensions](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/extensions.md)
 */
export interface ExtensionsRule {
  /**
   *
   * @see [extensions](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/extensions.md)
   */
  'import/extensions': ExtensionsRuleConfig;
}
