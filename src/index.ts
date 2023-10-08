import type { ESLintConfig } from './config';
import type { FlatESLintConfig } from './flat-config';
import type { Rules as AllRules } from './rules';
import { RuleConfig } from './rules/rule-config';

/**
 * Define an ESLint config.
 *
 * @param config ESLint config.
 * @returns ESLint config.
 */
export function defineConfig<
  Rules extends Record<string, RuleConfig> = AllRules,
  Strict extends boolean = false,
>(config: ESLintConfig<Rules, Strict>): ESLintConfig {
  return config;
}

/**
 * Define an item of Flat ESLint config.
 *
 * @see [Configuration Files (New)](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new)
 *
 * @param config an item of Flat ESLint config.
 * @returns an item of Flat ESLint config.
 */
export function defineFlatConfig<
  Rules extends Record<string, RuleConfig> = AllRules,
  Strict extends boolean = false,
>(config: FlatESLintConfig<Rules, Strict>): FlatESLintConfig<Rules, Strict>;

/**
 * Define a flat ESLint config.
 *
 * @see [Configuration Files (New)](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new)
 *
 * @param config Flat ESLint config.
 * @returns Flat ESLint config.
 */
export function defineFlatConfig<
  Rules extends Record<string, RuleConfig> = AllRules,
  Strict extends boolean = false,
>(
  config: ReadonlyArray<FlatESLintConfig<Rules, Strict>>,
): FlatESLintConfig<Rules, Strict>[];

export function defineFlatConfig(config: unknown): unknown {
  return config;
}

export type * from './config';
export type * from './flat-config';
export type * from './parser-options';
export type * from './rules';
