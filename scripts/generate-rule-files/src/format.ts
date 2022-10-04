import type { Options } from 'prettier';
import { format as prettierFormat } from 'prettier';

/**
 * Our custom prettier configuration.
 */
const PRETTIER_OPTIONS: Options = {
  plugins: [require.resolve('prettier-plugin-organize-imports')],
  parser: 'typescript',
  singleQuote: true,
  trailingComma: 'all',
};

/**
 * Format the given content with Prettier.
 */
export function format(content: string): string {
  return prettierFormat(content, PRETTIER_OPTIONS);
}
