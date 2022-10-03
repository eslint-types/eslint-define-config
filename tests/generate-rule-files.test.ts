/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { Filesystem } from '@poppinss/dev-utils';
import { join } from 'path';
import { afterEach, describe, expect, it } from 'vitest';
import { generateTypeFromSchema } from '../scripts/generate-rule-files/src/json-schema-to-ts';
import { RuleFile } from '../scripts/generate-rule-files/src/rule-file';

const fs = new Filesystem(join(__dirname, '../tmp'));

afterEach(() => fs.cleanup());

describe('Json schema to ts', () => {
  it('Should remove garbage comments', async () => {
    const result = await generateTypeFromSchema(
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
    const rule = {
      meta: {
        docs: {
          description: 'My rule description',
          url: 'http://test.com/my-rule',
        },
        schema: [{ type: 'integer', minimum: 0 }],
      },
    };

    const ruleFile = new RuleFile(
      { name: 'my-plugin', rules: {} },
      join(fs.basePath, 'my-plugin'),
      'my-rule',
      rule as any,
    );

    const content = await ruleFile.generate();
    expect(content).toMatchSnapshot();
  });

  it('Two schemas', async () => {
    const rule = {
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
    };

    const ruleFile = new RuleFile(
      { name: 'my-plugin', rules: {} },
      join(fs.basePath, 'my-plugin'),
      'my-rule',
      rule as any,
    );

    const content = await ruleFile.generate();
    expect(content).toMatchSnapshot();
  });

  it('Three schemas', async () => {
    const rule = {
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
    };

    const ruleFile = new RuleFile(
      { name: 'my-plugin', rules: {} },
      join(fs.basePath, 'my-plugin'),
      'my-rule',
      rule as any,
    );

    const content = await ruleFile.generate();
    expect(content).toMatchSnapshot();
  });

  it('Object schema', async () => {
    const rule = {
      meta: {
        docs: {
          description: 'My rule description',
          url: 'http://test.com/my-rule',
        },
        schema: {
          type: 'object',
        },
      },
    };

    const ruleFile = new RuleFile(
      { name: 'my-plugin', rules: {} },
      join(fs.basePath, 'my-plugin'),
      'my-rule',
      rule as any,
    );

    const content = await ruleFile.generate();
    expect(content).toMatchSnapshot();
  });
});
