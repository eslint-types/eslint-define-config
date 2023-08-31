import type { AwaitAsyncQueryRule } from './await-async-query.d.ts';
import type { AwaitAsyncUtilsRule } from './await-async-utils.d.ts';
import type { AwaitFireEventRule } from './await-fire-event.d.ts';
import type { ConsistentDataTestidRule } from './consistent-data-testid.d.ts';
import type { NoAwaitSyncEventsRule } from './no-await-sync-events.d.ts';
import type { NoAwaitSyncQueryRule } from './no-await-sync-query.d.ts';
import type { NoContainerRule } from './no-container.d.ts';
import type { NoDebuggingUtilsRule } from './no-debugging-utils.d.ts';
import type { NoDomImportRule } from './no-dom-import.d.ts';
import type { NoGlobalRegexpFlagInQueryRule } from './no-global-regexp-flag-in-query.d.ts';
import type { NoManualCleanupRule } from './no-manual-cleanup.d.ts';
import type { NoNodeAccessRule } from './no-node-access.d.ts';
import type { NoPromiseInFireEventRule } from './no-promise-in-fire-event.d.ts';
import type { NoRenderInSetupRule } from './no-render-in-setup.d.ts';
import type { NoUnnecessaryActRule } from './no-unnecessary-act.d.ts';
import type { NoWaitForEmptyCallbackRule } from './no-wait-for-empty-callback.d.ts';
import type { NoWaitForMultipleAssertionsRule } from './no-wait-for-multiple-assertions.d.ts';
import type { NoWaitForSideEffectsRule } from './no-wait-for-side-effects.d.ts';
import type { NoWaitForSnapshotRule } from './no-wait-for-snapshot.d.ts';
import type { PreferExplicitAssertRule } from './prefer-explicit-assert.d.ts';
import type { PreferFindByRule } from './prefer-find-by.d.ts';
import type { PreferPresenceQueriesRule } from './prefer-presence-queries.d.ts';
import type { PreferQueryByDisappearanceRule } from './prefer-query-by-disappearance.d.ts';
import type { PreferQueryMatchersRule } from './prefer-query-matchers.d.ts';
import type { PreferScreenQueriesRule } from './prefer-screen-queries.d.ts';
import type { PreferUserEventRule } from './prefer-user-event.d.ts';
import type { PreferWaitForRule } from './prefer-wait-for.d.ts';
import type { RenderResultNamingConventionRule } from './render-result-naming-convention.d.ts';

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
  PreferQueryMatchersRule &
  PreferScreenQueriesRule &
  PreferUserEventRule &
  PreferWaitForRule &
  RenderResultNamingConventionRule;
