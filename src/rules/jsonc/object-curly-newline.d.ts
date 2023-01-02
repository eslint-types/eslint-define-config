import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ObjectCurlyNewlineOption =
  | (
      | ('always' | 'never')
      | {
          multiline?: boolean;
          minProperties?: number;
          consistent?: boolean;
        }
    )
  | {
      ObjectExpression?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      ObjectPattern?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      ImportDeclaration?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      ExportDeclaration?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
    };

/**
 * Options.
 */
export type ObjectCurlyNewlineOptions = [ObjectCurlyNewlineOption?];

/**
 * Enforce consistent line breaks inside braces.
 *
 * @see [object-curly-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html)
 */
export type ObjectCurlyNewlineRuleConfig =
  RuleConfig<ObjectCurlyNewlineOptions>;

/**
 * Enforce consistent line breaks inside braces.
 *
 * @see [object-curly-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html)
 */
export interface ObjectCurlyNewlineRule {
  /**
   * Enforce consistent line breaks inside braces.
   *
   * @see [object-curly-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html)
   */
  'jsonc/object-curly-newline': ObjectCurlyNewlineRuleConfig;
}
