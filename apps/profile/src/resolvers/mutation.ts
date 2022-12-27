import { PutCommand, PutCommandInput } from "@aws-sdk/lib-dynamodb"
import { client } from "../dynamodb/client"
import { MutationResolvers } from "../gql/graphql"

const Mutation:MutationResolvers={
  createJoke:async(_, args)=>{
    const {id,content,creatorId} = args.input
    try {
       const putParams:PutCommandInput={
      TableName:process.env.TABLE_NAME,
      Item:{
        PK:`JOKE#${id}`,
        SK:`JOKE#${id}`,
        id,
        content,
        createdAt:new Date(),
        creatorId
        
      }
    

    }
    const result = await client.send(new PutCommand(putParams))
    console.log("result after mutation", result)
    if(result){
      return true
    }else{
      return false
    }
    }
     catch (error) {
      console.log(error)
      return false
      
    }}
    
   
  
}
export default Mutation