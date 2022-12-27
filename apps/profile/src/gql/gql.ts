/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "fragment Joke on Joke {\n  id\n  creatorId\n  content\n  createdAt\n  views\n}": types.JokeFragmentDoc,
    "mutation createJoke($input: JokeInput!) {\n  createJoke(input: $input)\n}": types.CreateJokeDocument,
    "query Joke($id: String) {\n  joke(id: $id) {\n    ...Joke\n  }\n}": types.JokeDocument,
    "query JokeList($LastEvaluatedKey: JokesLastEvaluatedKey!) {\n  jokeList(LastEvaluatedKey: $LastEvaluatedKey) {\n    pageInfo {\n      hasNextPage\n      endCursor {\n        ...Joke\n      }\n    }\n    nodes {\n      ...Joke\n    }\n  }\n}": types.JokeListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Joke on Joke {\n  id\n  creatorId\n  content\n  createdAt\n  views\n}"): (typeof documents)["fragment Joke on Joke {\n  id\n  creatorId\n  content\n  createdAt\n  views\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createJoke($input: JokeInput!) {\n  createJoke(input: $input)\n}"): (typeof documents)["mutation createJoke($input: JokeInput!) {\n  createJoke(input: $input)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Joke($id: String) {\n  joke(id: $id) {\n    ...Joke\n  }\n}"): (typeof documents)["query Joke($id: String) {\n  joke(id: $id) {\n    ...Joke\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query JokeList($LastEvaluatedKey: JokesLastEvaluatedKey!) {\n  jokeList(LastEvaluatedKey: $LastEvaluatedKey) {\n    pageInfo {\n      hasNextPage\n      endCursor {\n        ...Joke\n      }\n    }\n    nodes {\n      ...Joke\n    }\n  }\n}"): (typeof documents)["query JokeList($LastEvaluatedKey: JokesLastEvaluatedKey!) {\n  jokeList(LastEvaluatedKey: $LastEvaluatedKey) {\n    pageInfo {\n      hasNextPage\n      endCursor {\n        ...Joke\n      }\n    }\n    nodes {\n      ...Joke\n    }\n  }\n}"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;