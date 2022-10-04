/**
 * Simple class helper to build a JSDoc comment.
 */
export class JsDocBuilder {
  private readonly content: string[] = [];

  public static build(): JsDocBuilder {
    return new JsDocBuilder();
  }

  public add(line?: string): JsDocBuilder {
    if (line) {
      this.content.push(line);
    }
    return this;
  }

  public output(): string {
    return [
      //
      '/**',
      ...this.content.map((line) => ` * ${line}`),
      ' */',
    ].join('\n');
  }
}
