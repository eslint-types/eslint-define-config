import type { Environments } from './env';
import type { Extends } from './extends';
import type { Overrides } from './overrides';
import type { ParserOptions } from './parser-options';
import type { Rules } from './rules';
import type { Settings } from './settings';

/**
 *
 */
export interface EslintConfig {
  root?: boolean;
  ignorePatterns?: string[];
  /**
   * An environment provides predefined global variables.
   *
   * @see [Environments](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments)
   */
  env?: Environments;
  /**
   * Extending Configuration Files.
   *
   * @see [Extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
   */
  extends?: Extends;
  parser?: string;
  parserOptions?: ParserOptions;
  plugins?: string[];
  /**
   * Rules.
   *
   * @see [Rules](https://eslint.org/docs/user-guide/configuring/rules)
   */
  rules?: Rules;
  overrides?: Overrides;
  settings?: Settings;
}

/**
 * Define an eslint config.
 *
 * @param config Eslint config.
 * @returns Eslint config.
 */
export function defineConfig(config: EslintConfig): EslintConfig;
