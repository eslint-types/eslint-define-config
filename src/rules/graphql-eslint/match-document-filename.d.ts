import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 1
 * @maxItems 1
 */
export type MatchDocumentFilenameOption = [
  {
    fileExtension?: '.gql' | '.graphql';
    query?: AsString | AsObject;
    mutation?: AsString | AsObject;
    subscription?: AsString | AsObject;
    fragment?: AsString | AsObject;
  },
];
/**
 * One of: `camelCase`, `PascalCase`, `snake_case`, `UPPER_CASE`, `kebab-case`, `matchDocumentStyle`
 */
export type AsString =
  | 'camelCase'
  | 'PascalCase'
  | 'snake_case'
  | 'UPPER_CASE'
  | 'kebab-case'
  | 'matchDocumentStyle';

export interface AsObject {
  style?:
    | 'camelCase'
    | 'PascalCase'
    | 'snake_case'
    | 'UPPER_CASE'
    | 'kebab-case'
    | 'matchDocumentStyle';
  suffix?: string;
  prefix?: string;
}

/**
 * Options.
 */
export type MatchDocumentFilenameOptions = MatchDocumentFilenameOption;

/**
 * This rule allows you to enforce that the file name should match the operation name.
 *
 * @see [match-document-filename](https://the-guild.dev/graphql/eslint/rules/match-document-filename)
 */
export type MatchDocumentFilenameRuleConfig =
  RuleConfig<MatchDocumentFilenameOptions>;

/**
 * This rule allows you to enforce that the file name should match the operation name.
 *
 * @see [match-document-filename](https://the-guild.dev/graphql/eslint/rules/match-document-filename)
 */
export interface MatchDocumentFilenameRule {
  /**
   * This rule allows you to enforce that the file name should match the operation name.
   *
   * @see [match-document-filename](https://the-guild.dev/graphql/eslint/rules/match-document-filename)
   */
  '@graphql-eslint/match-document-filename': MatchDocumentFilenameRuleConfig;
}
