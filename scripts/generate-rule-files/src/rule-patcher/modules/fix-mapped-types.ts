import type { NodePath } from '@babel/traverse';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import type { RulePatcherModule } from '../contracts';

/**
 * Check if the given interface include a mapped type
 */
const isInterfaceIncludingMappedType = (
  declaration: t.TSInterfaceDeclaration,
): boolean => {
  return declaration.body.body.some((member) => t.isTSIndexSignature(member));
};

/**
 * Check if the given type include a mapped type
 */
const isTypeIncludingMappedType = (type: t.TSTypeLiteral): boolean => {
  return type.members.some((member) => t.isTSIndexSignature(member));
};

/**
 * If the given type include a mapped type, we automatically
 * extract all the members and create a union with them.
 */
const convertMappedTypesToUnion = (type: t.TSTypeLiteral): any => {
  return t.tsUnionType(type.members.map((member) => t.tsTypeLiteral([member])));
};

/**
 * Convert the given interface to a type alias
 */
const convertInterfaceToTypeAlias = (
  path: NodePath<t.TSInterfaceDeclaration>,
): void => {
  const newInterface = t.tSTypeAliasDeclaration(
    path.node.id,
    null,
    t.tsTypeLiteral(path.node.body.body),
  );

  path.replaceWith(newInterface);
};

/**
 * Called when a TSTypeAliasDeclaration or TSInterfaceDeclaration is traversed.
 *
 * Will create the final union and replace the node with it.
 */
const onTypeOrInterfaceFound = (
  path: NodePath<t.TSTypeAliasDeclaration | t.TSInterfaceDeclaration>,
): boolean => {
  if (t.isTSInterfaceDeclaration(path.node)) {
    convertInterfaceToTypeAlias(path as NodePath<t.TSInterfaceDeclaration>);
  }

  if (!t.isTSTypeAliasDeclaration(path.node)) {
    return false;
  }

  const { node } = path;
  const { typeAnnotation } = node;

  if (!t.isTSTypeLiteral(typeAnnotation)) {
    return false;
  }

  if (!isTypeIncludingMappedType(typeAnnotation)) {
    return false;
  }

  const union = convertMappedTypesToUnion(typeAnnotation);
  path.node.typeAnnotation = union;

  return true;
};

/**
 * Convert mapped types that includes another members to an union.
 *
 * Example:
 *
 * ```
 * type FileExtensionInImportConfig = {
 *   tryExtensions?: string[];
 *   [k: string]: 'always' | 'never';
 * };
 * ```
 *
 * Would become :
 * ```
 * type FileExtensionInImportConfig =
 *  | { tryExtensions?: string[] }
 *  | { [k: string]: 'always' | 'never' }
 * ```
 *
 * See #141
 */
export const fixMappedTypes: RulePatcherModule = {
  name: 'fix-mapped-types',
  patch: ({ ast }) => {
    let hasPatched = false;

    traverse(ast, {
      TSTypeAliasDeclaration: (path) => {
        hasPatched = onTypeOrInterfaceFound(path);
      },
      TSInterfaceDeclaration: (path) => {
        if (!isInterfaceIncludingMappedType(path.node)) {
          return;
        }

        hasPatched = onTypeOrInterfaceFound(path);
      },
    });

    return { hasPatched, ast };
  },
};
