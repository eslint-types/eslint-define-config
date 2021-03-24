import type { Rules } from './rules';

/**
 *
 */
export interface Override {
  files: string[];
  rules: Rules;
}

/**
 *
 */
export type Overrides = Array<Override>;
