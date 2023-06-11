import type { SortArrayIncludesRule } from './sort-array-includes';
import type { SortClassesRule } from './sort-classes';
import type { SortEnumsRule } from './sort-enums';
import type { SortImportsRule } from './sort-imports';
import type { SortInterfacesRule } from './sort-interfaces';
import type { SortJsxPropsRule } from './sort-jsx-props';
import type { SortMapElementsRule } from './sort-map-elements';
import type { SortNamedExportsRule } from './sort-named-exports';
import type { SortNamedImportsRule } from './sort-named-imports';
import type { SortObjectTypesRule } from './sort-object-types';
import type { SortObjectsRule } from './sort-objects';
import type { SortUnionTypesRule } from './sort-union-types';

/**
 * All Perfectionist rules.
 */
export type PerfectionistRules = SortArrayIncludesRule &
  SortClassesRule &
  SortEnumsRule &
  SortImportsRule &
  SortInterfacesRule &
  SortJsxPropsRule &
  SortMapElementsRule &
  SortNamedExportsRule &
  SortNamedImportsRule &
  SortObjectTypesRule &
  SortObjectsRule &
  SortUnionTypesRule;
