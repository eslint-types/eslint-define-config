import type { LiteralUnion } from '../../utility-types';

/**
 * React settings.
 *
 * @see [React settings](https://github.com/jsx-eslint/eslint-plugin-react)
 */
export interface ReactSettings extends Partial<Record<string, unknown>> {
  react?: {
    /**
     * Regex for Component Factory to use.
     *
     * @default 'createReactClass'
     */
    createClass?: LiteralUnion<'createReactClass'>;

    /**
     * Pragma to use.
     *
     * @default 'React'
     */
    pragma?: LiteralUnion<'React'>;

    /**
     * Fragment to use (may be a property of <pragma>).
     *
     * @default 'Fragment'
     */
    fragment?: LiteralUnion<'Fragment'>;

    /**
     * React version. "detect" automatically picks the version you have installed.
     *
     * You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
     *
     * It will default to "latest" and warn if missing, and to "detect" in the future.
     *
     * @default 'latest'
     */
    version?: LiteralUnion<'latest' | 'detect'>;

    /**
     * Flow version.
     */
    flowVersion?: string;
  };

  /**
   * The names of any function used to wrap propTypes, e.g. `forbidExtraProps`.
   *
   * If this isn't set, any propTypes wrapped in a function will be skipped.
   */
  propWrapperFunctions?: Array<
    | string
    | {
        property: string;
        object?: string;
        /**
         * For rules that check exact prop wrappers.
         */
        exact?: boolean;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [k: string]: any;
      }
  >;

  /**
   * The name of any function used to wrap components, e.g. Mobx `observer` function.
   *
   * If this isn't set, components wrapped by these functions will be skipped.
   */
  componentWrapperFunctions?: Array<
    | string
    | {
        property: string;
        object?: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [k: string]: any;
      }
  >;

  /**
   * Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />.
   */
  formComponents?: Array<
    | string
    | {
        name: string;
        formAttribute: string;
      }
  >;

  /**
   * Components used as alternatives to <a> for linking, eg. <Link to={ url } />.
   */
  linkComponents?: Array<
    | string
    | {
        name: string;
        linkAttribute: string;
      }
  >;
}
