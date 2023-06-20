import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ValidJsdocOption {
  prefer?: {
    [k: string]: string;
  };
  preferType?: {
    [k: string]: string;
  };
  requireReturn?: boolean;
  requireParamDescription?: boolean;
  requireReturnDescription?: boolean;
  matchDescription?: string;
  requireReturnType?: boolean;
  requireParamType?: boolean;
}

/**
 * Options.
 */
export type ValidJsdocOptions = [ValidJsdocOption?];

/**
 * Enforce valid JSDoc comments.
 *
 * @deprecated
 *
 * @see [valid-jsdoc](https://eslint.org/docs/latest/rules/valid-jsdoc)
 */
export type ValidJsdocRuleConfig = RuleConfig<ValidJsdocOptions>;

/**
 * Enforce valid JSDoc comments.
 *
 * @deprecated
 *
 * @see [valid-jsdoc](https://eslint.org/docs/latest/rules/valid-jsdoc)
 */
export interface ValidJsdocRule {
  /**
   * Enforce valid JSDoc comments.
   *
   * @deprecated
   *
   * @see [valid-jsdoc](https://eslint.org/docs/latest/rules/valid-jsdoc)
   */
  'valid-jsdoc': ValidJsdocRuleConfig;
}
