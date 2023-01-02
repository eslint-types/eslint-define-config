import type { DeprecationRules } from './deprecation';
import type { EslintRules } from './eslint';
import type { EslintCommentsRules } from './eslint-comments';
import type { ImportRules } from './import';
import type { JSDocRules } from './jsdoc';
import type { JsoncRules } from './jsonc';
import type { NRules } from './n';
import type { NodeRules } from './node';
import type { PromiseRules } from './promise';
import type { RuleConfig } from './rule-config';
import type { SonarJSRules } from './sonarjs';
import type { SpellcheckRules } from './spellcheck';
import type { TypeScriptRules } from './typescript-eslint';
import type { UnicornRules } from './unicorn';
import type { VueRules } from './vue';
import type { VueI18nRules } from './vue-i18n';
import type { VuePugRules } from './vue-pug';

/**
 * Rules.
 *
 * @see [Rules](https://eslint.org/docs/user-guide/configuring/rules)
 */
export type Rules = Partial<
  DeprecationRules &
    EslintRules &
    EslintCommentsRules &
    ImportRules &
    JSDocRules &
    JsoncRules &
    NodeRules &
    NRules &
    PromiseRules &
    SonarJSRules &
    SpellcheckRules &
    TypeScriptRules &
    UnicornRules &
    VueRules &
    VueI18nRules &
    VuePugRules &
    Record<string, RuleConfig>
>;
