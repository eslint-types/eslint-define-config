import type { DeprecationRules } from './deprecation';
import type { EslintRules } from './eslint';
import type { EslintCommentsRules } from './eslint-comments';
import type { GraphQLRules } from './graphql-eslint';
import type { ImportRules } from './import';
import type { JSDocRules } from './jsdoc';
import type { JsoncRules } from './jsonc';
import type { JsxA11yRules } from './jsx-a11y';
import type { NRules } from './n';
import type { NodeRules } from './node';
import type { PromiseRules } from './promise';
import type { ReactRules } from './react';
import type { ReactHooksRules } from './react-hooks';
import type { RuleConfig } from './rule-config';
import type { SonarJSRules } from './sonarjs';
import type { SpellcheckRules } from './spellcheck';
import type { TestingLibraryRules } from './testing-library';
import type { TypeScriptRules } from './typescript-eslint';
import type { UnicornRules } from './unicorn';
import type { VitestRules } from './vitest';
import type { VueRules } from './vue';
import type { VueI18nRules } from './vue-i18n';
import type { VuePugRules } from './vue-pug';
import type { YmlRules } from './yml';

export type { DeprecationRules } from './deprecation';
export type { EslintRules } from './eslint';
export type { EslintCommentsRules } from './eslint-comments';
export type { GraphQLRules } from './graphql-eslint';
export type { ImportRules } from './import';
export type { JSDocRules } from './jsdoc';
export type { JsoncRules } from './jsonc';
export type { JsxA11yRules } from './jsx-a11y';
export type { NRules } from './n';
export type { NodeRules } from './node';
export type { PromiseRules } from './promise';
export type { ReactRules } from './react';
export type { ReactHooksRules } from './react-hooks';
export type { RuleConfig } from './rule-config';
export type { SonarJSRules } from './sonarjs';
export type { SpellcheckRules } from './spellcheck';
export type { TestingLibraryRules } from './testing-library';
export type { TypeScriptRules } from './typescript-eslint';
export type { UnicornRules } from './unicorn';
export type { VitestRules } from './vitest';
export type { VueRules } from './vue';
export type { VueI18nRules } from './vue-i18n';
export type { VuePugRules } from './vue-pug';
export type { YmlRules } from './yml';

/**
 * Rules.
 *
 * @see [Rules](https://eslint.org/docs/user-guide/configuring/rules)
 */
export type Rules = Partial<
  DeprecationRules &
    EslintRules &
    EslintCommentsRules &
    GraphQLRules &
    ImportRules &
    JSDocRules &
    JsoncRules &
    JsxA11yRules &
    NodeRules &
    NRules &
    PromiseRules &
    ReactHooksRules &
    ReactRules &
    SonarJSRules &
    SpellcheckRules &
    TestingLibraryRules &
    TypeScriptRules &
    UnicornRules &
    VitestRules &
    VueRules &
    VueI18nRules &
    VuePugRules &
    YmlRules &
    Record<string, RuleConfig>
>;
