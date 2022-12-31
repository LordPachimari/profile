import {createPresignedPost}from "@aws-sdk/s3-presigned-post" 
import { S3Client } from "@aws-sdk/client-s3";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const client = new S3Client({  region: process.env.REGION,
        
    credentials:{ accessKeyId: process.env.ACCESS_KEY!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!} });


  try {
    const post = createPresignedPost(client,{
      Bucket: process.env.BUCKET_NAME!,
      Fields: {
        key: `files/${req.query.file}`,
        "Content-Type": req.query.fileType!,
      },
      Expires: 60, // seconds
      Conditions: [
        ["content-length-range", 0, 1048576], // up to 1 MB
      ],
    });
    console.log("post", post);
    res.status(200).json(post);
  } catch (error) {
    console.log("Error creating presigned URL", error);
  }
}