import generate from '@babel/generator';
import { parse } from '@babel/parser';
import type { Ast, RulePatcherModule, RulePatcherReport } from './contracts';
import { fixMappedTypes } from './modules/fix-mapped-types';

/**
 * The RulePatcher is a simple class on which we can register modules that can
 * modify the AST and generate a new source file to automatically fix some
 * issues with generated files.
 */
export class RulePatcher {
  private readonly patchers: Set<RulePatcherModule>;

  constructor(patchers: RulePatcherModule[]) {
    this.patchers = new Set(patchers);
  }

  /**
   * Generate an AST from the given source.
   */
  private generateAst(source: string): Ast {
    return parse(source, {
      sourceType: 'module',
      plugins: ['typescript'],
    });
  }

  private generateSource(ast: Ast): string {
    // eslint-disable-next-line
    return generate(ast, { retainLines: true }).code;
  }

  /**
   * Register a new module.
   */
  public registerModule(patcher: RulePatcherModule): this {
    this.patchers.add(patcher);
    return this;
  }

  /**
   * Unregister a module.
   */
  public unregisterModule(patcher: RulePatcherModule): this {
    this.patchers.delete(patcher);
    return this;
  }

  /**
   * Apply all registered modules patch to the given source.
   */
  public async patch(fileContent: string): Promise<{
    fileContent: string;
    report: RulePatcherReport;
  }> {
    const report = [];
    let ast = this.generateAst(fileContent);

    for (const patcher of this.patchers) {
      const result = await patcher.patch({ ast });

      ast = result.ast;
      report.push({ name: patcher.name, hasPatched: result.hasPatched });
    }

    return { fileContent: this.generateSource(ast), report };
  }
}

/**
 * The default rule patcher that includes some common modules
 */
export const defaultRulePatcher = new RulePatcher([fixMappedTypes]);
