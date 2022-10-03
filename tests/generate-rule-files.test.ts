import { afterEach, describe, it, expect } from 'vitest';
import { Filesystem } from '@poppinss/dev-utils';
import { join } from 'path';
import { generateTypeFromSchema } from '../scripts/generate-rule-files/src/json-schema-to-ts';

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
