import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireJsdocOption = {
  /**
   * A value indicating whether `constructors` should be checked.
   *
   * When `true`, `exemptEmptyConstructors` may still avoid reporting when no parameters or return values are found.
   *
   * @default true
   *
   * @see [checkConstructors](https://github.com/gajus/eslint-plugin-jsdoc#checkconstructors)
   */
  checkConstructors?: boolean;
  /**
   * A value indicating whether getters should be checked.
   *
   * Besides setting as a boolean, this option can be set to the string `"no-setter"` to indicate that getters should be checked but only when there is no setter. This may be useful if one only wishes documentation on one of the two accessors.
   *
   * @default false
   *
   * @see [checkGetters](https://github.com/gajus/eslint-plugin-jsdoc#checkgetters)
   */
  checkGetters?: boolean;
  /**
   * A value indicating whether setters should be checked.
   *
   * Besides setting as a boolean, this option can be set to the string `"no-getter"` to indicate that setters should be checked but only when there is no getter. This may be useful if one only wishes documentation on one of the two accessors.
   *
   * @default false
   *
   * @see [checkSetters](https://github.com/gajus/eslint-plugin-jsdoc#checksetters)
   */
  checkSetters?: boolean;
  /**
   * Set this to an array of strings or objects representing the additional AST contexts where you wish the rule to be applied (e.g., `Property` for properties).
   *
   * If specified as an object, it should have a `context` property and can have an `inlineCommentBlock` property which, if set to `true`, will add an inline `doc-comment` instead of the regular, multi-line, indented jsdoc block which will otherwise be added.
   *
   * Note that you may need to disable `require` items (e.g., `MethodDefinition`) if you are specifying a more precise form in `contexts` (e.g., `MethodDefinition:not([accessibility="private"])`).
   *
   * See the ["AST and Selectors"](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-advanced-ast-and-selectors) section of our README for more on the expected format.
   *
   * @default []
   *
   * @see [contexts](https://github.com/gajus/eslint-plugin-jsdoc#contexts-5)
   */
  contexts?: Array<
    | string
    | {
        context: string;
        inlineCommentBlock?: boolean;
      }
  >;
  /**
   * A boolean on whether to enable the fixer (which adds an empty jsdoc block).
   *
   * @default true
   *
   * @see [enableFixer](https://github.com/gajus/eslint-plugin-jsdoc#enablefixer)
   */
  enableFixer?: boolean;
  /**
   * When `true`, the rule will not report missing jsdoc blocks above constructors with no parameters or return values (this is enabled by default as the class name or description should be seen as sufficient to convey intent).
   *
   * @default true
   *
   * @see [exemptEmptyConstructors](https://github.com/gajus/eslint-plugin-jsdoc#exemptemptyconstructors)
   */
  exemptEmptyConstructors?: boolean;
  /**
   * When `true`, the rule will not report missing jsdoc blocks above functions/methods with no parameters or return values (intended where function/method names are sufficient for themselves as documentation).
   *
   * @default false
   *
   * @see [exemptEmptyFunctions](https://github.com/gajus/eslint-plugin-jsdoc#exemptemptyfunctions)
   */
  exemptEmptyFunctions?: boolean;
  fixerMessage?: string;
  /**
   * @see [publicOnly](https://github.com/gajus/eslint-plugin-jsdoc#publiconly)
   */
  publicOnly?: {
    /**
     * Only check node ancestors to check if node is exported.
     *
     * @default false
     */
    ancestorsOnly?: boolean;
    /**
     * ESM exports are checked for JSDoc comments.
     *
     * @default true
     */
    esm?: boolean;
    /**
     * CommonJS exports are checked for JSDoc comments.
     *
     * @default true
     */
    cjs?: boolean;
    /**
     * Window global exports are checked for JSDoc comments.
     *
     * @default false
     */
    window?: boolean;
  };
  /**
   * An object with the following optional boolean keys which all default to `false` except as noted, indicating the contexts where the rule will apply.
   *
   * @see [require](https://github.com/gajus/eslint-plugin-jsdoc#require)
   */
  require?: {
    /**
     * @default false
     */
    ArrowFunctionExpression?: boolean;
    /**
     * @default false
     */
    ClassDeclaration?: boolean;
    /**
     * @default false
     */
    ClassExpression?: boolean;
    /**
     * @default true
     */
    FunctionDeclaration?: boolean;
    /**
     * @default false
     */
    FunctionExpression?: boolean;
    /**
     * @default false
     */
    MethodDefinition?: boolean;
  };
};

/**
 * Options.
 */
export type RequireJsdocOptions = [RequireJsdocOption?];

/**
 * Checks for presence of jsdoc comments, on class declarations as well as functions.
 *
 * @see [require-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-jsdoc)
 */
export type RequireJsdocRuleConfig = RuleConfig<RequireJsdocOptions>;

/**
 * Checks for presence of jsdoc comments, on class declarations as well as functions.
 *
 * @see [require-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-jsdoc)
 */
export interface RequireJsdocRule {
  /**
   * Checks for presence of jsdoc comments, on class declarations as well as functions.
   *
   * @see [require-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-jsdoc)
   */
  'jsdoc/require-jsdoc': RequireJsdocRuleConfig;
}
