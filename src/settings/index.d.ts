import type { ImportSettings } from './import';
import type { JSDocSettings } from './jsdoc';
import type { NodeSettings } from './node';

/**
 * Settings.
 */
export interface Settings extends ImportSettings, JSDocSettings, NodeSettings, Partial<Record<string, unknown>> {}
