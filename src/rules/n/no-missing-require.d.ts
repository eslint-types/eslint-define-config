import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMissingRequireOption {
  allowModules?: string[];
  tryExtensions?: string[];
  resolvePaths?: string[];
  typescriptExtensionMap?:
    | any[][]
    | ('react' | 'react-jsx' | 'react-jsxdev' | 'react-native' | 'preserve');
  tsconfigPath?: string;
}

/**
 * Options.
 */
export type NoMissingRequireOptions = [NoMissingRequireOption?];

/**
 * Disallow `require()` expressions which import non-existence modules.
 *
 * @see [no-missing-require](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-missing-require.md)
 */
export type NoMissingRequireRuleConfig = RuleConfig<NoMissingRequireOptions>;

/**
 * Disallow `require()` expressions which import non-existence modules.
 *
 * @see [no-missing-require](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-missing-require.md)
 */
export interface NoMissingRequireRule {
  /**
   * Disallow `require()` expressions which import non-existence modules.
   *
   * @see [no-missing-require](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-missing-require.md)
   */
  'n/no-missing-require': NoMissingRequireRuleConfig;
}
