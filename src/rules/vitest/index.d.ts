import type { ConsistentTestFilenameRule } from './consistent-test-filename.d.ts';
import type { ConsistentTestItRule } from './consistent-test-it.d.ts';
import type { ExpectExpectRule } from './expect-expect.d.ts';
import type { MaxExpectsRule } from './max-expects.d.ts';
import type { MaxNestedDescribeRule } from './max-nested-describe.d.ts';
import type { NoAliasMethodsRule } from './no-alias-methods.d.ts';
import type { NoCommentedOutTestsRule } from './no-commented-out-tests.d.ts';
import type { NoConditionalExpectRule } from './no-conditional-expect.d.ts';
import type { NoConditionalInTestRule } from './no-conditional-in-test.d.ts';
import type { NoConditionalTestsRule } from './no-conditional-tests.d.ts';
import type { NoDisabledTestsRule } from './no-disabled-tests.d.ts';
import type { NoDoneCallbackRule } from './no-done-callback.d.ts';
import type { NoDuplicateHooksRule } from './no-duplicate-hooks.d.ts';
import type { NoFocusedTestsRule } from './no-focused-tests.d.ts';
import type { NoHooksRule } from './no-hooks.d.ts';
import type { NoIdenticalTitleRule } from './no-identical-title.d.ts';
import type { NoInterpolationInSnapshotsRule } from './no-interpolation-in-snapshots.d.ts';
import type { NoLargeSnapshotsRule } from './no-large-snapshots.d.ts';
import type { NoMocksImportRule } from './no-mocks-import.d.ts';
import type { NoRestrictedMatchersRule } from './no-restricted-matchers.d.ts';
import type { NoRestrictedViMethodsRule } from './no-restricted-vi-methods.d.ts';
import type { NoStandaloneExpectRule } from './no-standalone-expect.d.ts';
import type { NoTestPrefixesRule } from './no-test-prefixes.d.ts';
import type { NoTestReturnStatementRule } from './no-test-return-statement.d.ts';
import type { PreferCalledWithRule } from './prefer-called-with.d.ts';
import type { PreferComparisonMatcherRule } from './prefer-comparison-matcher.d.ts';
import type { PreferEachRule } from './prefer-each.d.ts';
import type { PreferEqualityMatcherRule } from './prefer-equality-matcher.d.ts';
import type { PreferExpectResolvesRule } from './prefer-expect-resolves.d.ts';
import type { PreferHooksInOrderRule } from './prefer-hooks-in-order.d.ts';
import type { PreferHooksOnTopRule } from './prefer-hooks-on-top.d.ts';
import type { PreferLowercaseTitleRule } from './prefer-lowercase-title.d.ts';
import type { PreferMockPromiseShorthandRule } from './prefer-mock-promise-shorthand.d.ts';
import type { PreferSnapshotHintRule } from './prefer-snapshot-hint.d.ts';
import type { PreferSpyOnRule } from './prefer-spy-on.d.ts';
import type { PreferStrictEqualRule } from './prefer-strict-equal.d.ts';
import type { PreferToBeFalsyRule } from './prefer-to-be-falsy.d.ts';
import type { PreferToBeObjectRule } from './prefer-to-be-object.d.ts';
import type { PreferToBeTruthyRule } from './prefer-to-be-truthy.d.ts';
import type { PreferToBeRule } from './prefer-to-be.d.ts';
import type { PreferToContainRule } from './prefer-to-contain.d.ts';
import type { PreferToHaveLengthRule } from './prefer-to-have-length.d.ts';
import type { PreferTodoRule } from './prefer-todo.d.ts';
import type { RequireHookRule } from './require-hook.d.ts';
import type { RequireToThrowMessageRule } from './require-to-throw-message.d.ts';
import type { RequireTopLevelDescribeRule } from './require-top-level-describe.d.ts';
import type { ValidDescribeCallbackRule } from './valid-describe-callback.d.ts';
import type { ValidExpectRule } from './valid-expect.d.ts';
import type { ValidTitleRule } from './valid-title.d.ts';

/**
 * All Vitest rules.
 */
export type VitestRules = PreferLowercaseTitleRule &
  MaxNestedDescribeRule &
  NoIdenticalTitleRule &
  NoFocusedTestsRule &
  NoConditionalTestsRule &
  ExpectExpectRule &
  ConsistentTestItRule &
  PreferToBeRule &
  NoHooksRule &
  NoRestrictedViMethodsRule &
  ConsistentTestFilenameRule &
  MaxExpectsRule &
  NoAliasMethodsRule &
  NoCommentedOutTestsRule &
  NoConditionalExpectRule &
  NoConditionalInTestRule &
  NoDisabledTestsRule &
  NoDoneCallbackRule &
  NoDuplicateHooksRule &
  NoLargeSnapshotsRule &
  NoInterpolationInSnapshotsRule &
  NoMocksImportRule &
  NoRestrictedMatchersRule &
  NoStandaloneExpectRule &
  NoTestPrefixesRule &
  NoTestReturnStatementRule &
  PreferCalledWithRule &
  ValidTitleRule &
  ValidExpectRule &
  PreferToBeFalsyRule &
  PreferToBeObjectRule &
  PreferToBeTruthyRule &
  PreferToHaveLengthRule &
  PreferEqualityMatcherRule &
  PreferStrictEqualRule &
  PreferExpectResolvesRule &
  PreferEachRule &
  PreferHooksOnTopRule &
  PreferHooksInOrderRule &
  PreferMockPromiseShorthandRule &
  PreferSnapshotHintRule &
  ValidDescribeCallbackRule &
  RequireTopLevelDescribeRule &
  RequireToThrowMessageRule &
  RequireHookRule &
  PreferTodoRule &
  PreferSpyOnRule &
  PreferComparisonMatcherRule &
  PreferToContainRule;
