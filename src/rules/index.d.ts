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

/**
 * This is a special exported interface for other packages to declare
 * additional types that should bail out for eslint rules. For example
 * `@typescript-eslint/eslint-plugin` can declare it like so in its `d.ts`:
 *
 * ```ts
 * declare module 'eslint-define-config' {
 *   export interface CustomRuleOptions {
 *     /**
 *      * Require consistently using either `T[]` or `Array<T>` for arrays.
 *      *
 *      * \@see [array-type](https://typescript-eslint.io/rules/array-type)
 *      *\/
 *     '@typescript-eslint/array-type': [
 *       {
 *         default?: 'array' | 'generic' | 'array-simple';
 *         readonly?: 'array' | 'generic' | 'array-simple';
 *       },
 *     ];
 *
 *     // ... more Rules
 *   }
 * }
 * ```
 */
export interface CustomRuleOptions {}

type CustomRules = {
  [TRuleName in keyof CustomRuleOptions]: RuleConfig<
    CustomRuleOptions[TRuleName]
  >;
};

/**
 * Rules.
 *
 * @see [Rules](https://eslint.org/docs/user-guide/configuring/rules)
 */
export interface Rules
  extends CustomRules,
    DeprecationRules,
    EslintRules,
    EslintCommentsRules,
    GraphQLRules,
    ImportRules,
    JSDocRules,
    JsoncRules,
    JsxA11yRules,
    NodeRules,
    NRules,
    PromiseRules,
    ReactHooksRules,
    ReactRules,
    SonarJSRules,
    SpellcheckRules,
    TestingLibraryRules,
    TypeScriptRules,
    UnicornRules,
    VitestRules,
    VueRules,
    VueI18nRules,
    VuePugRules,
    YmlRules,
    Record<string, RuleConfig> {}
