import type { AttributeHyphenationRule } from './attribute-hyphenation';
import type { ComponentNameInTemplateCasingRule } from './component-name-in-template-casing';
import type { NoDeprecatedDollarScopedslotsApiRule } from './no-deprecated-dollar-scopedslots-api';
import type { NoDeprecatedFilterRule } from './no-deprecated-filter';
import type { NoDupeVElseIfRule } from './no-dupe-v-else-if';
import type { NoDuplicateAttributesRule } from './no-duplicate-attributes';
import type { NoTemplateKeyRule } from './no-template-key';
import type { NoTextareaMustacheRule } from './no-textarea-mustache';
import type { NoUseVIfWithVForRule } from './no-use-v-if-with-v-for';
import type { RequireComponentIsRule } from './require-component-is';
import type { RequireVForKeyRule } from './require-v-for-key';
import type { ThisInTemplateRule } from './this-in-template';
import type { UseVOnExactRule } from './use-v-on-exact';
import type { ValidVElseRule } from './valid-v-else';
import type { ValidVElseIfRule } from './valid-v-else-if';
import type { ValidVForRule } from './valid-v-for';
import type { ValidVIfRule } from './valid-v-if';

/**
 * All VuePugSfc rules.
 */
export type VuePugSfcRules = AttributeHyphenationRule &
  ComponentNameInTemplateCasingRule &
  NoDeprecatedDollarScopedslotsApiRule &
  NoDeprecatedFilterRule &
  NoDupeVElseIfRule &
  NoDuplicateAttributesRule &
  NoTemplateKeyRule &
  NoTextareaMustacheRule &
  NoUseVIfWithVForRule &
  RequireComponentIsRule &
  RequireVForKeyRule &
  ThisInTemplateRule &
  UseVOnExactRule &
  ValidVElseIfRule &
  ValidVElseRule &
  ValidVForRule &
  ValidVIfRule;
