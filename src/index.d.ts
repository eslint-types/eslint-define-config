import type { ESLintConfig } from './config';
import type { FlatESLintConfig } from './flat-config';

/**
 * Define an ESLint config.
 *
 * @param config ESLint config.
 * @returns ESLint config.
 */
export function defineConfig(config: ESLintConfig): ESLintConfig;

/**
 * Define a flat ESLint config.
 *
 * @see [Configuration Files (New)](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new)
 *
 * @param config flat ESLint config.
 * @returns flat ESLint config.
 */
export function defineConfig(config: FlatESLintConfig[]): FlatESLintConfig[];
