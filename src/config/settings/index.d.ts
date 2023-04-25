import type { ImportSettings } from './import';
import type { JSDocSettings } from './jsdoc';
import type { MdxSettings } from './mdx';
import type { NodeSettings } from './node';
import type { ReactSettings } from './react';

/**
 * Settings.
 */
export interface Settings
  extends ImportSettings,
    JSDocSettings,
    MdxSettings,
    NodeSettings,
    ReactSettings,
    Partial<Record<string, unknown>> {}
