/**
 * JSX A11y settings.
 *
 * @see [JSX A11y settings](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
 */
export interface JsxA11ySettings extends Partial<Record<string, unknown>> {
  'jsx-a11y'?: {
    components?: Record<string, string>;
  };
}
