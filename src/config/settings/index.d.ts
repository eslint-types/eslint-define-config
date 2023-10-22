import type { ImportSettings } from './import';
import type { JSDocSettings } from './jsdoc';
import type { JsxA11ySettings } from './jsx-a11y';
import type { MdxSettings } from './mdx';
import type { NodeSettings } from './node';
import type { ReactSettings } from './react';

/**
 * This is a special exported interface for other packages to declare
 * additional settings that should bail out for eslint settings. For example
 * `'eslint-plugin-jsx-a11y'` can declare it like so in its `d.ts`:
 *
 * ```ts
 * declare module 'eslint-define-config' {
 *   export interface CustomSettings {
 *     'jsx-a11y': {
 *       components?: Record<string, string>;
 *     };
 *   }
 * }
 * ```
 */
export interface CustomSettings {}

/**
 * Settings.
 */
export interface Settings
  extends ImportSettings,
    JSDocSettings,
    JsxA11ySettings,
    MdxSettings,
    NodeSettings,
    ReactSettings,
    Partial<CustomSettings>,
    Partial<Record<string, unknown>> {}
