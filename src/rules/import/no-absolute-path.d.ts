import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoAbsolutePathOption {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  /**
   * @minItems 1
   */
  ignore?: [string, ...string[]];
}

/**
 * Options.
 */
export type NoAbsolutePathOptions = [NoAbsolutePathOption?];

/**
 *
 * @see [no-absolute-path](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-absolute-path.md)
 */
export type NoAbsolutePathRuleConfig = RuleConfig<NoAbsolutePathOptions>;

/**
 *
 * @see [no-absolute-path](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-absolute-path.md)
 */
export interface NoAbsolutePathRule {
  /**
   *
   * @see [no-absolute-path](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-absolute-path.md)
   */
  'import/no-absolute-path': NoAbsolutePathRuleConfig;
}
