import type { ConsistentTestFilenameRule } from './consistent-test-filename';
import type { ConsistentTestItRule } from './consistent-test-it';
import type { ExpectExpectRule } from './expect-expect';
import type { MaxExpectsRule } from './max-expects';
import type { MaxNestedDescribeRule } from './max-nested-describe';
import type { NoAliasMethodsRule } from './no-alias-methods';
import type { NoCommentedOutTestsRule } from './no-commented-out-tests';
import type { NoConditionalExpectRule } from './no-conditional-expect';
import type { NoConditionalInTestRule } from './no-conditional-in-test';
import type { NoConditionalTestsRule } from './no-conditional-tests';
import type { NoDisabledTestsRule } from './no-disabled-tests';
import type { NoDoneCallbackRule } from './no-done-callback';
import type { NoDuplicateHooksRule } from './no-duplicate-hooks';
import type { NoFocusedTestsRule } from './no-focused-tests';
import type { NoHooksRule } from './no-hooks';
import type { NoIdenticalTitleRule } from './no-identical-title';
import type { NoInterpolationInSnapshotsRule } from './no-interpolation-in-snapshots';
import type { NoLargeSnapshotsRule } from './no-large-snapshots';
import type { NoMocksImportRule } from './no-mocks-import';
import type { NoRestrictedMatchersRule } from './no-restricted-matchers';
import type { NoRestrictedViMethodsRule } from './no-restricted-vi-methods';
import type { NoStandaloneExpectRule } from './no-standalone-expect';
import type { NoTestPrefixesRule } from './no-test-prefixes';
import type { NoTestReturnStatementRule } from './no-test-return-statement';
import type { PreferCalledWithRule } from './prefer-called-with';
import type { PreferComparisonMatcherRule } from './prefer-comparison-matcher';
import type { PreferEachRule } from './prefer-each';
import type { PreferEqualityMatcherRule } from './prefer-equality-matcher';
import type { PreferExpectResolvesRule } from './prefer-expect-resolves';
import type { PreferHooksInOrderRule } from './prefer-hooks-in-order';
import type { PreferHooksOnTopRule } from './prefer-hooks-on-top';
import type { PreferLowercaseTitleRule } from './prefer-lowercase-title';
import type { PreferMockPromiseShorthandRule } from './prefer-mock-promise-shorthand';
import type { PreferSnapshotHintRule } from './prefer-snapshot-hint';
import type { PreferSpyOnRule } from './prefer-spy-on';
import type { PreferStrictEqualRule } from './prefer-strict-equal';
import type { PreferToBeRule } from './prefer-to-be';
import type { PreferToBeFalsyRule } from './prefer-to-be-falsy';
import type { PreferToBeObjectRule } from './prefer-to-be-object';
import type { PreferToBeTruthyRule } from './prefer-to-be-truthy';
import type { PreferToContainRule } from './prefer-to-contain';
import type { PreferToHaveLengthRule } from './prefer-to-have-length';
import type { PreferTodoRule } from './prefer-todo';
import type { RequireHookRule } from './require-hook';
import type { RequireToThrowMessageRule } from './require-to-throw-message';
import type { RequireTopLevelDescribeRule } from './require-top-level-describe';
import type { ValidDescribeCallbackRule } from './valid-describe-callback';
import type { ValidExpectRule } from './valid-expect';
import type { ValidTitleRule } from './valid-title';

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
