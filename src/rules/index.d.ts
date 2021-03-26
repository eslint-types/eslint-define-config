import type { EslintRules } from './eslint';
import type { JSDocRules } from './jsdoc';
import type { RuleConfig } from './rule-config';
import type { SpellcheckRules } from './spellcheck';
import type { TypeScriptEslintRules } from './typescript-eslint';

/**
 * Rules.
 *
 * @see [Rules](https://eslint.org/docs/user-guide/configuring/rules)
 */
export type Rules = Partial<
  EslintRules & TypeScriptEslintRules & JSDocRules & SpellcheckRules & Record<string, RuleConfig>
>;
