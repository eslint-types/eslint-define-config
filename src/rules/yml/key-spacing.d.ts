import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type KeySpacingOption =
  | {
      align?:
        | ('colon' | 'value')
        | {
            on?: 'colon' | 'value';
            mode?: 'strict' | 'minimum';
            beforeColon?: boolean;
            afterColon?: boolean;
          };
      mode?: 'strict' | 'minimum';
      beforeColon?: boolean;
      afterColon?: boolean;
    }
  | {
      singleLine?: {
        mode?: 'strict' | 'minimum';
        beforeColon?: boolean;
        afterColon?: boolean;
      };
      multiLine?: {
        align?:
          | ('colon' | 'value')
          | {
              on?: 'colon' | 'value';
              mode?: 'strict' | 'minimum';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
        mode?: 'strict' | 'minimum';
        beforeColon?: boolean;
        afterColon?: boolean;
      };
    }
  | {
      singleLine?: {
        mode?: 'strict' | 'minimum';
        beforeColon?: boolean;
        afterColon?: boolean;
      };
      multiLine?: {
        mode?: 'strict' | 'minimum';
        beforeColon?: boolean;
        afterColon?: boolean;
      };
      align?: {
        on?: 'colon' | 'value';
        mode?: 'strict' | 'minimum';
        beforeColon?: boolean;
        afterColon?: boolean;
      };
    };

/**
 * Options.
 */
export type KeySpacingOptions = [KeySpacingOption?];

/**
 * Enforce consistent spacing between keys and values in mapping pairs.
 *
 * @see [key-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/key-spacing.html)
 */
export type KeySpacingRuleConfig = RuleConfig<KeySpacingOptions>;

/**
 * Enforce consistent spacing between keys and values in mapping pairs.
 *
 * @see [key-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/key-spacing.html)
 */
export interface KeySpacingRule {
  /**
   * Enforce consistent spacing between keys and values in mapping pairs.
   *
   * @see [key-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/key-spacing.html)
   */
  'yml/key-spacing': KeySpacingRuleConfig;
}
