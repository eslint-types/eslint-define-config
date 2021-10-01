import type { NoDeprecatedApiRule } from './no-deprecated-api';
import type { NoExtraneousImportRule } from './no-extraneous-import';
import type { NoExtraneousRequireRule } from './no-extraneous-require';
import type { NoMissingImportRule } from './no-missing-import';
import type { NoMissingRequireRule } from './no-missing-require';
import type { NoProcessExitRuleConfig } from './no-process-exit';
import type { NoRestrictedRequireRule } from './no-restricted-require';
import type { NoUnpublishedImportRule } from './no-unpublished-import';
import type { NoUnpublishedRequireRule } from './no-unpublished-require';
import type { NoUnsupportedFeaturesEsSyntaxRule } from './no-unsupported-features/es-syntax';

/**
 * All node rules.
 */
export type NodeRules = NoDeprecatedApiRule &
  NoExtraneousImportRule &
  NoExtraneousRequireRule &
  NoMissingImportRule &
  NoMissingRequireRule &
  // NoProcessExitRuleConfig & // TODO: This rule breaks somehow JSDoc hovering.
  NoRestrictedRequireRule &
  NoUnpublishedImportRule &
  NoUnpublishedRequireRule &
  NoUnsupportedFeaturesEsSyntaxRule;
