/**
 * JSDoc settings.
 */
export interface JSDocSetting extends Partial<Record<string, unknown>> {
  /**
   * Disables all rules for the comment block on which a `@private` tag (or `@access private`) occurs.
   *
   * Defaults to `false`.
   *
   * Note: This has no effect with the rule `check-access` (whose purpose is to check access modifiers) or `empty-tags` (which checks `@private` itself).
   *
   * @see [mode](https://github.com/gajus/eslint-plugin-jsdoc#allow-tags-private-or-internal-to-disable-rules-for-that-comment-block)
   */
  ignorePrivate?: boolean;

  /**
   * Disables all rules for the comment block on which a `@internal` tag occurs.
   *
   * Defaults to `false`.
   *
   * Note: This has no effect with the rule `empty-tags` (which checks `@internal` itself).
   *
   * @see [mode](https://github.com/gajus/eslint-plugin-jsdoc#allow-tags-private-or-internal-to-disable-rules-for-that-comment-block)
   */
  ignoreInternal?: boolean;

  /**
   * Set to `typescript`, `closure`, or `jsdoc` (the default unless the `@typescript-eslint` parser is in use in which case `typescript` will be the default).
   *
   * @see [mode](https://github.com/gajus/eslint-plugin-jsdoc#mode)
   */
  mode?: 'typescript' | 'closure' | 'jsdoc';

  /**
   * Configure a preferred alias name for a JSDoc tag.
   *
   * @see [Alias Preference](https://github.com/gajus/eslint-plugin-jsdoc#alias-preference)
   */
  tagNamePreference?: Record<
    string,
    string | { message: string; replacement?: string } | false
  >;
  overrideReplacesDocs?: boolean;
  augmentsExtendsReplacesDocs?: boolean;
  implementsReplacesDocs?: boolean;
  preferredTypes?: unknown;
}

/**
 * JSDoc settings.
 */
export interface JSDocSettings {
  /**
   * JSDoc settings.
   *
   * @see [JSDoc settings](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-settings)
   */
  jsdoc?: JSDocSetting;
}
