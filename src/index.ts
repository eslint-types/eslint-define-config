import { EslintRules } from './rules/eslint';
import { RuleConfig } from './rules/rule-config';

/**
 *
 */
export interface Env {
  es6?: boolean;
  node?: boolean;
}

/**
 *
 */
export interface ParserOptions {
  sourceType?: 'module' | '...';
  ecmaVersion?: 2020;
  project?: any;
  warnOnUnsupportedTypeScriptVersion?: boolean;
}

/**
 *
 */
export type Rules = Partial<EslintRules> & Partial<Record<string, RuleConfig>>;

/**
 *
 */
export interface Override {
  files: string[];
  rules: Rules;
}

/**
 *
 */
export type Overrides = Array<Override>;

/**
 *
 */
export interface Settings {
  jsdoc?: {
    mode: string;
  };
}

/**
 *
 */
export interface EslintConfig {
  root?: boolean;
  env?: Env;
  extends?: string[];
  parser?: string;
  parserOptions?: ParserOptions;
  plugins?: string[];
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
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export function defineConfig(config: EslintConfig) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return config;
}
