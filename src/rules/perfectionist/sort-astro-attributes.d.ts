import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortAstroAttributesOption {
  'custom-groups'?: {
    [k: string]: any;
  };
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'ignore-case'?: boolean;
  groups?: any[];
}

/**
 * Options.
 */
export type SortAstroAttributesOptions = [SortAstroAttributesOption?];

/**
 * Enforce sorted Astro attributes.
 *
 * @see [sort-astro-attributes](https://eslint-plugin-perfectionist.azat.io/rules/sort-astro-attributes)
 */
export type SortAstroAttributesRuleConfig =
  RuleConfig<SortAstroAttributesOptions>;

/**
 * Enforce sorted Astro attributes.
 *
 * @see [sort-astro-attributes](https://eslint-plugin-perfectionist.azat.io/rules/sort-astro-attributes)
 */
export interface SortAstroAttributesRule {
  /**
   * Enforce sorted Astro attributes.
   *
   * @see [sort-astro-attributes](https://eslint-plugin-perfectionist.azat.io/rules/sort-astro-attributes)
   */
  'perfectionist/sort-astro-attributes': SortAstroAttributesRuleConfig;
}
