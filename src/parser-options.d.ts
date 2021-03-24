/**
 *
 */
export interface ParserOptions {
  ecmaVersion?: 2020;
  parser?: string;
  project?: any;
  sourceType?: 'module' | '...';
  warnOnUnsupportedTypeScriptVersion?: boolean;
}
