import type { LiteralUnion } from '../../utility-types';
import type { EslintExtensions } from './eslint';
import type { EslintCommentsExtensions } from './eslint-plugin-eslint-comment';
import type { GraphqlExtensions } from './eslint-plugin-graphql';
import type { ImportExtensions } from './eslint-plugin-import';
import type { JsdocExtensions } from './eslint-plugin-jsdoc';
import type { JsoncExtensions } from './eslint-plugin-jsonc';
import type { MdxExtensions } from './eslint-plugin-mdx';
import type { NExtensions } from './eslint-plugin-n';
import type { NodeExtensions } from './eslint-plugin-node';
import type { PrettierExtensions } from './eslint-plugin-prettier';
import type { PromiseExtensions } from './eslint-plugin-promise';
import type { ReactExtensions } from './eslint-plugin-react';
import type { ReactHooksExtensions } from './eslint-plugin-react-hooks';
import type { SonarjsExtensions } from './eslint-plugin-sonarjs';
import type { TestingLibraryExtensions } from './eslint-plugin-testing-library';
import type { UnicornExtensions } from './eslint-plugin-unicorn';
import type { VitestExtensions } from './eslint-plugin-vitest';
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
