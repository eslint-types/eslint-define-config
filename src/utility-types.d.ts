/**
 * A literal type that supports custom further strings but preserves autocompletion in IDEs.
 *
 * @see [copied from issue](https://github.com/microsoft/TypeScript/issues/29729#issuecomment-471566609)
 */
export type LiteralUnion<TUnion extends TBase, TBase = string> =
  | TUnion
  | (TBase & { zz_IGNORE_ME?: never });
