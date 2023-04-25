import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface StaticPropertyPlacementConfig {
  propTypes?: 'static public field' | 'static getter' | 'property assignment';
  defaultProps?:
    | 'static public field'
    | 'static getter'
    | 'property assignment';
  childContextTypes?:
    | 'static public field'
    | 'static getter'
    | 'property assignment';
  contextTypes?:
    | 'static public field'
    | 'static getter'
    | 'property assignment';
  contextType?: 'static public field' | 'static getter' | 'property assignment';
  displayName?: 'static public field' | 'static getter' | 'property assignment';
}

/**
 * Option.
 */
export type StaticPropertyPlacementOption =
  | 'static public field'
  | 'static getter'
  | 'property assignment';

/**
 * Options.
 */
export type StaticPropertyPlacementOptions = [
  StaticPropertyPlacementOption?,
  StaticPropertyPlacementConfig?,
];

/**
 * Enforces where React component static properties should be positioned.
 *
 * @see [static-property-placement](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/static-property-placement.md)
 */
export type StaticPropertyPlacementRuleConfig =
  RuleConfig<StaticPropertyPlacementOptions>;

/**
 * Enforces where React component static properties should be positioned.
 *
 * @see [static-property-placement](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/static-property-placement.md)
 */
export interface StaticPropertyPlacementRule {
  /**
   * Enforces where React component static properties should be positioned.
   *
   * @see [static-property-placement](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/static-property-placement.md)
   */
  'react/static-property-placement': StaticPropertyPlacementRuleConfig;
}
