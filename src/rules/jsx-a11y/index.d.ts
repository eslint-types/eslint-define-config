import type { AccessibleEmojiRule } from './accessible-emoji.d.ts';
import type { AltTextRule } from './alt-text.d.ts';
import type { AnchorAmbiguousTextRule } from './anchor-ambiguous-text.d.ts';
import type { AnchorHasContentRule } from './anchor-has-content.d.ts';
import type { AnchorIsValidRule } from './anchor-is-valid.d.ts';
import type { AriaActivedescendantHasTabindexRule } from './aria-activedescendant-has-tabindex.d.ts';
import type { AriaPropsRule } from './aria-props.d.ts';
import type { AriaProptypesRule } from './aria-proptypes.d.ts';
import type { AriaRoleRule } from './aria-role.d.ts';
import type { AriaUnsupportedElementsRule } from './aria-unsupported-elements.d.ts';
import type { AutocompleteValidRule } from './autocomplete-valid.d.ts';
import type { ClickEventsHaveKeyEventsRule } from './click-events-have-key-events.d.ts';
import type { ControlHasAssociatedLabelRule } from './control-has-associated-label.d.ts';
import type { HeadingHasContentRule } from './heading-has-content.d.ts';
import type { HtmlHasLangRule } from './html-has-lang.d.ts';
import type { IframeHasTitleRule } from './iframe-has-title.d.ts';
import type { ImgRedundantAltRule } from './img-redundant-alt.d.ts';
import type { InteractiveSupportsFocusRule } from './interactive-supports-focus.d.ts';
import type { LabelHasAssociatedControlRule } from './label-has-associated-control.d.ts';
import type { LabelHasForRule } from './label-has-for.d.ts';
import type { LangRule } from './lang.d.ts';
import type { MediaHasCaptionRule } from './media-has-caption.d.ts';
import type { MouseEventsHaveKeyEventsRule } from './mouse-events-have-key-events.d.ts';
import type { NoAccessKeyRule } from './no-access-key.d.ts';
import type { NoAriaHiddenOnFocusableRule } from './no-aria-hidden-on-focusable.d.ts';
import type { NoAutofocusRule } from './no-autofocus.d.ts';
import type { NoDistractingElementsRule } from './no-distracting-elements.d.ts';
import type { NoInteractiveElementToNoninteractiveRoleRule } from './no-interactive-element-to-noninteractive-role.d.ts';
import type { NoNoninteractiveElementInteractionsRule } from './no-noninteractive-element-interactions.d.ts';
import type { NoNoninteractiveElementToInteractiveRoleRule } from './no-noninteractive-element-to-interactive-role.d.ts';
import type { NoNoninteractiveTabindexRule } from './no-noninteractive-tabindex.d.ts';
import type { NoOnchangeRule } from './no-onchange.d.ts';
import type { NoRedundantRolesRule } from './no-redundant-roles.d.ts';
import type { NoStaticElementInteractionsRule } from './no-static-element-interactions.d.ts';
import type { PreferTagOverRoleRule } from './prefer-tag-over-role.d.ts';
import type { RoleHasRequiredAriaPropsRule } from './role-has-required-aria-props.d.ts';
import type { RoleSupportsAriaPropsRule } from './role-supports-aria-props.d.ts';
import type { ScopeRule } from './scope.d.ts';
import type { TabindexNoPositiveRule } from './tabindex-no-positive.d.ts';

/**
 * All JsxA11y rules.
 */
export type JsxA11yRules = AccessibleEmojiRule &
  AltTextRule &
  AnchorAmbiguousTextRule &
  AnchorHasContentRule &
  AnchorIsValidRule &
  AriaActivedescendantHasTabindexRule &
  AriaPropsRule &
  AriaProptypesRule &
  AriaRoleRule &
  AriaUnsupportedElementsRule &
  AutocompleteValidRule &
  ClickEventsHaveKeyEventsRule &
  ControlHasAssociatedLabelRule &
  HeadingHasContentRule &
  HtmlHasLangRule &
  IframeHasTitleRule &
  ImgRedundantAltRule &
  InteractiveSupportsFocusRule &
  LabelHasAssociatedControlRule &
  LabelHasForRule &
  LangRule &
  MediaHasCaptionRule &
  MouseEventsHaveKeyEventsRule &
  NoAccessKeyRule &
  NoAriaHiddenOnFocusableRule &
  NoAutofocusRule &
  NoDistractingElementsRule &
  NoInteractiveElementToNoninteractiveRoleRule &
  NoNoninteractiveElementInteractionsRule &
  NoNoninteractiveElementToInteractiveRoleRule &
  NoNoninteractiveTabindexRule &
  NoOnchangeRule &
  NoRedundantRolesRule &
  NoStaticElementInteractionsRule &
  PreferTagOverRoleRule &
  RoleHasRequiredAriaPropsRule &
  RoleSupportsAriaPropsRule &
  ScopeRule &
  TabindexNoPositiveRule;
