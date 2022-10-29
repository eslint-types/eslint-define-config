import type { ESLintConfig } from './config';
import type { FlatESLintConfig, FlatESLintConfigs } from './flat-config';

/**
 * Define an ESLint config.
 *
 * @param config ESLint config.
 * @returns ESLint config.
 */
export function defineConfig<T extends ESLintConfig>(config: T): ESLintConfig;

/**
 * Define an item of Flat ESLint config.
 *
 * @see [Configuration Files (New)](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new)
 *
 * @param config an item of Flat ESLint config.
 * @returns an item of Flat ESLint config.
 */
export function defineConfig<T extends FlatESLintConfig>(
  config: T,
): FlatESLintConfig;

/**
 * Define a flat ESLint config.
 *
 * @see [Configuration Files (New)](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new)
 *
 * @param config Flat ESLint config.
 * @returns Flat ESLint config.
 */
export function defineConfig<T extends FlatESLintConfigs>(
  config: T,
): FlatESLintConfigs;

export * from './config';
export * from './flat-config';
export * from './parser-options';
export * from './rules';
