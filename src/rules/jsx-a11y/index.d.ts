import type { AccessibleEmojiRule } from './accessible-emoji';
import type { AltTextRule } from './alt-text';
import type { AnchorAmbiguousTextRule } from './anchor-ambiguous-text';
import type { AnchorHasContentRule } from './anchor-has-content';
import type { AnchorIsValidRule } from './anchor-is-valid';
import type { AriaActivedescendantHasTabindexRule } from './aria-activedescendant-has-tabindex';
import type { AriaPropsRule } from './aria-props';
import type { AriaProptypesRule } from './aria-proptypes';
import type { AriaRoleRule } from './aria-role';
import type { AriaUnsupportedElementsRule } from './aria-unsupported-elements';
import type { AutocompleteValidRule } from './autocomplete-valid';
import type { ClickEventsHaveKeyEventsRule } from './click-events-have-key-events';
import type { ControlHasAssociatedLabelRule } from './control-has-associated-label';
import type { HeadingHasContentRule } from './heading-has-content';
import type { HtmlHasLangRule } from './html-has-lang';
import type { IframeHasTitleRule } from './iframe-has-title';
import type { ImgRedundantAltRule } from './img-redundant-alt';
import type { InteractiveSupportsFocusRule } from './interactive-supports-focus';
import type { LabelHasAssociatedControlRule } from './label-has-associated-control';
import type { LabelHasForRule } from './label-has-for';
import type { LangRule } from './lang';
import type { MediaHasCaptionRule } from './media-has-caption';
import type { MouseEventsHaveKeyEventsRule } from './mouse-events-have-key-events';
import type { NoAccessKeyRule } from './no-access-key';
import type { NoAriaHiddenOnFocusableRule } from './no-aria-hidden-on-focusable';
import type { NoAutofocusRule } from './no-autofocus';
import type { NoDistractingElementsRule } from './no-distracting-elements';
import type { NoInteractiveElementToNoninteractiveRoleRule } from './no-interactive-element-to-noninteractive-role';
import type { NoNoninteractiveElementInteractionsRule } from './no-noninteractive-element-interactions';
import type { NoNoninteractiveElementToInteractiveRoleRule } from './no-noninteractive-element-to-interactive-role';
import type { NoNoninteractiveTabindexRule } from './no-noninteractive-tabindex';
import type { NoOnchangeRule } from './no-onchange';
import type { NoRedundantRolesRule } from './no-redundant-roles';
import type { NoStaticElementInteractionsRule } from './no-static-element-interactions';
import type { PreferTagOverRoleRule } from './prefer-tag-over-role';
import type { RoleHasRequiredAriaPropsRule } from './role-has-required-aria-props';
import type { RoleSupportsAriaPropsRule } from './role-supports-aria-props';
import type { ScopeRule } from './scope';
import type { TabindexNoPositiveRule } from './tabindex-no-positive';

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
