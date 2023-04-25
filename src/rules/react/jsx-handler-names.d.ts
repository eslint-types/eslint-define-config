import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxHandlerNamesOption =
  | {
      eventHandlerPrefix?: string;
      eventHandlerPropPrefix?: string;
      checkLocalVariables?: boolean;
      checkInlineFunction?: boolean;
    }
  | {
      eventHandlerPrefix?: string;
      eventHandlerPropPrefix?: false;
      checkLocalVariables?: boolean;
      checkInlineFunction?: boolean;
    }
  | {
      eventHandlerPrefix?: false;
      eventHandlerPropPrefix?: string;
      checkLocalVariables?: boolean;
      checkInlineFunction?: boolean;
    }
  | {
      checkLocalVariables?: boolean;
    }
  | {
      checkInlineFunction?: boolean;
    };

/**
 * Options.
 */
export type JsxHandlerNamesOptions = [JsxHandlerNamesOption?];

/**
 * Enforce event handler naming conventions in JSX.
 *
 * @see [jsx-handler-names](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md)
 */
export type JsxHandlerNamesRuleConfig = RuleConfig<JsxHandlerNamesOptions>;

/**
 * Enforce event handler naming conventions in JSX.
 *
 * @see [jsx-handler-names](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md)
 */
export interface JsxHandlerNamesRule {
  /**
   * Enforce event handler naming conventions in JSX.
   *
   * @see [jsx-handler-names](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md)
   */
  'react/jsx-handler-names': JsxHandlerNamesRuleConfig;
}
