import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type KeySpacingOption =
  | {
      align?:
        | ('colon' | 'value')
        | {
            mode?: 'strict' | 'minimum';
            on?: 'colon' | 'value';
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
              mode?: 'strict' | 'minimum';
              on?: 'colon' | 'value';
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
        mode?: 'strict' | 'minimum';
        on?: 'colon' | 'value';
        beforeColon?: boolean;
        afterColon?: boolean;
      };
    };

/**
 * Options.
 */
export type KeySpacingOptions = [KeySpacingOption?];

/**
 * Enforce consistent spacing between keys and values in object literal properties.
 *
 * @see [key-spacing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html)
 */
export type KeySpacingRuleConfig = RuleConfig<KeySpacingOptions>;

/**
 * Enforce consistent spacing between keys and values in object literal properties.
 *
 * @see [key-spacing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html)
 */
export interface KeySpacingRule {
  /**
   * Enforce consistent spacing between keys and values in object literal properties.
   *
   * @see [key-spacing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html)
   */
  'jsonc/key-spacing': KeySpacingRuleConfig;
}
