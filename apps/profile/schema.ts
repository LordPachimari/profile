import {  DateTimeTypeDefinition } from "graphql-scalars"
export const typeDefs = /* GraphQL */`
${DateTimeTypeDefinition}
type Joke{
    PK:String
    SK:String
    id:String!
    content:String
    creatorId:String
    createdAt:DateTime
    views:Int
}
type User{
    id:String
    username:String
    avatarUrl:String

}
type Comment{
    PK:String
    SK:String
    id:String
    creatorId:String
    content:String
}

type PageInfo{
    endCursor:Joke
    hasNextPage:Boolean!
}
type JokeList{
    nodes:[Joke]
    pageInfo:PageInfo
}
input JokesLastEvaluatedKey{
    id:String!
}
type Query{
 joke(id:String):Joke

    jokeList(LastEvaluatedKey:JokesLastEvaluatedKey):JokeList
}


input JokeInput{
    id:String
    creatorId:String
    content:String
}
type Mutation{
    createJoke(input:JokeInput!):Boolean
}


`