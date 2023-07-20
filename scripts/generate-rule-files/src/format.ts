import type { Config } from 'prettier';
import { format as prettierFormat } from 'prettier';

/**
 * Our custom prettier configuration.
 */
const PRETTIER_OPTIONS: Config = {
  plugins: ['prettier-plugin-organize-imports'],
  parser: 'typescript',
  singleQuote: true,
  trailingComma: 'all',
};

/**
 * Format the given content with Prettier.
 */
export function format(content: string): Promise<string> {
  return prettierFormat(content, PRETTIER_OPTIONS);
}
