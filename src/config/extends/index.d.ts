import type { LiteralUnion } from '../../utility-types.d.ts';
import type { EslintCommentsExtensions } from './eslint-plugin-eslint-comment.d.ts';
import type { GraphqlExtensions } from './eslint-plugin-graphql.d.ts';
import type { ImportExtensions } from './eslint-plugin-import.d.ts';
import type { JsdocExtensions } from './eslint-plugin-jsdoc.d.ts';
import type { JsoncExtensions } from './eslint-plugin-jsonc.d.ts';
import type { MdxExtensions } from './eslint-plugin-mdx.d.ts';
import type { NExtensions } from './eslint-plugin-n.d.ts';
import type { NodeExtensions } from './eslint-plugin-node.d.ts';
import type { PrettierExtensions } from './eslint-plugin-prettier.d.ts';
import type { PromiseExtensions } from './eslint-plugin-promise.d.ts';
import type { ReactHooksExtensions } from './eslint-plugin-react-hooks.d.ts';
import type { ReactExtensions } from './eslint-plugin-react.d.ts';
import type { SonarjsExtensions } from './eslint-plugin-sonarjs.d.ts';
import type { TestingLibraryExtensions } from './eslint-plugin-testing-library.d.ts';
import type { UnicornExtensions } from './eslint-plugin-unicorn.d.ts';
import type { VitestExtensions } from './eslint-plugin-vitest.d.ts';
import type { VuePugExtensions } from './eslint-plugin-vue-pug.d.ts';
import type { VueExtensions } from './eslint-plugin-vue.d.ts';
import type { EslintExtensions } from './eslint.d.ts';
import type { IntlifyVueI18nExtensions } from './intlify-vue-i18n.d.ts';
import type { TypescriptEslintExtensions } from './typescript-eslint.d.ts';

/**
 * All known extensions.
 */
export type KnownExtensions = LiteralUnion<
  | EslintCommentsExtensions
  | EslintExtensions
  | GraphqlExtensions
  | ImportExtensions
  | IntlifyVueI18nExtensions
  | JsdocExtensions
  | JsoncExtensions
  | MdxExtensions
  | NExtensions
  | NodeExtensions
  | PrettierExtensions
  | PromiseExtensions
  | ReactExtensions
  | ReactHooksExtensions
  | SonarjsExtensions
  | TestingLibraryExtensions
  | TypescriptEslintExtensions
  | UnicornExtensions
  | VitestExtensions
  | VueExtensions
  | VuePugExtensions
>;

/**
 * Extending Configuration Files.
 *
 * @see [Extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
 */
export type Extends = KnownExtensions | KnownExtensions[];
