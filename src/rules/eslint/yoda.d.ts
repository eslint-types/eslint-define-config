import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface YodaConfig {
  exceptRange?: boolean;
  onlyEquality?: boolean;
}

/**
 * Option.
 */
export type YodaOption = 'always' | 'never';

/**
 * Options.
 */
export type YodaOptions = [YodaOption?, YodaConfig?];

/**
 * Require or disallow "Yoda" conditions.
 *
 * @see [yoda](https://eslint.org/docs/latest/rules/yoda)
 */
export type YodaRuleConfig = RuleConfig<YodaOptions>;

/**
 * Require or disallow "Yoda" conditions.
 *
 * @see [yoda](https://eslint.org/docs/latest/rules/yoda)
 */
export interface YodaRule {
  /**
   * Require or disallow "Yoda" conditions.
   *
   * @see [yoda](https://eslint.org/docs/latest/rules/yoda)
   */
  yoda: YodaRuleConfig;
}
