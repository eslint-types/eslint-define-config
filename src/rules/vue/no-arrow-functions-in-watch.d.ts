import type { RuleConfig } from '../rule-config';

/**
 * Disallow using arrow functions to define watcher.
 *
 * @see [no-arrow-functions-in-watch](https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html)
 */
export type NoArrowFunctionsInWatchRuleConfig = RuleConfig<[]>;

/**
 * Disallow using arrow functions to define watcher.
 *
 * @see [no-arrow-functions-in-watch](https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html)
 */
export interface NoArrowFunctionsInWatchRule {
  /**
   * Disallow using arrow functions to define watcher.
   *
   * @see [no-arrow-functions-in-watch](https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html)
   */
  'vue/no-arrow-functions-in-watch': NoArrowFunctionsInWatchRuleConfig;
}
