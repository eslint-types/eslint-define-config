import type { ImportSettings } from './import.d.ts';
import type { JSDocSettings } from './jsdoc.d.ts';
import type { JsxA11ySettings } from './jsx-a11y.d.ts';
import type { MdxSettings } from './mdx.d.ts';
import type { NodeSettings } from './node.d.ts';
import type { ReactSettings } from './react.d.ts';

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
