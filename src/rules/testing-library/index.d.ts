import type { AwaitAsyncQueryRule } from './await-async-query';
import type { AwaitAsyncUtilsRule } from './await-async-utils';
import type { AwaitFireEventRule } from './await-fire-event';
import type { ConsistentDataTestidRule } from './consistent-data-testid';
import type { NoAwaitSyncEventsRule } from './no-await-sync-events';
import type { NoAwaitSyncQueryRule } from './no-await-sync-query';
import type { NoContainerRule } from './no-container';
import type { NoDebuggingUtilsRule } from './no-debugging-utils';
import type { NoDomImportRule } from './no-dom-import';
import type { NoGlobalRegexpFlagInQueryRule } from './no-global-regexp-flag-in-query';
import type { NoManualCleanupRule } from './no-manual-cleanup';
import type { NoNodeAccessRule } from './no-node-access';
import type { NoPromiseInFireEventRule } from './no-promise-in-fire-event';
import type { NoRenderInSetupRule } from './no-render-in-setup';
import type { NoUnnecessaryActRule } from './no-unnecessary-act';
import type { NoWaitForEmptyCallbackRule } from './no-wait-for-empty-callback';
import type { NoWaitForMultipleAssertionsRule } from './no-wait-for-multiple-assertions';
import type { NoWaitForSideEffectsRule } from './no-wait-for-side-effects';
import type { NoWaitForSnapshotRule } from './no-wait-for-snapshot';
import type { PreferExplicitAssertRule } from './prefer-explicit-assert';
import type { PreferFindByRule } from './prefer-find-by';
import type { PreferPresenceQueriesRule } from './prefer-presence-queries';
import type { PreferQueryByDisappearanceRule } from './prefer-query-by-disappearance';
import type { PreferScreenQueriesRule } from './prefer-screen-queries';
import type { PreferUserEventRule } from './prefer-user-event';
import type { PreferWaitForRule } from './prefer-wait-for';
import type { RenderResultNamingConventionRule } from './render-result-naming-convention';

/**
 * All TestingLibrary rules.
 */
export type TestingLibraryRules = AwaitAsyncQueryRule &
  AwaitAsyncUtilsRule &
  AwaitFireEventRule &
  ConsistentDataTestidRule &
  NoAwaitSyncEventsRule &
  NoAwaitSyncQueryRule &
  NoContainerRule &
  NoDebuggingUtilsRule &
  NoDomImportRule &
  NoGlobalRegexpFlagInQueryRule &
  NoManualCleanupRule &
  NoNodeAccessRule &
  NoPromiseInFireEventRule &
  NoRenderInSetupRule &
  NoUnnecessaryActRule &
  NoWaitForEmptyCallbackRule &
  NoWaitForMultipleAssertionsRule &
  NoWaitForSideEffectsRule &
  NoWaitForSnapshotRule &
  PreferExplicitAssertRule &
  PreferFindByRule &
  PreferPresenceQueriesRule &
  PreferQueryByDisappearanceRule &
  PreferScreenQueriesRule &
  PreferUserEventRule &
  PreferWaitForRule &
  RenderResultNamingConventionRule;
