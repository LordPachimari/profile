/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Comment = {
  __typename?: 'Comment';
  PK?: Maybe<Scalars['String']>;
  SK?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  creatorId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type Joke = {
  __typename?: 'Joke';
  PK?: Maybe<Scalars['String']>;
  SK?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  views?: Maybe<Scalars['Int']>;
};

export type JokeInput = {
  content?: InputMaybe<Scalars['String']>;
  creatorId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type JokeList = {
  __typename?: 'JokeList';
  nodes?: Maybe<Array<Maybe<Joke>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type JokesLastEvaluatedKey = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createJoke?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateJokeArgs = {
  input: JokeInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Joke>;
  hasNextPage: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  joke?: Maybe<Joke>;
  jokeList?: Maybe<JokeList>;
};


export type QueryJokeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryJokeListArgs = {
  LastEvaluatedKey?: InputMaybe<JokesLastEvaluatedKey>;
};

export type User = {
  __typename?: 'User';
  avatarUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type JokeFragment = { __typename?: 'Joke', id: string, creatorId?: string | null, content?: string | null, createdAt?: any | null, views?: number | null } & { ' $fragmentName'?: 'JokeFragment' };

export type CreateJokeMutationVariables = Exact<{
  input: JokeInput;
}>;


export type CreateJokeMutation = { __typename?: 'Mutation', createJoke?: boolean | null };

export type JokeQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type JokeQuery = { __typename?: 'Query', joke?: (
    { __typename?: 'Joke' }
    & { ' $fragmentRefs'?: { 'JokeFragment': JokeFragment } }
  ) | null };

export type JokeListQueryVariables = Exact<{
  LastEvaluatedKey: JokesLastEvaluatedKey;
}>;


export type JokeListQuery = { __typename?: 'Query', jokeList?: { __typename?: 'JokeList', pageInfo?: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: (
        { __typename?: 'Joke' }
        & { ' $fragmentRefs'?: { 'JokeFragment': JokeFragment } }
      ) | null } | null, nodes?: Array<(
      { __typename?: 'Joke' }
      & { ' $fragmentRefs'?: { 'JokeFragment': JokeFragment } }
    ) | null> | null } | null };

export const JokeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Joke"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Joke"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"views"}}]}}]} as unknown as DocumentNode<JokeFragment, unknown>;
export const CreateJokeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createJoke"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JokeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createJoke"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateJokeMutation, CreateJokeMutationVariables>;
export const JokeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Joke"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joke"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Joke"}}]}}]}},...JokeFragmentDoc.definitions]} as unknown as DocumentNode<JokeQuery, JokeQueryVariables>;
export const JokeListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JokeList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"LastEvaluatedKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JokesLastEvaluatedKey"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jokeList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"LastEvaluatedKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"LastEvaluatedKey"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Joke"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Joke"}}]}}]}}]}},...JokeFragmentDoc.definitions]} as unknown as DocumentNode<JokeListQuery, JokeListQueryVariables>;
export const JokeFragmentDoc = gql`
    fragment Joke on Joke {
  id
  creatorId
  content
  createdAt
  views
}
    `;
export const CreateJokeDocument = gql`
    mutation createJoke($input: JokeInput!) {
  createJoke(input: $input)
}
    `;

export function useCreateJokeMutation() {
  return Urql.useMutation<CreateJokeMutation, CreateJokeMutationVariables>(CreateJokeDocument);
};
export const JokeDocument = gql`
    query Joke($id: String) {
  joke(id: $id) {
    ...Joke
  }
}
    ${JokeFragmentDoc}`;

export function useJokeQuery(options?: Omit<Urql.UseQueryArgs<JokeQueryVariables>, 'query'>) {
  return Urql.useQuery<JokeQuery, JokeQueryVariables>({ query: JokeDocument, ...options });
};
export const JokeListDocument = gql`
    query JokeList($LastEvaluatedKey: JokesLastEvaluatedKey!) {
  jokeList(LastEvaluatedKey: $LastEvaluatedKey) {
    pageInfo {
      hasNextPage
      endCursor {
        ...Joke
      }
    }
    nodes {
      ...Joke
    }
  }
}
    ${JokeFragmentDoc}`;

export function useJokeListQuery(options: Omit<Urql.UseQueryArgs<JokeListQueryVariables>, 'query'>) {
  return Urql.useQuery<JokeListQuery, JokeListQueryVariables>({ query: JokeListDocument, ...options });
};


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Comment: ResolverTypeWrapper<Comment>;
  String: ResolverTypeWrapper<Scalars['String']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Joke: ResolverTypeWrapper<Joke>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JokeInput: JokeInput;
  JokeList: ResolverTypeWrapper<JokeList>;
  JokesLastEvaluatedKey: JokesLastEvaluatedKey;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Comment: Comment;
  String: Scalars['String'];
  DateTime: Scalars['DateTime'];
  Joke: Joke;
  Int: Scalars['Int'];
  JokeInput: JokeInput;
  JokeList: JokeList;
  JokesLastEvaluatedKey: JokesLastEvaluatedKey;
  Mutation: {};
  Boolean: Scalars['Boolean'];
  PageInfo: PageInfo;
  Query: {};
  User: User;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  PK?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  SK?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type JokeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Joke'] = ResolversParentTypes['Joke']> = {
  PK?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  SK?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JokeListResolvers<ContextType = any, ParentType extends ResolversParentTypes['JokeList'] = ResolversParentTypes['JokeList']> = {
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Joke']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createJoke?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationCreateJokeArgs, 'input'>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['Joke']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  joke?: Resolver<Maybe<ResolversTypes['Joke']>, ParentType, ContextType, Partial<QueryJokeArgs>>;
  jokeList?: Resolver<Maybe<ResolversTypes['JokeList']>, ParentType, ContextType, Partial<QueryJokeListArgs>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Joke?: JokeResolvers<ContextType>;
  JokeList?: JokeListResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

