import type { EslintRules } from './eslint';
import type { ImportRules } from './import';
import type { JSDocRules } from './jsdoc';
import type { NodeRules } from './node';
import type { RuleConfig } from './rule-config';
import type { SpellcheckRules } from './spellcheck';
import type { TypeScriptRules } from './typescript-eslint';
import type { VueRules } from './vue';

/**
 * Rules.
 *
 * @see [Rules](https://eslint.org/docs/user-guide/configuring/rules)
 */
export type Rules = Partial<
  EslintRules &
    TypeScriptRules &
    NodeRules &
    ImportRules &
    JSDocRules &
    SpellcheckRules &
    VueRules &
    Record<string, RuleConfig>
>;
