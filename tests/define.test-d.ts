import { describe, expectTypeOf, test } from 'vitest';
import type { ESLintConfig, FlatESLintConfig } from '../src';
import { defineConfig, defineFlatConfig } from '../src';

describe('define', () => {
  test('define empty config', () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<ESLintConfig>();
  });

  test('define ESLint config', () => {
    expectTypeOf(
      defineConfig({
        env: {},
        extends: [],
        rules: {},
      }),
    ).toEqualTypeOf<ESLintConfig>();
  });

  test('define an item of flat ESLint config', () => {
    expectTypeOf(
      defineFlatConfig({
        ignores: [],
        plugins: {},
        rules: {},
      }),
    ).toEqualTypeOf<FlatESLintConfig>();
  });
});
