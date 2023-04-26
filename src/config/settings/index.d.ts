import type { ImportSettings } from './import';
import type { JSDocSettings } from './jsdoc';
import type { JsxA11ySettings } from './jsx-a11y';
import type { MdxSettings } from './mdx';
import type { NodeSettings } from './node';
import type { ReactSettings } from './react';

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
    Partial<Record<string, unknown>> {}
