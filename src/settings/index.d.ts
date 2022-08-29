import type { ImportSettings } from './import';
import type { JSDocSettings } from './jsdoc';
import type { MdxSettings } from './mdx';
import type { NodeSettings } from './node';

/**
 * Settings.
 */
export interface Settings
  extends ImportSettings,
    JSDocSettings,
    MdxSettings,
    NodeSettings,
    Partial<Record<string, unknown>> {}
