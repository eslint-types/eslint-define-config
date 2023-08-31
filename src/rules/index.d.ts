import type { DeprecationRules } from './deprecation/index.d.ts';
import type { EslintCommentsRules } from './eslint-comments/index.d.ts';
import type { EslintRules } from './eslint/index.d.ts';
import type { GraphQLRules } from './graphql-eslint/index.d.ts';
import type { ImportRules } from './import/index.d.ts';
import type { JSDocRules } from './jsdoc/index.d.ts';
import type { JsoncRules } from './jsonc/index.d.ts';
import type { JsxA11yRules } from './jsx-a11y/index.d.ts';
import type { NRules } from './n/index.d.ts';
import type { NodeRules } from './node/index.d.ts';
import type { PromiseRules } from './promise/index.d.ts';
import type { ReactHooksRules } from './react-hooks/index.d.ts';
import type { ReactRules } from './react/index.d.ts';
import type { RuleConfig } from './rule-config.d.ts';
import type { SonarJSRules } from './sonarjs/index.d.ts';
import type { SpellcheckRules } from './spellcheck/index.d.ts';
import type { TestingLibraryRules } from './testing-library/index.d.ts';
import type { TypeScriptRules } from './typescript-eslint/index.d.ts';
import type { UnicornRules } from './unicorn/index.d.ts';
import type { VitestRules } from './vitest/index.d.ts';
import type { VueI18nRules } from './vue-i18n/index.d.ts';
import type { VuePugRules } from './vue-pug/index.d.ts';
import type { VueRules } from './vue/index.d.ts';
import type { YmlRules } from './yml/index.d.ts';

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
