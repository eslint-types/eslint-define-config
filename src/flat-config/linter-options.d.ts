/**
 * An object containing settings related to the linting process.
 */
export interface LinterOptions {
  /**
   * A boolean value indicating if inline configuration is allowed.
   *
   * @see [Disabling inline configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#disabling-inline-configuration)
   */
  noInlineConfig?: boolean;

  /**
   * A boolean value indicating if unused disable directives should be tracked and reported.
   *
   * @see [Reporting unused disable directives](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#reporting-unused-disable-directives)
   */
  reportUnusedDisableDirectives?: boolean;
}
