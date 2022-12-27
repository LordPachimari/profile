import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { env } from "process";

const _client = new DynamoDBClient({
    region:process.env.REGION,
    credentials:{
        accessKeyId:process.env.ACCESS_KEY!,
        secretAccessKey:process.env.ACCESS_KEY!
    }
})
export const client = DynamoDBDocumentClient.from(_client);