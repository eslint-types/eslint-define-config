import { expectTypeOf } from 'expect-type';
import { describe, test } from 'vitest';
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
        },
      ]),
    ).toEqualTypeOf<FlatESLintConfig[]>();
  });
});
