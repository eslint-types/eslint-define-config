import type { ComponentNameInTemplateCasingRule } from './component-name-in-template-casing.d.ts';
import type { NoParsingErrorRule } from './no-parsing-error.d.ts';
import type { NoPugControlFlowRule } from './no-pug-control-flow.d.ts';

/**
 * All VuePug rules.
 */
export type VuePugRules = ComponentNameInTemplateCasingRule &
  NoParsingErrorRule &
  NoPugControlFlowRule;
