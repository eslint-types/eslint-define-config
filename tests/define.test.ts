import { expectTypeOf } from 'expect-type';
import { describe, test } from 'vitest';
import type { ESLintConfig, FlatESLintConfig, FlatESLintConfigs } from '../src';
import { defineConfig } from '../src';

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
      defineConfig({
        includes: [],
        ignores: [],
        plugins: {},
        rules: {},
      }),
    ).toEqualTypeOf<FlatESLintConfig>();
  });

  test('define predefined flat ESLint config', () => {
    expectTypeOf(
      defineConfig('eslint:recommended'),
    ).toEqualTypeOf<FlatESLintConfig>();
  });

  test('define flat ESLint config', () => {
    expectTypeOf(
      defineConfig([
        'eslint:recommended',
        {
          includes: [],
          ignores: [],
          plugins: {},
          rules: {},
        },
      ]),
    ).toEqualTypeOf<FlatESLintConfigs>();
  });
});
