import type { EslintRules } from './eslint';
import type { ImportRules } from './import';
import type { JSDocRules } from './jsdoc';
import type { NodeRules } from './node';
import type { RuleConfig } from './rule-config';
import type { SpellcheckRules } from './spellcheck';
import type { TypeScriptEslintRules } from './typescript-eslint';

/**
 * Rules.
 *
 * @see [Rules](https://eslint.org/docs/user-guide/configuring/rules)
 */
export type Rules = Partial<
  EslintRules &
    TypeScriptEslintRules &
    NodeRules &
    ImportRules &
    JSDocRules &
    SpellcheckRules &
    Record<string, RuleConfig>
>;
