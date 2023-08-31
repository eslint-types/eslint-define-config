import { describe, expectTypeOf, test } from 'vitest';
import type { ESLintConfig, FlatESLintConfig } from '../src/index.d.ts';
import { defineConfig, defineFlatConfig } from '../src/index.js';

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

  test('define predefined flat ESLint config', () => {
    expectTypeOf(
      defineFlatConfig('eslint:recommended'),
    ).toEqualTypeOf<FlatESLintConfig>();
  });

  test('define flat ESLint config', () => {
    expectTypeOf(
      defineFlatConfig([
        'eslint:recommended',
        {
          ignores: [],
          plugins: {},
          rules: {},
          settings: {},
        },
      ]),
    ).toEqualTypeOf<FlatESLintConfig[]>();
  });
});
