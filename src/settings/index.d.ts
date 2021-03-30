import type { ImportSettings } from './import';
import type { JSDocSettings } from './jsdoc';

/**
 * Settings.
 */
export interface Settings extends ImportSettings, JSDocSettings, Partial<Record<string, unknown>> {}
