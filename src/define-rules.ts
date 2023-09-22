import type { EslintRules } from './rules/eslint';
import type { RuleConfig } from './rules/rule-config';
import type { TypeScriptRules } from './rules/typescript-eslint';

type RemovePrefix<
  TPrefix extends string,
  TString extends string,
> = TString extends `${TPrefix}${infer T}` ? T : never;

export function defineEslintRules(
  rules: Partial<{
    [TKey in keyof EslintRules]: EslintRules[TKey];
  }>,
): Partial<EslintRules> {
  return defineRules('eslint', rules);
}

export function defineTypeScriptRules(
  rules: Partial<{
    [TKey in RemovePrefix<
      '@typescript-eslint/',
      keyof TypeScriptRules
    >]: TypeScriptRules[`@typescript-eslint/${TKey}`];
  }>,
): Partial<TypeScriptRules> {
  return defineRules('@typescript-eslint', rules);
}

function defineRules<
  TOutput,
  TRules extends { [x: string]: RuleConfig | undefined },
>(pluginName: string, rules: TRules): TOutput {
  if (pluginName === 'eslint') {
    return rules as unknown as TOutput;
  }

  return Object.entries(rules).reduce((prev, [key, value]) => {
    // @ts-expect-error: do it
    prev[`${pluginName}/${key}`] = value;
    return prev;
  }, {} as TOutput);
}
