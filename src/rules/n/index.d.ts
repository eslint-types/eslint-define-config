import type { CallbackReturnRule } from './callback-return';
import type { ExportsStyleRule } from './exports-style';
import type { FileExtensionInImportRule } from './file-extension-in-import';
import type { GlobalRequireRule } from './global-require';
import type { HandleCallbackErrRule } from './handle-callback-err';
import type { NoCallbackLiteralRule } from './no-callback-literal';
import type { NoDeprecatedApiRule } from './no-deprecated-api';
import type { NoExportsAssignRule } from './no-exports-assign';
import type { NoExtraneousImportRule } from './no-extraneous-import';
import type { NoExtraneousRequireRule } from './no-extraneous-require';
import type { NoHideCoreModulesRule } from './no-hide-core-modules';
import type { NoMissingImportRule } from './no-missing-import';
import type { NoMissingRequireRule } from './no-missing-require';
import type { NoMixedRequiresRule } from './no-mixed-requires';
import type { NoNewRequireRule } from './no-new-require';
import type { NoPathConcatRule } from './no-path-concat';
import type { NoProcessEnvRule } from './no-process-env';
import type { NoProcessExitRule } from './no-process-exit';
import type { NoRestrictedImportRule } from './no-restricted-import';
import type { NoRestrictedRequireRule } from './no-restricted-require';
import type { NoSyncRule } from './no-sync';
import type { NoUnpublishedBinRule } from './no-unpublished-bin';
import type { NoUnpublishedImportRule } from './no-unpublished-import';
import type { NoUnpublishedRequireRule } from './no-unpublished-require';
import type { NoUnsupportedFeaturesRule } from './no-unsupported-features';
import type { NoUnsupportedFeaturesEsBuiltinsRule } from './no-unsupported-features/es-builtins';
import type { NoUnsupportedFeaturesEsSyntaxRule } from './no-unsupported-features/es-syntax';
import type { NoUnsupportedFeaturesNodeBuiltinsRule } from './no-unsupported-features/node-builtins';
import type { PreferGlobalBufferRule } from './prefer-global/buffer';
import type { PreferGlobalConsoleRule } from './prefer-global/console';
import type { PreferGlobalProcessRule } from './prefer-global/process';
import type { PreferGlobalTextDecoderRule } from './prefer-global/text-decoder';
import type { PreferGlobalTextEncoderRule } from './prefer-global/text-encoder';
import type { PreferGlobalUrlRule } from './prefer-global/url';
import type { PreferGlobalUrlSearchParamsRule } from './prefer-global/url-search-params';
import type { PreferPromisesDnsRule } from './prefer-promises/dns';
import type { PreferPromisesFsRule } from './prefer-promises/fs';
import type { ProcessExitAsThrowRule } from './process-exit-as-throw';
import type { ShebangRule } from './shebang';

/**
 * All N rules.
 */
export type NRules = CallbackReturnRule &
  ExportsStyleRule &
  FileExtensionInImportRule &
  GlobalRequireRule &
  HandleCallbackErrRule &
  NoCallbackLiteralRule &
  NoDeprecatedApiRule &
  NoExportsAssignRule &
  NoExtraneousImportRule &
  NoExtraneousRequireRule &
  NoMissingImportRule &
  NoMissingRequireRule &
  NoMixedRequiresRule &
  NoNewRequireRule &
  NoPathConcatRule &
  NoProcessEnvRule &
  NoProcessExitRule &
  NoRestrictedImportRule &
  NoRestrictedRequireRule &
  NoSyncRule &
  NoUnpublishedBinRule &
  NoUnpublishedImportRule &
  NoUnpublishedRequireRule &
  NoUnsupportedFeaturesEsBuiltinsRule &
  NoUnsupportedFeaturesEsSyntaxRule &
  NoUnsupportedFeaturesNodeBuiltinsRule &
  PreferGlobalBufferRule &
  PreferGlobalConsoleRule &
  PreferGlobalProcessRule &
  PreferGlobalTextDecoderRule &
  PreferGlobalTextEncoderRule &
  PreferGlobalUrlSearchParamsRule &
  PreferGlobalUrlRule &
  PreferPromisesDnsRule &
  PreferPromisesFsRule &
  ProcessExitAsThrowRule &
  ShebangRule &
  NoHideCoreModulesRule &
  NoUnsupportedFeaturesRule;
