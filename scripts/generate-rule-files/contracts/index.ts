import type { Rule } from 'eslint';

export type MaybeArray<T> = T | T[];

export type PluginRules = Record<string, Rule.RuleModule>;

export interface Plugin {
  name: string;
  prefix?: string;
  module: string;
  rules?: PluginRules;
}
