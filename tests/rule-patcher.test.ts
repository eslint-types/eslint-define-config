import { describe, expect, it } from 'vitest';
import { RulePatcher } from '../scripts/generate-rule-files/src/rule-patcher';
import type {
  RulePatcherModule,
  RulePatcherReport,
} from '../scripts/generate-rule-files/src/rule-patcher/contracts';
import { fixMappedTypes } from '../scripts/generate-rule-files/src/rule-patcher/modules/fix-mapped-types';

const getReportOf = (
  report: RulePatcherReport,
  name: string,
): RulePatcherReport[number] => report.find((item) => item.name === name)!;

describe('Rule patcher', () => {
  it('Should set hasPatched', async () => {
    const rulePatcherModule: RulePatcherModule = {
      name: 'test',
      patch: ({ ast }) => ({ ast, hasPatched: true }),
    };

    const result = await new RulePatcher([rulePatcherModule]).patch('');
    expect(getReportOf(result.report, 'test').hasPatched).toBe(true);
  });

  it('Should generate new source from modified ast', async () => {
    const rulePatcherModule: RulePatcherModule = {
      name: 'test',
      patch: ({ ast }) => {
        const newBody = ast.program.body
          .map((node) => {
            if (node.type === 'ExportNamedDeclaration') {
              return null;
            }

            return node;
          })
          .filter(Boolean) as typeof ast.program.body;

        return {
          ast: {
            ...ast,
            program: { ...ast.program, body: newBody },
          },
          hasPatched: true,
        };
      },
    };

    const result = await new RulePatcher([rulePatcherModule]).patch(`
      export const a = 42
      console.log('lets go')
    `);

    expect(result.fileContent).toBe("console.log('lets go');");
    expect(getReportOf(result.report, 'test').hasPatched).toBe(true);
  });
});

describe('Fix mapped types module', () => {
  it('Should fix wrong mapped types', async () => {
    const result = await new RulePatcher([fixMappedTypes]).patch(`
      type FileExtensionInImportConfig = {
        tryExtensions?: string[];
        [k: string]: 'always' | 'never';
      };
    `);

    expect(result.fileContent).toMatchInlineSnapshot(`
      "type FileExtensionInImportConfig = {
        tryExtensions?: string[];
      } | {
        [k: string]: 'always' | 'never';
      };"
    `);

    expect(getReportOf(result.report, 'fix-mapped-types').hasPatched).toBe(
      true,
    );
  });

  it('Should works if type is exported', async () => {
    const result = await new RulePatcher([fixMappedTypes]).patch(`
      export type FileExtensionInImportConfig = {
        tryExtensions?: string[];
        [k: string]: 'always' | 'never';
      };
    `);

    expect(result.fileContent).toMatchInlineSnapshot(`
      "export type FileExtensionInImportConfig = {
        tryExtensions?: string[];
      } | {
        [k: string]: 'always' | 'never';
      };"
    `);
  });

  it.only('Should works with interface', async () => {
    const result = await new RulePatcher([fixMappedTypes]).patch(`
      export interface FileExtensionInImportConfig {
        tryExtensions?: string[];
        [k: string]: 'always' | 'never';
      };
    `);

    expect(result.fileContent).toMatchInlineSnapshot(`
      "
      export type FileExtensionInImportConfig = {
        tryExtensions?: string[];} | {
        [k: string]: 'always' | 'never';};
      ;"
    `);
  });
});
