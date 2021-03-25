import type { JSDocSettings } from './jsdoc';

/**
 * Settings.
 */
export interface Settings extends JSDocSettings, Partial<Record<string, unknown>> {}
