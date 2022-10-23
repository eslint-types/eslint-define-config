import type { KeyFormatStyleRule } from './key-format-style';
import type { NoDeprecatedI18nComponentRule } from './no-deprecated-i18n-component';
import type { NoDeprecatedI18nPlaceAttrRule } from './no-deprecated-i18n-place-attr';
import type { NoDeprecatedI18nPlacesPropRule } from './no-deprecated-i18n-places-prop';
import type { NoDuplicateKeysInLocaleRule } from './no-duplicate-keys-in-locale';
import type { NoDynamicKeysRule } from './no-dynamic-keys';
import type { NoHtmlMessagesRule } from './no-html-messages';
import type { NoI18nTPathPropRule } from './no-i18n-t-path-prop';
import type { NoMissingKeysRule } from './no-missing-keys';
import type { NoMissingKeysInOtherLocalesRule } from './no-missing-keys-in-other-locales';
import type { NoRawTextRule } from './no-raw-text';
import type { NoUnknownLocaleRule } from './no-unknown-locale';
import type { NoUnusedKeysRule } from './no-unused-keys';
import type { NoVHtmlRule } from './no-v-html';
import type { PreferLinkedKeyWithParenRule } from './prefer-linked-key-with-paren';
import type { PreferSfcLangAttrRule } from './prefer-sfc-lang-attr';
import type { SfcLocaleAttrRule } from './sfc-locale-attr';
import type { ValidMessageSyntaxRule } from './valid-message-syntax';

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
