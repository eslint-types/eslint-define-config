import type { KeyFormatStyleRule } from './key-format-style.d.ts';
import type { NoDeprecatedI18nComponentRule } from './no-deprecated-i18n-component.d.ts';
import type { NoDeprecatedI18nPlaceAttrRule } from './no-deprecated-i18n-place-attr.d.ts';
import type { NoDeprecatedI18nPlacesPropRule } from './no-deprecated-i18n-places-prop.d.ts';
import type { NoDuplicateKeysInLocaleRule } from './no-duplicate-keys-in-locale.d.ts';
import type { NoDynamicKeysRule } from './no-dynamic-keys.d.ts';
import type { NoHtmlMessagesRule } from './no-html-messages.d.ts';
import type { NoI18nTPathPropRule } from './no-i18n-t-path-prop.d.ts';
import type { NoMissingKeysInOtherLocalesRule } from './no-missing-keys-in-other-locales.d.ts';
import type { NoMissingKeysRule } from './no-missing-keys.d.ts';
import type { NoRawTextRule } from './no-raw-text.d.ts';
import type { NoUnknownLocaleRule } from './no-unknown-locale.d.ts';
import type { NoUnusedKeysRule } from './no-unused-keys.d.ts';
import type { NoVHtmlRule } from './no-v-html.d.ts';
import type { PreferLinkedKeyWithParenRule } from './prefer-linked-key-with-paren.d.ts';
import type { PreferSfcLangAttrRule } from './prefer-sfc-lang-attr.d.ts';
import type { SfcLocaleAttrRule } from './sfc-locale-attr.d.ts';
import type { ValidMessageSyntaxRule } from './valid-message-syntax.d.ts';

/**
 * All VueI18n rules.
 */
export type VueI18nRules = KeyFormatStyleRule &
  NoDeprecatedI18nComponentRule &
  NoDeprecatedI18nPlaceAttrRule &
  NoDeprecatedI18nPlacesPropRule &
  NoDuplicateKeysInLocaleRule &
  NoDynamicKeysRule &
  NoHtmlMessagesRule &
  NoI18nTPathPropRule &
  NoMissingKeysInOtherLocalesRule &
  NoMissingKeysRule &
  NoRawTextRule &
  NoUnknownLocaleRule &
  NoUnusedKeysRule &
  NoVHtmlRule &
  PreferLinkedKeyWithParenRule &
  PreferSfcLangAttrRule &
  SfcLocaleAttrRule &
  ValidMessageSyntaxRule;
