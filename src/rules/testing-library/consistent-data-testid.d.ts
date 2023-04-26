import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ConsistentDataTestidOption {
  testIdPattern: string;
  testIdAttribute?: string | string[];
  customMessage?: string;
}

/**
 * Options.
 */
export type ConsistentDataTestidOptions = [ConsistentDataTestidOption?];

/**
 * Ensures consistent usage of `data-testid`.
 *
 * @see [consistent-data-testid](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/consistent-data-testid.md)
 */
export type ConsistentDataTestidRuleConfig =
  RuleConfig<ConsistentDataTestidOptions>;

/**
 * Ensures consistent usage of `data-testid`.
 *
 * @see [consistent-data-testid](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/consistent-data-testid.md)
 */
export interface ConsistentDataTestidRule {
  /**
   * Ensures consistent usage of `data-testid`.
   *
   * @see [consistent-data-testid](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/consistent-data-testid.md)
   */
  'testing-library/consistent-data-testid': ConsistentDataTestidRuleConfig;
}
