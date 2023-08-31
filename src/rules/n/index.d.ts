import type { CallbackReturnRule } from './callback-return.d.ts';
import type { ExportsStyleRule } from './exports-style.d.ts';
import type { FileExtensionInImportRule } from './file-extension-in-import.d.ts';
import type { GlobalRequireRule } from './global-require.d.ts';
import type { HandleCallbackErrRule } from './handle-callback-err.d.ts';
import type { NoCallbackLiteralRule } from './no-callback-literal.d.ts';
import type { NoDeprecatedApiRule } from './no-deprecated-api.d.ts';
import type { NoExportsAssignRule } from './no-exports-assign.d.ts';
import type { NoExtraneousImportRule } from './no-extraneous-import.d.ts';
import type { NoExtraneousRequireRule } from './no-extraneous-require.d.ts';
import type { NoHideCoreModulesRule } from './no-hide-core-modules.d.ts';
import type { NoMissingImportRule } from './no-missing-import.d.ts';
import type { NoMissingRequireRule } from './no-missing-require.d.ts';
import type { NoMixedRequiresRule } from './no-mixed-requires.d.ts';
import type { NoNewRequireRule } from './no-new-require.d.ts';
import type { NoPathConcatRule } from './no-path-concat.d.ts';
import type { NoProcessEnvRule } from './no-process-env.d.ts';
import type { NoProcessExitRule } from './no-process-exit.d.ts';
import type { NoRestrictedImportRule } from './no-restricted-import.d.ts';
import type { NoRestrictedRequireRule } from './no-restricted-require.d.ts';
import type { NoSyncRule } from './no-sync.d.ts';
import type { NoUnpublishedBinRule } from './no-unpublished-bin.d.ts';
import type { NoUnpublishedImportRule } from './no-unpublished-import.d.ts';
import type { NoUnpublishedRequireRule } from './no-unpublished-require.d.ts';
import type { NoUnsupportedFeaturesRule } from './no-unsupported-features.d.ts';
import type { NoUnsupportedFeaturesEsBuiltinsRule } from './no-unsupported-features/es-builtins.d.ts';
import type { NoUnsupportedFeaturesEsSyntaxRule } from './no-unsupported-features/es-syntax.d.ts';
import type { NoUnsupportedFeaturesNodeBuiltinsRule } from './no-unsupported-features/node-builtins.d.ts';
import type { PreferGlobalBufferRule } from './prefer-global/buffer.d.ts';
import type { PreferGlobalConsoleRule } from './prefer-global/console.d.ts';
import type { PreferGlobalProcessRule } from './prefer-global/process.d.ts';
import type { PreferGlobalTextDecoderRule } from './prefer-global/text-decoder.d.ts';
import type { PreferGlobalTextEncoderRule } from './prefer-global/text-encoder.d.ts';
import type { PreferGlobalUrlSearchParamsRule } from './prefer-global/url-search-params.d.ts';
import type { PreferGlobalUrlRule } from './prefer-global/url.d.ts';
import type { PreferPromisesDnsRule } from './prefer-promises/dns.d.ts';
import type { PreferPromisesFsRule } from './prefer-promises/fs.d.ts';
import type { ProcessExitAsThrowRule } from './process-exit-as-throw.d.ts';
import type { ShebangRule } from './shebang.d.ts';

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
