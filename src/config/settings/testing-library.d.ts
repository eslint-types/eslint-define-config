import type { LiteralUnion } from '../../utility-types';

/**
 * Testing Library settings.
 *
 * @see [Testing Library settings](https://github.com/testing-library/eslint-plugin-testing-library)
 */
export interface TestingLibrarySettings
  extends Partial<Record<string, unknown>> {
  /**
   * @see [testing-library/custom-queries](https://github.com/testing-library/eslint-plugin-testing-library#testing-librarycustom-queries)
   */
  'testing-library/custom-queries'?: 'off' | string[];

  /**
   * @see [testing-library/custom-renders](https://github.com/testing-library/eslint-plugin-testing-library#testing-librarycustom-renders)
   */
  'testing-library/custom-renders'?: 'off' | string[];

  /**
   * @see [testing-library/utils-module](https://github.com/testing-library/eslint-plugin-testing-library#testing-libraryutils-module)
   */
  'testing-library/utils-module'?: LiteralUnion<'off'>;
}
