import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnescapedEntitiesOption {
  forbid?: (
    | string
    | {
        char?: string;
        alternatives?: string[];
        [k: string]: any;
      }
  )[];
}

/**
 * Options.
 */
export type NoUnescapedEntitiesOptions = [NoUnescapedEntitiesOption?];

/**
 * Disallow unescaped HTML entities from appearing in markup.
 *
 * @see [no-unescaped-entities](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md)
 */
export type NoUnescapedEntitiesRuleConfig =
  RuleConfig<NoUnescapedEntitiesOptions>;

/**
 * Disallow unescaped HTML entities from appearing in markup.
 *
 * @see [no-unescaped-entities](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md)
 */
export interface NoUnescapedEntitiesRule {
  /**
   * Disallow unescaped HTML entities from appearing in markup.
   *
   * @see [no-unescaped-entities](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md)
   */
  'react/no-unescaped-entities': NoUnescapedEntitiesRuleConfig;
}
