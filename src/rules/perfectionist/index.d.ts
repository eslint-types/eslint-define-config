import type { SortArrayIncludesRule } from './sort-array-includes';
import type { SortAstroAttributesRule } from './sort-astro-attributes';
import type { SortClassesRule } from './sort-classes';
import type { SortEnumsRule } from './sort-enums';
import type { SortExportsRule } from './sort-exports';
import type { SortImportsRule } from './sort-imports';
import type { SortInterfacesRule } from './sort-interfaces';
import type { SortJsxPropsRule } from './sort-jsx-props';
import type { SortMapsRule } from './sort-maps';
import type { SortNamedExportsRule } from './sort-named-exports';
import type { SortNamedImportsRule } from './sort-named-imports';
import type { SortObjectTypesRule } from './sort-object-types';
import type { SortObjectsRule } from './sort-objects';
import type { SortSvelteAttributesRule } from './sort-svelte-attributes';
import type { SortUnionTypesRule } from './sort-union-types';
import type { SortVueAttributesRule } from './sort-vue-attributes';

/**
 * All Perfectionist rules.
 */
export type PerfectionistRules = SortArrayIncludesRule &
  SortAstroAttributesRule &
  SortClassesRule &
  SortEnumsRule &
  SortExportsRule &
  SortImportsRule &
  SortInterfacesRule &
  SortJsxPropsRule &
  SortMapsRule &
  SortNamedExportsRule &
  SortNamedImportsRule &
  SortObjectTypesRule &
  SortObjectsRule &
  SortSvelteAttributesRule &
  SortUnionTypesRule &
  SortVueAttributesRule;
