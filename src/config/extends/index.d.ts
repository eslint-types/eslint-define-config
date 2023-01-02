import type { LiteralUnion } from '../../utility-types';
import type { EslintExtensions } from './eslint';
import type { EslintCommentsExtensions } from './eslint-plugin-eslint-comment';
import type { ImportExtensions } from './eslint-plugin-import';
import type { JsdocExtensions } from './eslint-plugin-jsdoc';
import type { JsoncExtensions } from './eslint-plugin-jsonc';
import type { MdxExtensions } from './eslint-plugin-mdx';
import type { NExtensions } from './eslint-plugin-n';
import type { NodeExtensions } from './eslint-plugin-node';
import type { PrettierExtensions } from './eslint-plugin-prettier';
import type { PromiseExtensions } from './eslint-plugin-promise';
import type { SonarjsExtensions } from './eslint-plugin-sonarjs';
import type { UnicornExtensions } from './eslint-plugin-unicorn';
import type { VueExtensions } from './eslint-plugin-vue';
import type { VuePugExtensions } from './eslint-plugin-vue-pug';
import type { IntlifyVueI18nExtensions } from './intlify-vue-i18n';
import type { TypescriptEslintExtensions } from './typescript-eslint';

/**
 * All known extensions.
 */
export type KnownExtensions = LiteralUnion<
  | EslintCommentsExtensions
  | EslintExtensions
  | ImportExtensions
  | IntlifyVueI18nExtensions
  | JsdocExtensions
  | JsoncExtensions
  | MdxExtensions
  | NExtensions
  | NodeExtensions
  | PrettierExtensions
  | PromiseExtensions
  | SonarjsExtensions
  | TypescriptEslintExtensions
  | UnicornExtensions
  | VueExtensions
  | VuePugExtensions
>;

/**
 * Extending Configuration Files.
 *
 * @see [Extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
 */
export type Extends = KnownExtensions | Array<KnownExtensions>;
