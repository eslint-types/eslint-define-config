import type { ComponentNameInTemplateCasingRule } from './component-name-in-template-casing';
import type { NoParsingErrorRule } from './no-parsing-error';
import type { NoPugControlFlowRule } from './no-pug-control-flow';

/**
 * All VuePug rules.
 */
export type VuePugRules = ComponentNameInTemplateCasingRule &
  NoParsingErrorRule &
  NoPugControlFlowRule;
