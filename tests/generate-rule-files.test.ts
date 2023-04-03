/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { Rule } from 'eslint';
import { describe, expect, it } from 'vitest';
import { generateTypeFromSchema } from '../scripts/generate-rule-files/src/json-schema-to-ts';
import { RuleFile } from '../scripts/generate-rule-files/src/rule-file';

describe('Json schema to TS', () => {
  it('Should clean comments', async () => {
    const result: string = await generateTypeFromSchema(
      {
        type: 'object',
        properties: {
          test: {
            anyOf: [
              {
                type: 'object',
                patternProperties: { '^.+$': { type: 'array' } },
              },
            ],
          },
        },
      },
      'test',
    );

    expect(result).to.not.includes('This interface was referenced by');
    expect(result).to.not.includes('via the `');
  });
});

describe('Rule File', () => {
  it('Main schema', async () => {
    const rule: Rule.RuleModule = {
      meta: {
        docs: {
          description: 'My rule description',
          url: 'http://test.com/my-rule',
        },
        schema: [{ type: 'integer', minimum: 0 }],
      },
    } as Rule.RuleModule;

    const ruleFile: RuleFile = new RuleFile(
      {
        name: 'my-plugin',
        module: 'my-module/my-plugin',
        rules: {},
      },
      'my-plugin',
      'my-rule',
      rule,
    );

    const content: string = await ruleFile.generate();
    expect(content).toMatchSnapshot();
  });

  it('Side schemas', async () => {
    const rule: Rule.RuleModule = {
      meta: {
        docs: {
          description: 'My rule description',
          url: 'http://test.com/my-rule',
        },
        schema: [
          { type: 'integer', minimum: 0 },
          { type: 'string', minLength: 1 },
        ],
      },
    } as Rule.RuleModule;

    const ruleFile: RuleFile = new RuleFile(
      {
        name: 'my-plugin',
        module: 'my-module/my-plugin',
        rules: {},
      },
      'my-plugin',
      'my-rule',
      rule,
    );

    const content: string = await ruleFile.generate();
    expect(content).toMatchSnapshot();
  });

  it('Third schemas', async () => {
    const rule: Rule.RuleModule = {
      meta: {
        docs: {
          description: 'My rule description',
          url: 'http://test.com/my-rule',
        },
        schema: [
          { type: 'integer', minimum: 0 },
          { type: 'string', minLength: 1 },
          { type: 'boolean' },
        ],
      },
    } as Rule.RuleModule;

    const ruleFile: RuleFile = new RuleFile(
      {
        name: 'my-plugin',
        module: 'my-module/my-plugin',
        rules: {},
      },
      'my-plugin',
      'my-rule',
      rule,
    );

    const content: string = await ruleFile.generate();
    expect(content).toMatchSnapshot();
  });

  it('Object schema', async () => {
    const rule: Rule.RuleModule = {
      meta: {
        docs: {
          description: 'My rule description',
          url: 'http://test.com/my-rule',
        },
        schema: {
          type: 'object',
        },
      },
    } as Rule.RuleModule;

    const ruleFile: RuleFile = new RuleFile(
      {
        name: 'my-plugin',
        module: 'my-module/my-plugin',
        rules: {},
      },
      'my-plugin',
      'my-rule',
      rule,
    );

    const content: string = await ruleFile.generate();
    expect(content).toMatchSnapshot();
  });
});
