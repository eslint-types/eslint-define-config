import type { CognitiveComplexityRule } from './cognitive-complexity.d.ts';
import type { ElseifWithoutElseRule } from './elseif-without-else.d.ts';
import type { MaxSwitchCasesRule } from './max-switch-cases.d.ts';
import type { NoAllDuplicatedBranchesRule } from './no-all-duplicated-branches.d.ts';
import type { NoCollapsibleIfRule } from './no-collapsible-if.d.ts';
import type { NoCollectionSizeMischeckRule } from './no-collection-size-mischeck.d.ts';
import type { NoDuplicateStringRule } from './no-duplicate-string.d.ts';
import type { NoDuplicatedBranchesRule } from './no-duplicated-branches.d.ts';
import type { NoElementOverwriteRule } from './no-element-overwrite.d.ts';
import type { NoEmptyCollectionRule } from './no-empty-collection.d.ts';
import type { NoExtraArgumentsRule } from './no-extra-arguments.d.ts';
import type { NoGratuitousExpressionsRule } from './no-gratuitous-expressions.d.ts';
import type { NoIdenticalConditionsRule } from './no-identical-conditions.d.ts';
import type { NoIdenticalExpressionsRule } from './no-identical-expressions.d.ts';
import type { NoIdenticalFunctionsRule } from './no-identical-functions.d.ts';
import type { NoIgnoredReturnRule } from './no-ignored-return.d.ts';
import type { NoInvertedBooleanCheckRule } from './no-inverted-boolean-check.d.ts';
import type { NoNestedSwitchRule } from './no-nested-switch.d.ts';
import type { NoNestedTemplateLiteralsRule } from './no-nested-template-literals.d.ts';
import type { NoOneIterationLoopRule } from './no-one-iteration-loop.d.ts';
import type { NoRedundantBooleanRule } from './no-redundant-boolean.d.ts';
import type { NoRedundantJumpRule } from './no-redundant-jump.d.ts';
import type { NoSameLineConditionalRule } from './no-same-line-conditional.d.ts';
import type { NoSmallSwitchRule } from './no-small-switch.d.ts';
import type { NoUnusedCollectionRule } from './no-unused-collection.d.ts';
import type { NoUseOfEmptyReturnValueRule } from './no-use-of-empty-return-value.d.ts';
import type { NoUselessCatchRule } from './no-useless-catch.d.ts';
import type { NonExistentOperatorRule } from './non-existent-operator.d.ts';
import type { PreferImmediateReturnRule } from './prefer-immediate-return.d.ts';
import type { PreferObjectLiteralRule } from './prefer-object-literal.d.ts';
import type { PreferSingleBooleanReturnRule } from './prefer-single-boolean-return.d.ts';
import type { PreferWhileRule } from './prefer-while.d.ts';

/**
 * All SonarJS rules.
 */
export type SonarJSRules = CognitiveComplexityRule &
  ElseifWithoutElseRule &
  MaxSwitchCasesRule &
  NoAllDuplicatedBranchesRule &
  NoCollapsibleIfRule &
  NoCollectionSizeMischeckRule &
  NoDuplicateStringRule &
  NoDuplicatedBranchesRule &
  NoElementOverwriteRule &
  NoEmptyCollectionRule &
  NoExtraArgumentsRule &
  NoGratuitousExpressionsRule &
  NoIdenticalConditionsRule &
  NoIdenticalExpressionsRule &
  NoIdenticalFunctionsRule &
  NoIgnoredReturnRule &
  NoInvertedBooleanCheckRule &
  NoNestedSwitchRule &
  NoNestedTemplateLiteralsRule &
  NoOneIterationLoopRule &
  NoRedundantBooleanRule &
  NoRedundantJumpRule &
  NoSameLineConditionalRule &
  NoSmallSwitchRule &
  NoUnusedCollectionRule &
  NoUseOfEmptyReturnValueRule &
  NoUselessCatchRule &
  NonExistentOperatorRule &
  PreferImmediateReturnRule &
  PreferObjectLiteralRule &
  PreferSingleBooleanReturnRule &
  PreferWhileRule;
