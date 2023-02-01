import type { ConsistentTypeSpecifierStyleRule } from './consistent-type-specifier-style';
import type { DefaultRule } from './default';
import type { DynamicImportChunknameRule } from './dynamic-import-chunkname';
import type { ExportRule } from './export';
import type { ExportsLastRule } from './exports-last';
import type { ExtensionsRule } from './extensions';
import type { FirstRule } from './first';
import type { GroupExportsRule } from './group-exports';
import type { ImportsFirstRule } from './imports-first';
import type { MaxDependenciesRule } from './max-dependencies';
import type { NamedRule } from './named';
import type { NamespaceRule } from './namespace';
import type { NewlineAfterImportRule } from './newline-after-import';
import type { NoAbsolutePathRule } from './no-absolute-path';
import type { NoAmdRule } from './no-amd';
import type { NoAnonymousDefaultExportRule } from './no-anonymous-default-export';
import type { NoCommonjsRule } from './no-commonjs';
import type { NoCycleRule } from './no-cycle';
import type { NoDefaultExportRule } from './no-default-export';
import type { NoDeprecatedRule } from './no-deprecated';
import type { NoDuplicatesRule } from './no-duplicates';
import type { NoDynamicRequireRule } from './no-dynamic-require';
import type { NoEmptyNamedBlocksRule } from './no-empty-named-blocks';
import type { NoExtraneousDependenciesRule } from './no-extraneous-dependencies';
import type { NoImportModuleExportsRule } from './no-import-module-exports';
import type { NoInternalModulesRule } from './no-internal-modules';
import type { NoMutableExportsRule } from './no-mutable-exports';
import type { NoNamedAsDefaultRule } from './no-named-as-default';
import type { NoNamedAsDefaultMemberRule } from './no-named-as-default-member';
import type { NoNamedDefaultRule } from './no-named-default';
import type { NoNamedExportRule } from './no-named-export';
import type { NoNamespaceRule } from './no-namespace';
import type { NoNodejsModulesRule } from './no-nodejs-modules';
import type { NoRelativePackagesRule } from './no-relative-packages';
import type { NoRelativeParentImportsRule } from './no-relative-parent-imports';
import type { NoRestrictedPathsRule } from './no-restricted-paths';
import type { NoSelfImportRule } from './no-self-import';
import type { NoUnassignedImportRule } from './no-unassigned-import';
import type { NoUnresolvedRule } from './no-unresolved';
import type { NoUnusedModulesRule } from './no-unused-modules';
import type { NoUselessPathSegmentsRule } from './no-useless-path-segments';
import type { NoWebpackLoaderSyntaxRule } from './no-webpack-loader-syntax';
import type { OrderRule } from './order';
import type { PreferDefaultExportRule } from './prefer-default-export';
import type { UnambiguousRule } from './unambiguous';

/**
 * All Import rules.
 */
export type ImportRules = NoUnresolvedRule &
  NamedRule &
  DefaultRule &
  NamespaceRule &
  NoNamespaceRule &
  ExportRule &
  NoMutableExportsRule &
  ExtensionsRule &
  NoRestrictedPathsRule &
  NoInternalModulesRule &
  GroupExportsRule &
  NoRelativePackagesRule &
  NoRelativeParentImportsRule &
  ConsistentTypeSpecifierStyleRule &
  NoSelfImportRule &
  NoCycleRule &
  NoNamedDefaultRule &
  NoNamedAsDefaultRule &
  NoNamedAsDefaultMemberRule &
  NoAnonymousDefaultExportRule &
  NoUnusedModulesRule &
  NoCommonjsRule &
  NoAmdRule &
  NoDuplicatesRule &
  FirstRule &
  MaxDependenciesRule &
  NoExtraneousDependenciesRule &
  NoAbsolutePathRule &
  NoNodejsModulesRule &
  NoWebpackLoaderSyntaxRule &
  OrderRule &
  NewlineAfterImportRule &
  PreferDefaultExportRule &
  NoDefaultExportRule &
  NoNamedExportRule &
  NoDynamicRequireRule &
  UnambiguousRule &
  NoUnassignedImportRule &
  NoUselessPathSegmentsRule &
  DynamicImportChunknameRule &
  NoImportModuleExportsRule &
  NoEmptyNamedBlocksRule &
  ExportsLastRule &
  NoDeprecatedRule &
  ImportsFirstRule;
