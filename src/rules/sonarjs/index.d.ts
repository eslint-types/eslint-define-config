import type { CognitiveComplexityRule } from './cognitive-complexity';
import type { ElseifWithoutElseRule } from './elseif-without-else';
import type { MaxSwitchCasesRule } from './max-switch-cases';
import type { NoAllDuplicatedBranchesRule } from './no-all-duplicated-branches';
import type { NoCollapsibleIfRule } from './no-collapsible-if';
import type { NoCollectionSizeMischeckRule } from './no-collection-size-mischeck';
import type { NoDuplicateStringRule } from './no-duplicate-string';
import type { NoDuplicatedBranchesRule } from './no-duplicated-branches';
import type { NoElementOverwriteRule } from './no-element-overwrite';
import type { NoEmptyCollectionRule } from './no-empty-collection';
import type { NoExtraArgumentsRule } from './no-extra-arguments';
import type { NoGratuitousExpressionsRule } from './no-gratuitous-expressions';
import type { NoIdenticalConditionsRule } from './no-identical-conditions';
import type { NoIdenticalExpressionsRule } from './no-identical-expressions';
import type { NoIdenticalFunctionsRule } from './no-identical-functions';
import type { NoIgnoredReturnRule } from './no-ignored-return';
import type { NoInvertedBooleanCheckRule } from './no-inverted-boolean-check';
import type { NoNestedSwitchRule } from './no-nested-switch';
import type { NoNestedTemplateLiteralsRule } from './no-nested-template-literals';
import type { NoOneIterationLoopRule } from './no-one-iteration-loop';
import type { NoRedundantBooleanRule } from './no-redundant-boolean';
import type { NoRedundantJumpRule } from './no-redundant-jump';
import type { NoSameLineConditionalRule } from './no-same-line-conditional';
import type { NoSmallSwitchRule } from './no-small-switch';
import type { NoUnusedCollectionRule } from './no-unused-collection';
import type { NoUseOfEmptyReturnValueRule } from './no-use-of-empty-return-value';
import type { NoUselessCatchRule } from './no-useless-catch';
import type { NonExistentOperatorRule } from './non-existent-operator';
import type { PreferImmediateReturnRule } from './prefer-immediate-return';
import type { PreferObjectLiteralRule } from './prefer-object-literal';
import type { PreferSingleBooleanReturnRule } from './prefer-single-boolean-return';
import type { PreferWhileRule } from './prefer-while';

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
