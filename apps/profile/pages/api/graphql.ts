import { createYoga, createSchema } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'
import {DateTimeResolver} from "graphql-scalars"
import { typeDefs } from '../../schema'
import QueryResolver from "../../src/resolvers/query"
import MutationResolver from "../../src/resolvers/mutation"
import { Resolvers } from '../../src/gql/graphql'
 
export const config = {
    runtime:"edge",
    
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
    
    
  }
}
const resolvers:Resolvers={
    DateTime:DateTimeResolver,
    Query:QueryResolver,
    Mutation:MutationResolver
}
 
export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql',
  schema:createSchema({typeDefs, resolvers} ),
})