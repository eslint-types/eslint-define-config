import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SpaceUnaryOpsOption {
  words?: boolean;
  nonwords?: boolean;
  overrides?: {
    [k: string]: boolean;
  };
}

/**
 * Options.
 */
export type SpaceUnaryOpsOptions = [SpaceUnaryOpsOption?];

/**
 * Disallow spaces after unary operators.
 *
 * @see [space-unary-ops](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html)
 */
export type SpaceUnaryOpsRuleConfig = RuleConfig<SpaceUnaryOpsOptions>;

/**
 * Disallow spaces after unary operators.
 *
 * @see [space-unary-ops](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html)
 */
export interface SpaceUnaryOpsRule {
  /**
   * Disallow spaces after unary operators.
   *
   * @see [space-unary-ops](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html)
   */
  'jsonc/space-unary-ops': SpaceUnaryOpsRuleConfig;
}
