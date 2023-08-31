import type { ConsistentTypeSpecifierStyleRule } from './consistent-type-specifier-style.d.ts';
import type { DefaultRule } from './default.d.ts';
import type { DynamicImportChunknameRule } from './dynamic-import-chunkname.d.ts';
import type { ExportRule } from './export.d.ts';
import type { ExportsLastRule } from './exports-last.d.ts';
import type { ExtensionsRule } from './extensions.d.ts';
import type { FirstRule } from './first.d.ts';
import type { GroupExportsRule } from './group-exports.d.ts';
import type { ImportsFirstRule } from './imports-first.d.ts';
import type { MaxDependenciesRule } from './max-dependencies.d.ts';
import type { NamedRule } from './named.d.ts';
import type { NamespaceRule } from './namespace.d.ts';
import type { NewlineAfterImportRule } from './newline-after-import.d.ts';
import type { NoAbsolutePathRule } from './no-absolute-path.d.ts';
import type { NoAmdRule } from './no-amd.d.ts';
import type { NoAnonymousDefaultExportRule } from './no-anonymous-default-export.d.ts';
import type { NoCommonjsRule } from './no-commonjs.d.ts';
import type { NoCycleRule } from './no-cycle.d.ts';
import type { NoDefaultExportRule } from './no-default-export.d.ts';
import type { NoDeprecatedRule } from './no-deprecated.d.ts';
import type { NoDuplicatesRule } from './no-duplicates.d.ts';
import type { NoDynamicRequireRule } from './no-dynamic-require.d.ts';
import type { NoEmptyNamedBlocksRule } from './no-empty-named-blocks.d.ts';
import type { NoExtraneousDependenciesRule } from './no-extraneous-dependencies.d.ts';
import type { NoImportModuleExportsRule } from './no-import-module-exports.d.ts';
import type { NoInternalModulesRule } from './no-internal-modules.d.ts';
import type { NoMutableExportsRule } from './no-mutable-exports.d.ts';
import type { NoNamedAsDefaultMemberRule } from './no-named-as-default-member.d.ts';
import type { NoNamedAsDefaultRule } from './no-named-as-default.d.ts';
import type { NoNamedDefaultRule } from './no-named-default.d.ts';
import type { NoNamedExportRule } from './no-named-export.d.ts';
import type { NoNamespaceRule } from './no-namespace.d.ts';
import type { NoNodejsModulesRule } from './no-nodejs-modules.d.ts';
import type { NoRelativePackagesRule } from './no-relative-packages.d.ts';
import type { NoRelativeParentImportsRule } from './no-relative-parent-imports.d.ts';
import type { NoRestrictedPathsRule } from './no-restricted-paths.d.ts';
import type { NoSelfImportRule } from './no-self-import.d.ts';
import type { NoUnassignedImportRule } from './no-unassigned-import.d.ts';
import type { NoUnresolvedRule } from './no-unresolved.d.ts';
import type { NoUnusedModulesRule } from './no-unused-modules.d.ts';
import type { NoUselessPathSegmentsRule } from './no-useless-path-segments.d.ts';
import type { NoWebpackLoaderSyntaxRule } from './no-webpack-loader-syntax.d.ts';
import type { OrderRule } from './order.d.ts';
import type { PreferDefaultExportRule } from './prefer-default-export.d.ts';
import type { UnambiguousRule } from './unambiguous.d.ts';

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
