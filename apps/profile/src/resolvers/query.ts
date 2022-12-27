import { ScanCommand } from "@aws-sdk/client-dynamodb"
import { GetCommand, GetCommandInput, ScanCommandInput } from "@aws-sdk/lib-dynamodb"
import { client } from "../dynamodb/client"
import { Joke, QueryResolvers } from "../gql/graphql"

const Query:QueryResolvers={
    joke:async(_,args)=>{
        const {id} = args
        try {
               const params:GetCommandInput={
            TableName:process.env.TABLE_NAME,
            Key:{PK:`JOKE#${id}`}
        }
        const result = await client.send(new GetCommand(params))
        console.log("result from getting a joke", result)
        if(result && result.Item){
            return result.Item as Joke
        }
        else{
            return null
        }
        } catch (error) {
            console.log(error)
            return null
            
        }

    },
    jokeList:async(_,args)=>{
        try {
            const params:ScanCommandInput={
                TableName:process.env.TABLE_NAME,
                ExclusiveStartKey:args.LastEvaluatedKey? args.LastEvaluatedKey:undefined,
                Limit:5,


            }
            const result = await client.send(new ScanCommand(params));
            if (result && result.Items && result.Items.length!==0){
                return {nodes:result.Items as Joke[], pageInfo:{hasNextPage:result.LastEvaluatedKey? true:false, endCursor:result.LastEvaluatedKey as Joke} }
            }else{
                return null;
            }
        } catch (error) {
            console.log(error)
            return null
            
        }

    }
    
}
export default Query