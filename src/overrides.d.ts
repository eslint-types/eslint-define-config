import type { Environments } from './env';
import type { Extends } from './extends';
import type { Parser, ParserOptions } from './parser-options';
import type { Rules } from './rules';

/**
 *
 */
export interface Override {
  files: string[];
  /**
   * An environment provides predefined global variables.
   *
   * @see [Environments](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments)
   */
  env?: Environments;
  /**
   * Extending Configuration Files.
   *
   * @see [Extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
   */
  extends?: Extends;
  /**
   * Parser.
   *
   * @see [Working with Custom Parsers](https://eslint.org/docs/developer-guide/working-with-custom-parsers)
   * @see [Specifying Parser](https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser)
   */
  parser?: Parser;
  /**
   * Parser Options.
   *
   * @see [Working with Custom Parsers](https://eslint.org/docs/developer-guide/working-with-custom-parsers)
   * @see [Specifying Parser Options](https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options)
   */
  parserOptions?: ParserOptions;
  /**
   * Specifying Processor.
   *
   * @see [processor](https://eslint.org/docs/user-guide/configuring/plugins#specifying-processor)
   */
  processor?: string;
  /**
   * Rules.
   *
   * @see [Rules](https://eslint.org/docs/user-guide/configuring/rules)
   */
  rules?: Rules;
}

/**
 * Overrides.
 */
export type Overrides = Array<Override>;
