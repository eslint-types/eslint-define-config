import type { Rule } from 'eslint';

export type MaybeArray<T> = T | T[];

export interface Plugin {
  name: string;
  prefix?: string;
  rules: Record<string, Rule.RuleModule>;
}
