import type { Environments } from './env';
import type { Rules } from './rules';

/**
 *
 */
export interface Override {
  files: string[];
  env?: Environments;
  rules?: Rules;
}

/**
 *
 */
export type Overrides = Array<Override>;
