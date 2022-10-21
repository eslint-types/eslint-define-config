/**
 * Node settings.
 */
export interface NodeSetting extends Partial<Record<string, unknown>> {
  allowModules?: string[];
  resolvePaths?: string[];
  tryExtensions?: string[];
}

/**
 * Node settings.
 */
export interface NodeSettings {
  /**
   * Node settings.
   */
  node?: NodeSetting;
}
