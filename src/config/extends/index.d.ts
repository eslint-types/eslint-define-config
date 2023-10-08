import type { LiteralUnion } from '../../utility-types';
import type { EslintExtends } from './eslint';
import type { EslintCommentsExtends } from './eslint-plugin-eslint-comment';
import type { GraphqlExtends } from './eslint-plugin-graphql';
import type { ImportExtends } from './eslint-plugin-import';
import type { JsdocExtends } from './eslint-plugin-jsdoc';
import type { JsoncExtends } from './eslint-plugin-jsonc';
import type { MdxExtends } from './eslint-plugin-mdx';
import type { NExtends } from './eslint-plugin-n';
import type { NodeExtends } from './eslint-plugin-node';
import type { PrettierExtends } from './eslint-plugin-prettier';
import type { PromiseExtends } from './eslint-plugin-promise';
import type { ReactExtends } from './eslint-plugin-react';
import type { ReactHooksExtends } from './eslint-plugin-react-hooks';
import type { SonarjsExtends } from './eslint-plugin-sonarjs';
import type { TestingLibraryExtends } from './eslint-plugin-testing-library';
import type { UnicornExtends } from './eslint-plugin-unicorn';
import type { VitestExtends } from './eslint-plugin-vitest';
import type { VueExtends } from './eslint-plugin-vue';
import type { VuePugExtends } from './eslint-plugin-vue-pug';
import type { IntlifyVueI18nExtends } from './intlify-vue-i18n';
import type { TypescriptEslintExtends } from './typescript-eslint';

/**
 * All known extends.
 */
export type KnownExtends = LiteralUnion<
  | EslintCommentsExtends
  | EslintExtends
  | GraphqlExtends
  | ImportExtends
  | IntlifyVueI18nExtends
  | JsdocExtends
  | JsoncExtends
  | MdxExtends
  | NExtends
  | NodeExtends
  | PrettierExtends
  | PromiseExtends
  | ReactExtends
  | ReactHooksExtends
  | SonarjsExtends
  | TestingLibraryExtends
  | TypescriptEslintExtends
  | UnicornExtends
  | VitestExtends
  | VueExtends
  | VuePugExtends
>;

/**
 * Extending Configuration Files.
 *
 * @see [Extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
 */
export type Extends = KnownExtends | KnownExtends[];
