import type { RuleConfig } from '../rule-config';

/**
 * If a default import is requested, this rule will report if there is no default export in the imported module.
 *
 * @see [default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md)
 */
export type DefaultRuleConfig = RuleConfig<[]>;

/**
 * If a default import is requested, this rule will report if there is no default export in the imported module.
 *
 * @see [default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md)
 */
export interface DefaultRule {
  /**
   * If a default import is requested, this rule will report if there is no default export in the imported module.
   *
   * @see [default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md)
   */
  'import/default': DefaultRuleConfig;
}
